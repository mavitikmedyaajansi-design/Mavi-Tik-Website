"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { mainNavigation } from "@/lib/constants";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import MobileSocialMedias from "./MobileSocialMedias";
import { Button } from "./ui/button";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => setOpen(false), [pathname]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="inline-flex md:hidden">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full border-0">
        <div className="w-full h-full bg-primary/50 p-4 flex flex-col ">
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <Image src="/logo.png" alt="Logo" width={100} height={100} />
          </SheetHeader>
          <nav className="grow">
            <ul>
              <Accordion
                type="single"
                collapsible
                className="w-full flex flex-col gap-2"
              >
                {mainNavigation.map((item) => (
                  <li key={item.label}>
                    {item.subNavs ? (
                      <AccordionItem value={item.label}>
                        <AccordionTrigger className="text-base p-0">
                          {item.label}
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-2 p-2">
                          {item.subNavs.map((subItem) =>
                            subItem.subNavs ? (
                              <Accordion
                                type="single"
                                collapsible
                                className="w-full flex flex-col gap-2"
                                key={subItem.label}
                              >
                                <AccordionItem value={subItem.label}>
                                  <AccordionTrigger className="text-sm p-0">
                                    {subItem.label}
                                  </AccordionTrigger>
                                  <AccordionContent className="flex flex-col gap-2 p-2">
                                    {subItem.subNavs.map((subSubItem) =>
                                      subSubItem.href ? (
                                        <Link
                                          href={subSubItem.href}
                                          key={subSubItem.label}
                                          title={
                                            subSubItem.title ?? subSubItem.label
                                          }
                                        >
                                          {subSubItem.label}
                                        </Link>
                                      ) : null
                                    )}
                                  </AccordionContent>
                                </AccordionItem>
                              </Accordion>
                            ) : subItem.href ? (
                              <Link
                                href={subItem.href}
                                key={subItem.label}
                                title={subItem.title ?? subItem.label}
                              >
                                {subItem.label}
                              </Link>
                            ) : null
                          )}
                        </AccordionContent>
                      </AccordionItem>
                    ) : item.href ? (
                      <Link
                        href={item.href}
                        title={item.title ?? item.label}
                        key={item.label}
                      >
                        {item.label}
                      </Link>
                    ) : null}
                  </li>
                ))}
              </Accordion>
            </ul>
          </nav>
          <SheetFooter className="items-end">
            <MobileSocialMedias />
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
