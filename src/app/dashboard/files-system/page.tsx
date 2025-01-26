import { Button } from "@/components/ui/button";
import Cell from "@/components/ui/cell";
import { DataTable } from "@/components/ui/data-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  FileText,
  FolderClosed,
  MoreHorizontal,
  Plus,
  Text,
  Trash,
} from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <Cell>
      <div className="grid grid-cols-5 gap-12">
        <div className="col-span-2">
          <h2 className="text-xl font-semibold">Add new</h2>
          <div className="grid lg:grid-cols-2 gap-4 mt-2">
            <div className="relative flex flex-col border border-border hover:bg-foreground/5 rounded-md p-4">
              <Link href="#">
                <div className="absolute top-2 right-4">
                  <Plus width={16} />
                </div>
                <div className="bg-foreground w-max rounded-md p-1.5">
                  <FileText strokeWidth={1.5} className="text-background" />
                </div>
                <p className="mt-4 font-semibold">New document</p>
              </Link>
            </div>
            <div className="relative flex flex-col border border-border hover:bg-foreground/5 rounded-md p-4">
              <Link href="#">
                <div className="absolute top-2 right-4">
                  <Plus width={16} />
                </div>
                <div className="bg-foreground w-max rounded-md p-1.5">
                  <FolderClosed strokeWidth={1.5} className="text-background" />
                </div>
                <p className="mt-4 font-semibold">New folder</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-3">
          <h2 className="text-xl font-semibold">Recently modified</h2>
          <div className="mt-2 grid lg:grid-cols-2 gap-x-4 gap-y-2">
            <div className="flex items-center justify-between border py-2 px-4 rounded-lg">
              <div className="flex items-center gap-3">
                <div>
                  <div className="bg-muted-foreground/20 rounded-md p-1 size-8">
                    <Text strokeWidth={1.5} width={16} className="mx-auto" />
                  </div>
                </div>
                <div>
                  <p className="font-bold text-sm">File name</p>
                  <div className="text-xs text-muted-foreground space-x-4 mt-1">
                    <span>138 KB</span>
                    <span>pdf</span>
                  </div>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem>Copy file name</DropdownMenuItem>
                  <DropdownMenuItem>View file</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">
                    <Trash /> Delete file
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex items-center justify-between border py-2 px-4 rounded-lg">
              <div className="flex items-center gap-3">
                <div>
                  <div className="bg-muted-foreground/20 rounded-md p-1 size-8">
                    <Text strokeWidth={1.5} width={16} className="mx-auto" />
                  </div>
                </div>
                <div>
                  <p className="font-bold text-sm">File name</p>
                  <div className="text-xs text-muted-foreground space-x-4 mt-1">
                    <span>138 KB</span>
                    <span>pdf</span>
                  </div>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem>Copy file name</DropdownMenuItem>
                  <DropdownMenuItem>View file</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">
                    <Trash /> Delete file
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex items-center justify-between border py-2 px-4 rounded-lg">
              <div className="flex items-center gap-3">
                <div>
                  <div className="bg-muted-foreground/20 rounded-md p-1 size-8">
                    <Text strokeWidth={1.5} width={16} className="mx-auto" />
                  </div>
                </div>
                <div>
                  <p className="font-bold text-sm">File name</p>
                  <div className="text-xs text-muted-foreground space-x-4 mt-1">
                    <span>138 KB</span>
                    <span>pdf</span>
                  </div>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem>Copy file name</DropdownMenuItem>
                  <DropdownMenuItem>View file</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">
                    <Trash /> Delete file
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex items-center justify-between border py-2 px-4 rounded-lg">
              <div className="flex items-center gap-3">
                <div>
                  <div className="bg-muted-foreground/20 rounded-md p-1 size-8">
                    <Text strokeWidth={1.5} width={16} className="mx-auto" />
                  </div>
                </div>
                <div>
                  <p className="font-bold text-sm">File name</p>
                  <div className="text-xs text-muted-foreground space-x-4 mt-1">
                    <span>138 KB</span>
                    <span>pdf</span>
                  </div>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem>Copy file name</DropdownMenuItem>
                  <DropdownMenuItem>View file</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">
                    <Trash /> Delete file
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-xl font-semibold">All files</h2>
        <DataTable />
      </div>
    </Cell>
  );
}
