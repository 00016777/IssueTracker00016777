using AutoMapper;
using AutoMapper.QueryableExtensions;
using IssueTracker00016777.Data;
using IssueTracker00016777.ModelDtos;
using IssueTracker00016777.Models;
using IssueTracker00016777.Server.ModelDtos;
using Microsoft.EntityFrameworkCore;

namespace IssueTracker00016777.Service.IssueServices;

public class IssueService(ApplicationDbContext dbContext,
                         IMapper mapper) : IIssueService
{
    public async Task<bool> AddOrRemoveUsersToIssues(AddOrDeleteUserFormIssue addOrDeleteUserFormIssue, CancellationToken token = default)
    {
        var foundIssue = await dbContext.Issues.Include(x => x.Users).SingleOrDefaultAsync(x => x.Id == addOrDeleteUserFormIssue.IssueId, token);
        if (foundIssue == null) return false;

        if (addOrDeleteUserFormIssue.UserIds == null || addOrDeleteUserFormIssue.UserIds.Length == 0)
        {
            foundIssue.Users = null;
        }
        else
        {
            var foundUsers = await dbContext.Users.Where(x => addOrDeleteUserFormIssue.UserIds
                                             .Contains(x.Id))
                                             .ToListAsync(token);
            if (foundUsers is null) return false;

            foundIssue.Users = foundUsers;

        }
        dbContext.Issues.Update(foundIssue);
        return await dbContext.SaveChangesAsync(token) > 0;

    }


    public async Task<int> CreateOrUpdateIssueAsync(IssueCreateOrUpdateDto issueCreateOrUpdateDto, CancellationToken token = default)
    {
        
        int issueId = 0;

        if(issueCreateOrUpdateDto.Id == 0 || issueCreateOrUpdateDto.Id == null)
        {
            var mappedIssue = mapper.Map<Issue00016777>(issueCreateOrUpdateDto);
            await dbContext.Issues.AddAsync(mappedIssue, token);
            issueId = mappedIssue.Id;

        }
        else
        {
            var foundIssue = await dbContext.Issues.FindAsync(issueCreateOrUpdateDto.Id, token);
            if (foundIssue == null) return 0;

            foundIssue.Title = issueCreateOrUpdateDto.Title;
            foundIssue.Priority = issueCreateOrUpdateDto.Priority;
            foundIssue.Description = issueCreateOrUpdateDto.Description;
            dbContext.Issues.Update(foundIssue);
            issueId = foundIssue.Id;
        }
        await dbContext.SaveChangesAsync(token);    
        return issueId;
    }

  

    public async Task<bool> DeleteIssueByIdAsync(int IssueId, CancellationToken token = default)
    {
        var foundIssue = await dbContext.Issues.FindAsync(IssueId, token);
        if (foundIssue is null) return false;
        dbContext.Issues.Remove(foundIssue);
        return await dbContext.SaveChangesAsync(token) > 0;
    }

    public Task<List<IssueDTO>> GetAllIssuesAsync(string searchByTitle = "", CancellationToken token = default)
    {
        var query = dbContext.Issues.Include(x=> x.Users).AsNoTracking();
        if (!string.IsNullOrEmpty(searchByTitle))
        {
            query = query.Where(x=> searchByTitle.Contains(x.Title, StringComparison.OrdinalIgnoreCase));  
            
        }
        var result = query.ProjectTo<IssueDTO>(mapper.ConfigurationProvider)
                          .ToListAsync(token);

        return result;  
    }

    public async Task<IssueDTO> GetIssueByIdAsync(int IssueId, CancellationToken token = default)
    {
        var entity = await dbContext.Issues.Include(x=> x.Users).SingleOrDefaultAsync(x=> x.Id == IssueId, token);

        return mapper.Map<IssueDTO>(entity);        
    }
}
