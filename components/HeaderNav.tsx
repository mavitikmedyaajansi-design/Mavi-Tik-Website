import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { mainNavigation } from "@/lib/constants";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { Fragment } from "react";

export default function HeaderNav() {
  return (
    <div className="flex-row gap-2 grow md:flex hidden">
      {mainNavigation.map((item) => (
        <NavigationMenu key={item.label}>
          <NavigationMenuList>
            <NavigationMenuItem>
              {item.subNavs ? (
                <>
                  <NavigationMenuTrigger className="font-medium text-primary hover:text-primary px-2 bg-transparent">
                    {item.label}
                  </NavigationMenuTrigger>

                  <NavigationMenuContent className={"min-w-max gap-2"}>
                    <ul>
                      {item.subNavs.map((subItem) =>
                        subItem.subNavs ? (
                          <Fragment key={subItem.label}>
                            <HoverCard openDelay={0} closeDelay={0}>
                              <HoverCardTrigger>
                                <li className="flex flex-row justify-between hover:bg-accent text-sm p-2">
                                  {subItem.label}
                                  <ChevronRight className="size-4" />
                                </li>
                              </HoverCardTrigger>
                              <HoverCardContent
                                className="p-2"
                                side="right"
                                align="start"
                              >
                                {subItem.subNavs.map((subSubItem) =>
                                  subSubItem.href ? (
                                    <Link
                                      href={subSubItem.href}
                                      key={subSubItem.label}
                                      title={
                                        subSubItem.title ?? subSubItem.label
                                      }
                                      passHref
                                    >
                                      <NavigationMenuLink
                                        title={
                                          subSubItem.title ?? subSubItem.label
                                        }
                                      >
                                        {subSubItem.label}
                                      </NavigationMenuLink>
                                    </Link>
                                  ) : null
                                )}
                              </HoverCardContent>
                            </HoverCard>
                          </Fragment>
                        ) : subItem.href ? (
                          <Link
                            href={subItem.href}
                            title={subItem.title ?? item.label}
                            key={subItem.label}
                            passHref
                          >
                            <NavigationMenuLink
                              title={subItem.title ?? item.label}
                            >
                              {subItem.label}
                            </NavigationMenuLink>
                          </Link>
                        ) : null
                      )}
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : item.href ? (
                <Link
                  href={item.href}
                  title={item.title ?? item.label}
                  passHref
                >
                  <NavigationMenuLink
                    className="text-primary font-medium hover:text-primary"
                    title={item.title ?? item.label}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </Link>
              ) : null}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      ))}
    </div>
  );
}
