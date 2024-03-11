using IssueTracker00016777.Service.IssueServices;
using IssueTracker00016777.Service.UserServices;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace IssueTracker00016777.Server.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ApiBaseController : ControllerBase
    {
        protected IIssueService issueService =>
                  HttpContext.RequestServices.GetRequiredService<IIssueService>();    

        protected IUserService userService =>
                  HttpContext.RequestServices.GetRequiredService<IUserService>();   


    }
}
