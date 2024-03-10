namespace IssueTracker00016777.Models;

public class User00016777 : BaseEntity00016777
{
    public string FullName { get; set; }    
    public string UserName { get; set; }    
    public DateTime? BirthDate { get; set; } 
    public string? Email { get; set; }
    public string? PhoneNumber { get; set; }
    public Sex00016777 Sex00016777 { get; set; } = Sex00016777.NotSet;
    public List<Issue00016777>? Issues { get; set; } = new List<Issue00016777>();    
    
}
