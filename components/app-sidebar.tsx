import { BookOpen, FileText, Home, Newspaper } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { Separator } from "./ui/separator";

// Menu items.
const items = [
  {
    title: "Bloglar",
    url: "bloglar",
    icon: BookOpen,
  },
  {
    title: "Sayfalar",
    url: "sayfalar",
    icon: Newspaper,
  },
  {
    title: "Yasal Sayfalar",
    url: "yasal-sayfalar",
    icon: FileText,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r-primary">
      <SidebarContent className="bg-gradient-to-b from-primary/80 to-primary/50 text-primary-foreground border-primary ">
        <div className="text-sm p-2 px-4">
          <h1 className="text-base font-medium">Mavi Tik Media</h1>
        </div>
        <SidebarGroup className="pt-0">
          <Link
            href={"/"}
            className="flex items-center flex-row gap-2 p-2 text-sm hover:bg-primary cursor-pointer hover:text-primary-foreground rounded-md"
          >
            <Home size={16} />
            <h1>Siteye Dön</h1>
          </Link>
          <Separator className="bg-primary my-2" />

          <SidebarGroupLabel className="text-primary-foreground">
            İçerikler
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="text-primary-foreground hover:bg-primary"
                  >
                    <Link href={"/panel/" + item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
