using AutoMapper;
using IssueTracker00016777.Data;
using IssueTracker00016777.ModelDtos;
using IssueTracker00016777.Models;

namespace IssueTracker00016777.Service.UserServices;

public class UserService(ApplicationDbContext dbContext,
                         IMapper mapper) : IUserService
{
    public async Task<bool> CreateUserAsync(UserDTO userDTO, CancellationToken token = default)
    {
       var mappedUser =  mapper.Map<User00016777>(userDTO); 
       await dbContext.Users.AddAsync(mappedUser, token);
        return await dbContext.SaveChangesAsync(token) > 0;
    }

    public Task<bool> DeleteUserByIdAsync(int UserId, CancellationToken token = default)
    {
        throw new NotImplementedException();
    }

    public Task<List<UserDTO>> GetAllUsersAsync(string searchFilter = "", CancellationToken token = default)
    {
        throw new NotImplementedException();
    }

    public Task<UserDTO> GetUserByIdAsync(int UserId, CancellationToken token = default)
    {
        throw new NotImplementedException();
    }

    public Task<bool> UpdateUserAsync(int UserId, UserDTO userDTO, CancellationToken token = default)
    {
        throw new NotImplementedException();
    }
}
