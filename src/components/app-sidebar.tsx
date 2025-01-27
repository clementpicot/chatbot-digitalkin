"use client";

import {
  BookOpen,
  Bug,
  FilePlus,
  FolderOpen,
  FolderPlus,
  HelpCircle,
  Settings,
  SquareTerminal
} from "lucide-react";
import * as React from "react";

import Logo from "@/components/layout/logo";
import LogoIcon from "@/components/layout/logo-icon";
import { NavSectionSidebar } from "@/components/nav-section-sidebar";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { useKin } from "@/providers/kin-provider";
import Link from "next/link";
import DialogChat from "./layout/dialog-chat";
import BugReportDialog from "./layout/bug-report-dialog";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { kins } = useKin();

  const data = {
    user: {
      name: "Juliette Costa",
      email: "j.costa@mycompany.com",
      avatar: "/avatars/avatar.svg",
    },
    navMain: [
      {
        title: "Home",
        url: "/dashboard",
        icon: SquareTerminal,
      },
      {
        title: "Organization files",
        url: "/dashboard/files-system",
        icon: FolderOpen,
        items: [
          {
            title: "New folder",
            url: "",
            icon: FolderPlus
          },
          {
            title: "New document",
            url: "",
            icon: FilePlus,
          },
        ],
      },
    ],
    support: [
      {
        title: "Help",
        url: "#",
        icon: HelpCircle,
      },
      {
        title: "Report a bug",
        url: "#",
        icon: Bug,
        triggerDialog: BugReportDialog
      },
      {
        title: "Documentation",
        url: "#",
        icon: BookOpen,
      },
      {
        title: "Settings",
        url: "/dashboard/settings",
        icon: Settings,
      },
    ],
  };

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="mt-2">
        <Link href="/dashboard">
          <Logo className="max-w-32 w-full group-data-[collapsible=icon]:hidden" />
          <LogoIcon className="hidden group-data-[collapsible=icon]:block size-8" />
        </Link>
      </SidebarHeader>
      <SidebarContent className="tutorial-2">
        <DialogChat />
        <NavSectionSidebar items={data.navMain} />
        <NavSectionSidebar
          items={kins}
          prefixUrl="/dashboard/kins/"
          title="Kins"
          hasAddButton={{
            url: "/dashboard/kins/create",
            tooltip: "Create a new Kin",
          }}
        />
        <NavSectionSidebar items={data.support} title="Support" />
      </SidebarContent>
      <SidebarRail />
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
