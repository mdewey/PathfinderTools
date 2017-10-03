using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace PathfinderTools.Migrations
{
    public partial class AddDungdeonIdToRoom : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "DungeonId",
                table: "Rooms",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Rooms_DungeonId",
                table: "Rooms",
                column: "DungeonId");

            migrationBuilder.AddForeignKey(
                name: "FK_Rooms_Dungeons_DungeonId",
                table: "Rooms",
                column: "DungeonId",
                principalTable: "Dungeons",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Rooms_Dungeons_DungeonId",
                table: "Rooms");

            migrationBuilder.DropIndex(
                name: "IX_Rooms_DungeonId",
                table: "Rooms");

            migrationBuilder.DropColumn(
                name: "DungeonId",
                table: "Rooms");
        }
    }
}
