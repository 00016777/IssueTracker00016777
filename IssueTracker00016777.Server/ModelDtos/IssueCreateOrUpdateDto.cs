﻿using IssueTracker00016777.Models;

namespace IssueTracker00016777.Server.ModelDtos;

public class IssueCreateOrUpdateDto
{
    public int? Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public IssuePriority00016777 Priority { get; set; }
}

