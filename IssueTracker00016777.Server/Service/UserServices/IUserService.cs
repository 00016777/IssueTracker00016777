using IssueTracker00016777.ModelDtos;

namespace IssueTracker00016777.Service.UserServices;

public interface IUserService
{
    Task<bool> CreateOrUpdateUserAsync(UserDTO userDTO, CancellationToken token = default);
    Task<bool> DeleteUserByIdAsync(int UserId, CancellationToken token = default);
    Task<UserDTO> GetUserByIdAsync(int UserId, CancellationToken token = default);
    Task<List<UserDTO>> GetAllUsersAsync(string searchFilter = "", CancellationToken token = default);
}
