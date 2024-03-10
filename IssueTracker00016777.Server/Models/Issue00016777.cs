namespace IssueTracker00016777.Models;

public class Issue00016777 : BaseEntity00016777
{
    public string Title { get; set; }
    public string Description { get; set; }
    public IssuePriority00016777 Priority { get; set; } = IssuePriority00016777.None;

    public List<User00016777>? Users { get; set; } = new List<User00016777>();

}
