"use client";

import {
  BookOpen,
  Bot,
  Bug,
  HelpCircle,
  Settings,
  Settings2,
  SquareTerminal
} from "lucide-react";
import * as React from "react";

import Logo from "@/components/layout/logo";
import LogoIcon from "@/components/layout/logo-icon";
import { NavMain } from "@/components/nav-main";
import { NavSupport } from "@/components/nav-support";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import Link from "next/link";
import DialogChat from "./layout/dialog-chat";

// This is sample data.
const data = {
  user: {
    name: "Juliette Costa",
    email: "j.costa@mycompany.com",
    avatar: "/avatars/avatar.svg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "#",
      icon: SquareTerminal,
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      isParent: true,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  support: [
    {
      name: "Help",
      url: "#",
      icon: HelpCircle,
    },
    {
      name: "Report a bug",
      url: "#",
      icon: Bug,
    },
    {
      name: "Documentation",
      url: "#",
      icon: BookOpen
    },
    {
      name: "Settings",
      url: "#",
      icon: Settings,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="mt-2">
        <Link href="/dashboard">
          <Logo className="max-w-32 w-full group-data-[collapsible=icon]:hidden" />
          <LogoIcon className="hidden group-data-[collapsible=icon]:block" />
        </Link>
      </SidebarHeader>
      <SidebarContent className="tutorial-2">
        <DialogChat />
        <NavMain items={data.navMain} />
        <NavSupport support={data.support} />
      </SidebarContent>
      <SidebarRail />
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
