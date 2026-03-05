"use server";

import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { getSession } from "@/lib/action";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  if (!session) {
    redirect("/login");
  }
  return (
    <SidebarProvider className="cursor-default">
      <AppSidebar />
      <main className="flex-1 bg-gradient-to-br from-background to-primary/20 flex flex-col">
        <div className="sticky top-0 z-10 flex flex-row items-center gap-2 h-12 border-b bg-primary/60 shadow-2xl text-primary-foreground px-4">
          <SidebarTrigger className="size-10" />
        </div>
        <div className="flex-1 p-4 md:p-8">{children}</div>
      </main>
    </SidebarProvider>
  );
}
