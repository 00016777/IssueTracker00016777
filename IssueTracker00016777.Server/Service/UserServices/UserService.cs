using AutoMapper;
using AutoMapper.QueryableExtensions;
using IssueTracker00016777.Data;
using IssueTracker00016777.ModelDtos;
using IssueTracker00016777.Models;
using Microsoft.EntityFrameworkCore;

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

    public async Task<bool> DeleteUserByIdAsync(int UserId, CancellationToken token = default)
    {
        var foundUser = await dbContext.Users.FindAsync(UserId, token);
        if (foundUser != null) return false;
        dbContext.Users.Remove(foundUser);
        return await dbContext.SaveChangesAsync(token) > 0;
    }

    public async Task<List<UserDTO>> GetAllUsersAsync(string searchFilter = "", CancellationToken token = default)
    {
        var query = dbContext.Users.AsNoTracking();
        if(!string.IsNullOrEmpty(searchFilter))
            query = query.Where(x=> searchFilter.Contains(x.FullName, StringComparison.OrdinalIgnoreCase));

        var result = await query.ProjectTo<UserDTO>(mapper.ConfigurationProvider).ToListAsync(token);

        return result;
    }

    public async Task<UserDTO> GetUserByIdAsync(int UserId, CancellationToken token = default)
    {
        var foundUser = await dbContext.Users.FindAsync(UserId,token);
        if(foundUser is null) return new UserDTO();

        return mapper.Map<UserDTO>(foundUser);
    }

    public async Task<bool> UpdateUserAsync(int UserId, UserDTO userDTO, CancellationToken token = default)
    {
        var foundUser = await dbContext.Users.FindAsync(UserId, token);
        if(foundUser is null) return false;

        foundUser.Email = userDTO.Email;
        foundUser.PhoneNumber = userDTO.PhoneNumber;
        foundUser.UserName = userDTO.UserName;
        foundUser.FullName = userDTO.FullName;
        foundUser.Sex00016777 = userDTO.Sex00016777;
        foundUser.BirthDate = userDTO.BirthDate;
        dbContext.Users.Update(foundUser);

        return await dbContext.SaveChangesAsync(token) > 0;
    }
}
