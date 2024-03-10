using IssueTracker00016777.ModelDtos;

namespace IssueTracker00016777.Service.IssueServices;

public interface IIssueService
{
   Task<bool> CreateIssueAsync(IssueDTO issueDTO, CancellationToken token = default);
   Task<bool> UpdateIssueAsync(int IssueId,IssueDTO issueDTO, CancellationToken token = default);
   Task<bool> DeleteIssueByIdAsync(int IssueId, CancellationToken token = default);
   Task<IssueDTO> GetIssueByIdAsync(int IssueId, CancellationToken token = default);     
   Task<List<IssueDTO>> GetAllIssuesAsync(string searchByTitle = "",  CancellationToken token = default);
   Task<bool> AddOrRemoveUsersToIssues(AddOrDeleteUserFormIssue addOrDeleteUserFormIssue, CancellationToken token = default);


   
}
