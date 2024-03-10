using IssueTracker00016777.ModelDtos;
using IssueTracker00016777.Service.UserServices;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace IssueTracker00016777.Controllers;
[Route("api/[controller]/[action]")]
[ApiController]
public class User0001677Controller(IUserService userService) : ControllerBase
{
    [HttpPost]
    public async Task<ActionResult> CreateUser(UserDTO userDTO, CancellationToken cancellationToken)
           => Ok(await userService.CreateUserAsync(userDTO, cancellationToken));
    [HttpGet] 
    public async Task<ActionResult> GetUserById(int userId, CancellationToken cancellationToken)
        => Ok(await userService.GetUserByIdAsync(userId, cancellationToken));   



    
}
