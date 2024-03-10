using IssueTracker00016777.Models;

namespace IssueTracker00016777.ModelDtos;

public class UserDTO
{
    public string FullName { get; set; }
    public string UserName { get; set; }
    public DateTime? BirthDate { get; set; }
    public string? Email { get; set; }
    public string? PhoneNumber { get; set; }
    public Sex00016777 Sex00016777 { get; set; } = Sex00016777.NotSet;

}