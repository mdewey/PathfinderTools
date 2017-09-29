using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace PathfinderTools.Migrations
{
    public partial class RenameAttitude : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Attitude",
                table: "Creatures");

            migrationBuilder.AddColumn<int>(
                name: "FriendlinessValue",
                table: "Creatures",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "FriendlinessValue",
                table: "Creatures");

            migrationBuilder.AddColumn<int>(
                name: "Attitude",
                table: "Creatures",
                nullable: false,
                defaultValue: 0);
        }
    }
}
