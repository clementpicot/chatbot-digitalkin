"use client";

import { ChevronRight, Plus, type LucideIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { Fragment } from "react";
import TooltipButton from "./ui/tooltip-button";
import { redirect } from "next/navigation";

export function NavSectionSidebar({
  items,
  title,
  prefixUrl,
  hasAddButton,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
      icon?: LucideIcon
    }[];
  }[];
  title?: string;
  prefixUrl?: string;
  hasAddButton?: {
    url: string;
    tooltip: string;
  };
}) {
  return (
    <SidebarGroup>
      {title && (
        <SidebarGroupLabel className="pr-0 text-sm flex items-center justify-between">
          {title}{" "}
          {hasAddButton && (
            <TooltipButton
              variant="ghost"
              size="icon"
              buttonContent={<Plus />}
              tooltip={hasAddButton.tooltip}
              onClick={() => {
                redirect(hasAddButton.url);
              }}
            />
          )}
        </SidebarGroupLabel>
      )}
      <SidebarMenu>
        {items.map((item) => {
          const href = prefixUrl ? prefixUrl + item.url : item.url;

          return (
            <Fragment key={item.title}>
              {item.items?.length && item.items?.length > 0 && (
                <Collapsible
                  asChild
                  defaultOpen={item.isActive}
                  className="group/collapsible"
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton tooltip={item.title}>
                        {item.icon && <item.icon />}
                        <span>
                          <Link href={href}>{item.title}</Link>
                        </span>
                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items?.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton asChild>
                              <Link href={subItem.url}>
                                {subItem.icon && <subItem.icon />}
                                <span>{subItem.title}</span>
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              )}
              {!item.items && (
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link href={href}>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              )}
            </Fragment>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
