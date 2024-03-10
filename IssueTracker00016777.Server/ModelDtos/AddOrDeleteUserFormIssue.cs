namespace IssueTracker00016777.ModelDtos;

public class AddOrDeleteUserFormIssue
{
    public int[] UserIds { get; set; }
    public int IssueId { get; set; }    
    public bool IsDeleted { get; set; } = false;
}
