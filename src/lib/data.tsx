"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FileTableData, FileType, HistoryTableData, Step, User } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import {
  ChevronRight,
  FileText,
  Grid2X2,
  Image,
  MoreHorizontal,
  Trash,
} from "lucide-react";
import Link from "next/link";
import {
  formatTime,
  getRandomAvatar,
  getRandomFileType,
  getRandomValue,
} from "./utils";

export const users: User[] = [
  {
    name: "Juliette Costa",
    email: "j.costa@mycompany.com",
  },
  {
    name: "Claudia Fowler",
    email: "c.fowler@mycompany.com",
  },
  {
    name: "Dan Walters",
    email: "d.walters@mycompany.com",
  },
  {
    name: "Tom Pierce",
    email: "t.pierce@mycompany.com",
  },
  {
    name: "Avery Chavez",
    email: "a.chavez@mycompany.com",
  },
  {
    name: "Clarence Banks",
    email: "c.banks@mycompany.com",
  },
];

export const fileType: FileType[] = [
  { type: "pdf", icon: FileText },
  { type: "docx", icon: FileText },
  { type: "xlsx", icon: Grid2X2 },
  { type: "jpg", icon: Image },
  { type: "png", icon: Image },
  { type: "txt", icon: FileText },
];

export const getSteps = (locale: string): Step[] => [
  {
    element: ".tutorial-2",
    popover: {
      title: locale === "en" ? "Application sidebar" : "Barre latérale",
      content:
        locale === "en"
          ? "The sidebar allows you to navigate through the entire application services! Chat, files, your profile... Everything you need to get started!"
          : "La barre latérale vous permet de naviguer dans l'ensemble des services de l'application ! Chat, fichiers, votre profil... Tout ce dont vous avez besoin pour commencer !",
    },
  },
  {
    element: ".tutorial-1",
    popover: {
      title: locale === "en" ? "Your profile" : "Votre profil",
      content:
        locale === "en"
          ? "This little section is useful if you want to manage your account settings, refill your Kin's thoughts, or switch the current application theme!"
          : "Cette petite section est utile si vous voulez gérer les paramètres de votre compte, remplir les pensées de votre Kin, ou changer le thème de l'application en cours !",
    },
  },
  {
    element: ".tutorial-3",
    popover: {
      title: "Dashboard",
      content:
        locale === "en"
          ? "This is where all the information you need is centralized, you can : start a new chat with one of your Kins, browse the chat history, create todos, manage your alerts..."
          : "C'est ici que toutes les informations dont vous avez besoin sont centralisées, vous pouvez : démarrer un nouveau chat avec l'un de vos Kins, parcourir l'historique des chats, créer des todos, gérer vos alertes...",
    },
  },
  {
    element: ".tutorial-4",
    popover: {
      title: locale === "en" ? "New chat" : "Nouveau chat",
      content:
        locale === "en"
          ? "Try to click this button, start a new chat with one of your available Kins and ask him anything! Let him do the rest 🤖"
          : "Essayez de cliquer sur ce bouton, démarrez un nouveau chat avec l'un de vos Kins disponibles et demandez-lui n'importe quoi ! Laissez-le faire le reste 🤖",
    },
  },
];

//
// ******************
//
// Data tables
//
// ******************
//

// ******* File system ******* //

export const fileSystemData: FileTableData[] = [
  {
    id: crypto.randomUUID(),
    filename: "Reporting 2024",
    uploadedBy: users[0],
    lastModified: Date.now(),
  },
  {
    id: crypto.randomUUID(),
    filename: "Study case MyCompany",
    uploadedBy: users[1],
    lastModified: Date.now(),
  },
  {
    id: crypto.randomUUID(),
    filename: "Invoice DigitalKin 01 2025",
    uploadedBy: users[2],
    lastModified: Date.now(),
  },
  {
    id: crypto.randomUUID(),
    filename: "Q1 2023 Reporting",
    uploadedBy: users[3],
    lastModified: Date.now(),
  },
  {
    id: crypto.randomUUID(),
    filename: "Q2 2023 Reporting",
    uploadedBy: users[4],
    lastModified: Date.now(),
  },
];

export const getFileSystemColumns = (locale: string): ColumnDef<FileTableData>[] => [
  {
    accessorKey: "filename",
    header: locale === 'en' ? "File name" : "Nom du fichier",
    cell: ({ row }) => {
      const randomFileType = getRandomFileType(fileType);
      const IconRandomized = randomFileType.icon;
      return (
        <div className="flex items-center gap-3">
          <div>
            <div className="bg-muted-foreground/20 rounded-md p-2">
              <IconRandomized strokeWidth={1.5} />
            </div>
          </div>
          <div>
            <p className="font-bold">{row.getValue("filename")}</p>
            <div className="text-xs text-muted-foreground space-x-4 mt-1">
              <span>{getRandomValue(100, 999)} KB</span>
              <span>{randomFileType.type}</span>
            </div>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "uploadedBy",
    header: locale === 'en' ? "Uploaded by" : "Téléchargé par",
    cell: ({ row }) => {
      const user = row.getValue("uploadedBy") as User;
      const randomAvatar = getRandomAvatar();

      return (
        <div className="font-medium flex items-center gap-3">
          <div>
            <Avatar className="size-8">
              <AvatarImage src={randomAvatar} />
            </Avatar>
          </div>
          <div>
            <p className="font-bold">{user.name}</p>
            <p className="text-muted-foreground">{user.email}</p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "lastModified",
    header: locale === 'en' ? "Last modified" : "Modifié",
    cell: ({ row }) => {
      return (
        <div className="font-medium">
          {formatTime(row.getValue("lastModified"), true)}
        </div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const data = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(data.filename)}
            >
              {locale === 'en' ? "Copy file name" : "Copier nom du fichier"}
            </DropdownMenuItem>
            <DropdownMenuItem>{locale === 'en' ? "View file" : "Voir le fichier"}</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">
              <Trash /> {locale === 'en' ? "Delete file" : "Supprimer le fichier"}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

// ******* Chat history ******* //
export const chatHistoryData: HistoryTableData[] = [
  {
    id: crypto.randomUUID(),
    title: "Reporting 2024",
    lastUser: users[0],
    date: Date.now(),
    kin: "R&D",
  },
  {
    id: crypto.randomUUID(),
    title: "Study case MyCompany",
    lastUser: users[1],
    date: Date.now(),
    kin: "R&D",
  },
  {
    id: crypto.randomUUID(),
    title: "Invoice DigitalKin 01 2025",
    lastUser: users[2],
    date: Date.now(),
    kin: "DAF",
  },
  {
    id: crypto.randomUUID(),
    title: "Q1 2023 Reporting",
    lastUser: users[3],
    date: Date.now(),
    kin: "DAF",
  },
  {
    id: crypto.randomUUID(),
    title: "Q2 2023 Reporting",
    lastUser: users[4],
    date: Date.now(),
    kin: "R&D",
  },
];

export const getChatHistoryColumns = (locale: string): ColumnDef<HistoryTableData>[] => [
  {
    accessorKey: "title",
    header: "Chat",
    cell: ({ row }) => {
      return <div>{row.getValue("title")}</div>;
    },
  },
  {
    accessorKey: "kin",
    header: "Kin",
    cell: ({ row }) => {
      return <Badge>{row.getValue("kin")}</Badge>;
    },
  },
  {
    accessorKey: "lastUser",
    header: locale === 'en' ? "Last user" : "Dernier utilisateur",
    cell: ({ row }) => {
      const user = row.getValue("lastUser") as User;
      const randomAvatar = getRandomAvatar();

      return (
        <div className="font-medium flex items-center gap-3">
          <div>
            <Avatar className="size-8">
              <AvatarImage src={randomAvatar} />
            </Avatar>
          </div>
          <p className="font-bold">{user.name}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      return (
        <div className="font-medium">
          {formatTime(row.getValue("date"), true)}
        </div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: () => {
      return (
        <div>
          <Button variant="ghost" size="icon" asChild>
            <Link href="">
              <ChevronRight />
            </Link>
          </Button>
        </div>
      );
    },
  },
];
