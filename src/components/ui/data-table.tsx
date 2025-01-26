"use client";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  FileText,
  Grid2X2,
  Image,
  LucideIcon,
  MoreHorizontal,
  Trash
} from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatTime, getRandomValue } from "@/lib/utils";
import { Avatar, AvatarImage } from "./avatar";

type FileType = {
  type: string;
  icon: LucideIcon;
};

type User = {
  name: string;
  email: string;
};

export type TableData = {
  id: string;
  filename: string;
  uploadedBy: User;
  lastModified: number;
};

const users: User[] = [
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

const fileType: FileType[] = [
  { type: "pdf", icon: FileText },
  { type: "docx", icon: FileText },
  { type: "xlsx", icon: Grid2X2 },
  { type: "jpg", icon: Image },
  { type: "png", icon: Image },
  { type: "txt", icon: FileText },
];

const avatars = [
  "avatar.svg",
  "avatar1.svg",
  "avatar2.svg",
  "avatar3.svg",
  "avatar4.svg",
  "avatar5.svg",
];

function getRandomAvatar() {
  const randomIndex = Math.floor(Math.random() * avatars.length);
  return `/avatars/${avatars[randomIndex]}`;
}

const data: TableData[] = [
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

const getRandomFileType = (): FileType => {
  const randomIndex = Math.floor(Math.random() * fileType.length);
  return fileType[randomIndex];
};

export const columns: ColumnDef<TableData>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "filename",
    header: "File name",
    cell: ({ row }) => {
      const randomFileType = getRandomFileType();
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
    )},
  },
  {
    accessorKey: "uploadedBy",
    header: "Uploaded by",
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
    header: "Last modified",
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
              Copy file name
            </DropdownMenuItem>
            <DropdownMenuItem>View file</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">
              <Trash /> Delete file
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export function DataTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter files..."
          value={
            (table.getColumn("filename")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("filename")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="py-4">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
