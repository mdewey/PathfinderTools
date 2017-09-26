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
                System.Console.WriteLine("Actually Seeding data....");

                var aRoom = new Room
                {
                    Name = "Main Room A",
                    Description = "Charm monster greetings everyone do you need help When? Minor globe Oh! Paladin haste. Why did you do that mass curse charm monster greater heal. High elf Old ones well met mark. Halfling welcome my friend April Ready? Vernal Equinox what do you want for it Old ones create food. Paladin Pure ones Hostile ones Warrior."
                };

                var bRoom = new Room
                {
                    Name = "Main Room B",
                    Description = "Foul ones rest here welcome to my dwelling West. Tell us the tale Old ones Now! good hunting. Abominable ones Bearded ones Autumnal Equinox dispel magic. Silver elf Hide Where East. Luskan Icy Beach South wall of stone December. A star shall shine on the hour of our meeting i will follow you to death and beyond Gnome what happened? Your beauty shines bright Drow When indicating respect feeblemind kill it him."
                };

                var hidden = new Room
                {
                    Name = " Treasure Cave",
                    Description = " the players find the following.....",

                };
                var cRoom = new Room
                {
                    Name = "Main Room C",
                    Description = "Your heart is that of the lion who's leading Illusionist good evening greeting. He had too much wine mead ale dispel field The Black Wind ITB charm monster. Ready no one does, don't worry about it that Tormented ones. Sunrise elf dispel i am yours to command Cowardly dogs. Ah! don't look for trouble, it will come to you i would like some wine mead ale protection. Monday East Half-elf February. Friend of my friend gate travel until later then my bow will sing with your sword."
                };

                context.Rooms.Add(aRoom);

                context.Rooms.Add(bRoom);

                context.Rooms.Add(cRoom);

                var ab = new RoomConnector
                {
                    FromRoom = aRoom,
                    ToRoom = bRoom,
                    Direction = Direction.EAST
                };

                var bc = new RoomConnector
                {
                    FromRoom = bRoom,
                    ToRoom = cRoom,
                    Direction = Direction.SOUTH
                };

                var bToTreasure = new RoomConnector
                {
                    FromRoom = bRoom,
                    Direction = Direction.ABOVE,
                    IsHidden = true,
                    DcToFind = 15
                };

                context.RoomConnector.Add(bToTreasure);
                context.RoomConnector.Add(ab);
                context.RoomConnector.Add(bc);

                context.SaveChanges();

                var firstDun = new Dungeon
                {
                    Name = "First!!!",
                    StartingRoom = aRoom
                };

                context.Dungeons.Add(firstDun);

                context.SaveChanges();

            }
        }
    }
}
