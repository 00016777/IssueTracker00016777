using IssueTracker00016777.ModelDtos;
using IssueTracker00016777.Server.Controllers;
using IssueTracker00016777.Server.ModelDtos;
using IssueTracker00016777.Service.IssueServices;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace IssueTracker00016777.Controllers;
public class Issue00016777Controller: ApiBaseController
{

    [HttpPost]
    public async Task<bool> CreateOrUpdateIssue(IssueCreateOrUpdateDto issue, CancellationToken token)
        => await issueService.CreateOrUpdateIssueAsync(issue, token);

    [HttpPost]
    public async Task<bool> AddOrDeleteIssueFromUser(AddOrDeleteUserFormIssue addOrDeleteUserFormIssue, CancellationToken token)
        => await issueService.AddOrRemoveUsersToIssues(addOrDeleteUserFormIssue, token);

    [HttpGet]
    public async Task<IssueDTO> GetIssueById(int issueId, CancellationToken token)
        => await issueService.GetIssueByIdAsync(issueId, token);


    [HttpDelete]
    public async Task<bool> DeleteIssueById(int issueId, CancellationToken token)   
        => await issueService.DeleteIssueByIdAsync(issueId, token);

    [HttpGet]
    public async Task<List<IssueDTO>> GetAllIssues(string? filterBytitle, CancellationToken token)
        => await issueService.GetAllIssuesAsync(filterBytitle, token);
    
}
