using IssueTracker00016777.Models;
using Microsoft.EntityFrameworkCore;

namespace IssueTracker00016777.Data;

public class ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : DbContext(options)
{
    public DbSet<Issue00016777> Issues { get; set; }    

    public DbSet<User00016777> Users { get; set; }  

}
