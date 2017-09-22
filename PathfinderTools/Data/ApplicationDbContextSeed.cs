using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using System.Linq;
using PathfinderTools.Models;


namespace PathfinderTools.Data
{
    public static class ApplicationDbContextSeed
    {
        public static bool AllMigrationsApplied(this ApplicationDbContext context)
        {
            var applied = context.GetService<IHistoryRepository>()
                .GetAppliedMigrations()
                .Select(m => m.MigrationId);

            var total = context.GetService<IMigrationsAssembly>()
                .Migrations
                .Select(m => m.Key);

            return !total.Except(applied).Any();
        }

        public static void EnsureSeeded(this ApplicationDbContext context)
        {
            System.Console.WriteLine("Seeding data....");
            if (!context.Rooms.Any())
            {
                var aRoom = new Room
                {
                    Name = "Main Room A"
                };

                var bRoom = new Room
                {
                    Name = "Main Room B"
                };
                var cRoom = new Room
                {
                    Name = "Main Room C"
                };

                context.Rooms.Add(aRoom);

                context.Rooms.Add(bRoom);

                context.Rooms.Add(cRoom);

                var ab = new RoomConnector
                {
                    FromRoom = aRoom,
                    ToRoom = bRoom
                };

                context.RoomConnector.Add(ab);

                context.SaveChanges();
            }
        }
    }
}
