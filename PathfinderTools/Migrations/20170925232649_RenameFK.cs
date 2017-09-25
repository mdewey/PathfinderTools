using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace PathfinderTools.Migrations
{
    public partial class RenameFK : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Dungeons_Rooms_StartingRoomId",
                table: "Dungeons");

            migrationBuilder.DropColumn(
                name: "StaringRoomId",
                table: "Dungeons");

            migrationBuilder.AlterColumn<int>(
                name: "StartingRoomId",
                table: "Dungeons",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Dungeons_Rooms_StartingRoomId",
                table: "Dungeons",
                column: "StartingRoomId",
                principalTable: "Rooms",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Dungeons_Rooms_StartingRoomId",
                table: "Dungeons");

            migrationBuilder.AlterColumn<int>(
                name: "StartingRoomId",
                table: "Dungeons",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "StaringRoomId",
                table: "Dungeons",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddForeignKey(
                name: "FK_Dungeons_Rooms_StartingRoomId",
                table: "Dungeons",
                column: "StartingRoomId",
                principalTable: "Rooms",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
