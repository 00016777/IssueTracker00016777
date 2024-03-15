using IssueTracker00016777.Data.Interceptors;
using IssueTracker00016777.Data;
using IssueTracker00016777.Service.IssueServices;
using IssueTracker00016777.Service.UserServices;
using System.Reflection;
using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddScoped<OnSaveInterceptor>();
builder.Services.AddDbContext<ApplicationDbContext>((sp, o) =>
{
   o.UseSqlServer(builder.Configuration.GetConnectionString("SqlServer"))
    //o.UseInMemoryDatabase("IssueTracker")
    .AddInterceptors(sp.GetRequiredService<OnSaveInterceptor>());
});

builder.Services.AddAutoMapper(Assembly.GetExecutingAssembly());
builder.Services.AddScoped<IIssueService, IssueService>();
builder.Services.AddScoped<IUserService, UserService>();

builder.Services.AddControllers().AddJsonOptions(x =>
{
    x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
});


builder.Services.AddEndpointsApiExplorer();
//builder.Services.AddSwaggerGen();
builder.Services.AddOpenApiDocument();

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

app.UseCors(cfg =>
{
    cfg.AllowAnyHeader()
    .AllowAnyMethod()
    .AllowAnyOrigin();
});

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    //app.UseSwagger();
    //app.UseSwaggerUI();
    app.UseOpenApi(); 
    app.UseSwaggerUi();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();
