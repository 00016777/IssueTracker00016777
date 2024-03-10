using IssueTracker00016777.Models;

namespace IssueTracker00016777.ModelDtos;

public class IssueDTO
{
  public string Title { get; set; } 
  public string Description { get; set; }
  public IssuePriority00016777 Priority { get; set; }
  public List<UserDTO>? Users { get; set; }
}


