using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace PathfinderTools.Migrations
{
    public partial class MadeFirstRoomOptional : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Dungeons_Rooms_StartingRoomId",
                table: "Dungeons");

            migrationBuilder.AlterColumn<int>(
                name: "StartingRoomId",
                table: "Dungeons",
                type: "int",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AddForeignKey(
                name: "FK_Dungeons_Rooms_StartingRoomId",
                table: "Dungeons",
                column: "StartingRoomId",
                principalTable: "Rooms",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Dungeons_Rooms_StartingRoomId",
                table: "Dungeons");

            migrationBuilder.AlterColumn<int>(
                name: "StartingRoomId",
                table: "Dungeons",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Dungeons_Rooms_StartingRoomId",
                table: "Dungeons",
                column: "StartingRoomId",
                principalTable: "Rooms",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
