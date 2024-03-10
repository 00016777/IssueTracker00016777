using IssueTracker00016777.ModelDtos;
using IssueTracker00016777.Service.IssueServices;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace IssueTracker00016777.Controllers;
[Route("api/[controller]/[action]")]
[ApiController]
public class Issue00016777Controller(IIssueService issueService) : ControllerBase
{

    [HttpPost]
    public async Task<ActionResult> CreateIssue(IssueDTO issue, CancellationToken token)
        => Ok(await issueService.CreateIssueAsync(issue, token));

    [HttpPost]
    public async Task<ActionResult> AddOrDeleteIssueFromUser(AddOrDeleteUserFormIssue addOrDeleteUserFormIssue, CancellationToken token)
        => Ok(await issueService.AddOrRemoveUsersToIssues(addOrDeleteUserFormIssue, token));

    [HttpGet]
    public async Task<ActionResult> GetIssueById(int issueId, CancellationToken token)
        => Ok(await issueService.GetIssueByIdAsync(issueId, token));

    
}
