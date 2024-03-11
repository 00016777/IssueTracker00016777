using IssueTracker00016777.ModelDtos;
using IssueTracker00016777.Server.Controllers;
using IssueTracker00016777.Service.UserServices;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace IssueTracker00016777.Controllers;
public class User0001677Controller : ApiBaseController
{
    [HttpGet] 
    public async Task<UserDTO> GetUserById(int userId, CancellationToken cancellationToken)
        => await userService.GetUserByIdAsync(userId, cancellationToken);

    [HttpGet]
    public async Task<List<UserDTO>> GetAllUsers(string? searchText, CancellationToken cancellationToken)
        => await userService.GetAllUsersAsync(searchText, cancellationToken);

    [HttpDelete]
    public async Task<bool> DeleleUserById(int userId, CancellationToken cancellationToken)
        => await userService.DeleteUserByIdAsync(userId, cancellationToken);

    [HttpPost]
    public async Task<bool> CreateOrUpdateUser(UserDTO userDTO, CancellationToken cancellationToken)
        => await userService.CreateOrUpdateUserAsync(userDTO, cancellationToken);   

    
}
