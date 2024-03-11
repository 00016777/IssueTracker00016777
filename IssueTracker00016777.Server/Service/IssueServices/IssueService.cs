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
        var foundIssue = await dbContext.Issues.Include(x=> x.Users).SingleOrDefaultAsync(x=> x.Id == addOrDeleteUserFormIssue.IssueId, token);
        if (foundIssue == null) return false;

        var foundUsers = await dbContext.Users.Where(x => addOrDeleteUserFormIssue.UserIds
                                              .Contains(x.Id))
                                              .ToListAsync(token);
        if (foundUsers is null) return false;

        if (addOrDeleteUserFormIssue.IsDeleted)
        {
            foundIssue.Users = foundIssue.Users.Where(x => !addOrDeleteUserFormIssue.UserIds.Contains(x.Id))
                                               .ToList();
        }
        else
        {
            foundIssue.Users = foundUsers;
        }
        dbContext.Issues.Update(foundIssue);
        return await dbContext.SaveChangesAsync(token) > 0;

    }


    public async Task<bool> CreateOrUpdateIssueAsync(IssueCreateOrUpdateDto issueCreateOrUpdateDto, CancellationToken token = default)
    {
        if(issueCreateOrUpdateDto == null) return false;
       
        if(issueCreateOrUpdateDto.Id == 0)
        {
            var mappedIssue = mapper.Map<Issue00016777>(issueCreateOrUpdateDto);
            await dbContext.Issues.AddAsync(mappedIssue, token);
        }
        else
        {
            var foundIssue = await dbContext.Issues.FindAsync(issueCreateOrUpdateDto.Id, token);
            if (foundIssue == null) return false;

            foundIssue.Title = issueCreateOrUpdateDto.Title;
            foundIssue.Priority = issueCreateOrUpdateDto.Priority;
            foundIssue.Description = issueCreateOrUpdateDto.Description;
            dbContext.Issues.Update(foundIssue);
        }
        return await dbContext.SaveChangesAsync(token) > 0;
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
