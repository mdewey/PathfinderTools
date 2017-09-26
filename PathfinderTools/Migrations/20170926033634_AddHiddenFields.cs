using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace PathfinderTools.Migrations
{
    public partial class AddHiddenFields : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "DcToFind",
                table: "RoomConnector",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<bool>(
                name: "IsHidden",
                table: "RoomConnector",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DcToFind",
                table: "RoomConnector");

            migrationBuilder.DropColumn(
                name: "IsHidden",
                table: "RoomConnector");
        }
    }
}
