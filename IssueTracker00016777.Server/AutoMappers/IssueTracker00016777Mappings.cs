using AutoMapper;
using IssueTracker00016777.ModelDtos;
using IssueTracker00016777.Models;
using IssueTracker00016777.Server.ModelDtos;

namespace IssueTracker00016777.AutoMappers;

public class IssueTracker00016777Mappings : Profile
{
    public IssueTracker00016777Mappings()
    {
        CreateMap<UserDTO, User00016777>().ReverseMap();
           
        CreateMap<IssueDTO, Issue00016777>()
            .ForMember(dest=> dest.Users, opt=> opt.MapFrom(x=> x.Users)).ReverseMap();

        CreateMap<IssueCreateOrUpdateDto, Issue00016777>().ReverseMap();

    }
}
