"use client";

import {
  BookOpen,
  Bug,
  HelpCircle,
  Settings,
  SquareTerminal,
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
        title: "Dashboard",
        url: "/dashboard",
        icon: SquareTerminal,
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
      },
      {
        title: "Documentation",
        url: "#",
        icon: BookOpen,
      },
      {
        title: "Settings",
        url: "#",
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
            tooltip: "Add a new Kin",
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
