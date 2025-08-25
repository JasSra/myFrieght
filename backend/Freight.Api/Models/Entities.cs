namespace Freight.Api.Models;

public record BaseEntity
{
    public string Id { get; init; } = Guid.NewGuid().ToString();
    public DateTime CreatedAt { get; init; } = DateTime.UtcNow;
    public DateTime? UpdatedAt { get; set; }
}

public record Job : BaseEntity
{
    public string Reference { get; init; } = string.Empty;
    public string Pickup { get; init; } = string.Empty;
    public string Dropoff { get; init; } = string.Empty;
    public string Status { get; set; } = "Scheduled";
}

public record Invoice : BaseEntity
{
    public string Number { get; init; } = string.Empty;
    public double Amount { get; init; }
    public string Currency { get; init; } = "AUD";
    public DateTime DueDate { get; init; }
    public string Status { get; set; } = "Open";
}

public record Payment : BaseEntity
{
    public string InvoiceId { get; init; } = string.Empty;
    public string Status { get; set; } = "Authorized";
}

public record Account : BaseEntity
{
    public string Name { get; init; } = string.Empty;
    public string Email { get; init; } = string.Empty;
    public string Abn { get; init; } = string.Empty;
}

public record Receipt : BaseEntity
{
    public string InvoiceId { get; init; } = string.Empty;
    public double Amount { get; init; }
}
