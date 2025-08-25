using Freight.Api.Data;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Web;

var builder = WebApplication.CreateBuilder(args);

var allowedOrigin = builder.Configuration["AllowedOrigin"] ?? "http://localhost:8080";

builder.Services.AddCors(options =>
{
    options.AddPolicy("frontend", policy =>
        policy.WithOrigins(allowedOrigin)
              .AllowAnyHeader()
              .AllowAnyMethod());
});

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddMicrosoftIdentityWebApi(options =>
    {
        builder.Configuration.Bind("AzureAdB2C", options);
        options.TokenValidationParameters.NameClaimType = "name";
    }, options => { builder.Configuration.Bind("AzureAdB2C", options); });

builder.Services.AddAuthorization();

builder.Services.AddDbContext<FreightDbContext>(o => o.UseSqlite(builder.Configuration.GetConnectionString("Default")));

var app = builder.Build();

app.UseCors("frontend");
app.UseAuthentication();
app.UseAuthorization();

app.MapGet("/api/health", () => Results.Ok(new { status = "OK" }));

// Stub endpoints
app.MapGet("/api/jobs", () => Results.Ok(new[]
{
    new { id = "job_1", reference = "REF-1001", pickup = "Botany NSW", dropoff = "Alexandria NSW", status = "Scheduled", createdAt = DateTime.UtcNow.AddDays(-1) },
    new { id = "job_2", reference = "REF-1002", pickup = "Port of Melbourne", dropoff = "Tullamarine VIC", status = "In Transit", createdAt = DateTime.UtcNow.AddHours(-5) }
}));

app.MapGet("/api/invoices", () => Results.Ok(new[]
{
    new { id = "inv_1", number = "INV-23001", amount = 1250.00, currency = "AUD", dueDate = DateTime.UtcNow.AddDays(14), status = "Open" },
    new { id = "inv_2", number = "INV-23002", amount = 860.00, currency = "AUD", dueDate = DateTime.UtcNow.AddDays(7), status = "Paid" }
}));

app.MapGet("/api/invoices/{id}", (string id) => Results.Ok(new { id, number = $"INV-{id}", amount = 1250.0, currency = "AUD", lineItems = new[] { new { description = "Prime mover hourly", qty = 5, rate = 250 } } }));

app.MapGet("/api/accounts/me", () => Results.Ok(new { id = "acct_1", name = "ACME Logistics Pty Ltd", email = "ops@acme.example", abn = "12 345 678 901" }));

app.MapGet("/api/receipts", () => Results.Ok(new[] { new { id = "rcpt_1", invoiceId = "inv_2", amount = 860.0, createdAt = DateTime.UtcNow.AddDays(-2) } }));

app.MapPost("/api/jobs", () => Results.Ok(new { id = Guid.NewGuid().ToString(), status = "Received" }));
app.MapPost("/api/payments", () => Results.Ok(new { id = Guid.NewGuid().ToString(), status = "Authorized" }));

app.MapGet("/api/qr/{value}", (string value) =>
{
    using var generator = new QRCoder.QRCodeGenerator();
    var data = generator.CreateQrCode(value, QRCoder.QRCodeGenerator.ECCLevel.Q);
    using var qrCode = new QRCoder.PngByteQRCode(data);
    var png = qrCode.GetGraphic(5);
    return Results.File(png, "image/png");
});

app.MapPost("/api/contact", () => Results.Ok(new { ok = true }));

app.MapGet("/api/protected/ping", (HttpContext ctx) => Results.Ok(new { ok = true, user = ctx.User?.Identity?.Name }))
    .RequireAuthorization();

app.Run();
