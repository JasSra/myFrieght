using Freight.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace Freight.Api.Data;

public class FreightDbContext : DbContext
{
    public FreightDbContext(DbContextOptions<FreightDbContext> options) : base(options) {}

    public DbSet<Job> Jobs => Set<Job>();
    public DbSet<Invoice> Invoices => Set<Invoice>();
    public DbSet<Payment> Payments => Set<Payment>();
    public DbSet<Account> Accounts => Set<Account>();
    public DbSet<Receipt> Receipts => Set<Receipt>();
}
