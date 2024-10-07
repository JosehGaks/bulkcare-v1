"use client";
import {
  Activity,
  Book,
  Bot,
  Briefcase,
  Cloud,
  Gamepad2,
  Laptop,
  Menu,
  ShieldCheck,
  ShoppingCart,
  Sunset,
  Trees,
  Zap,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// Submenu for Services page
// Submenu for Services page
const subMenuItemsServices = [
  {
    title: "Digital Customer Experience",
    description: "Enhance your customer experiences across all channels",
    icon: <Laptop className="size-5 shrink-0" />, // Icon for visual representation
    slug: "digital-customer-experience", // URL-friendly slug
  },
  {
    title: "Content Control & Verification",
    description: "Enable a safe environment and trusted brand",
    icon: <ShieldCheck className="size-5 shrink-0" />,
    slug: "content-control-verification",
  },
  {
    title: "AI Customer Service",
    description:
      "Faster, better, and more efficient customer support experiences",
    icon: <Bot className="size-5 shrink-0" />,
    slug: "ai-customer-service",
  },
  {
    title: "Back-office Support",
    description: "Extend your team with global, culturally aligned teams",
    icon: <Briefcase className="size-5 shrink-0" />,
    slug: "back-office-support",
  },
];

// Submenu for Industries page
const subMenuItemsIndustries = [
  {
    title: "Ecommerce & Retail",
    description: "Personalized customer journeys and better service",
    icon: <ShoppingCart className="size-5 shrink-0" />,
    slug: "ecommerce-retail",
  },
  {
    title: "SaaS & Software",
    description: "Exceed customer needs and unlock business potential",
    icon: <Cloud className="size-5 shrink-0" />,
    slug: "saas-software",
  },
  {
    title: "HealthTech",
    description: "Innovate healthcare services and enhance patient experience",
    icon: <Activity className="size-5 shrink-0" />,
    slug: "healthtech",
  },
  {
    title: "Gaming & Entertainment",
    description: "Lead customer choice and drive service expectations",
    icon: <Gamepad2 className="size-5 shrink-0" />,
    slug: "gaming-entertainment",
  },
];

// Submenu for Resources page
const subMenuItemsResources = [
  {
    title: "Help Center",
    description: "Find all the answers you need here",
    icon: <Zap className="size-5 shrink-0" />,
    slug: "help-center", // URL-friendly slug
  },
  {
    title: "Contact Us",
    description: "Reach out to us for assistance",
    icon: <Sunset className="size-5 shrink-0" />,
    slug: "contact-us",
  },
  {
    title: "Status",
    description: "Check the current status of our services",
    icon: <Trees className="size-5 shrink-0" />,
    slug: "status",
  },
  {
    title: "Terms of Service",
    description: "Read our terms and conditions",
    icon: <Book className="size-5 shrink-0" />,
    slug: "terms-of-service",
  },
];

const Navbar = () => {
  const pathUrl = usePathname();

  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });


  return (
    <>
      <header
        className={`ud-header left-0 top-0 z-40 flex w-full items-center py-3 ${
          sticky
            ? "shadow-nav border-stroke dark:border-dark-3/20 dark:bg-dark/10 fixed z-[999] border-b backdrop-blur-[5px]"
            : "absolute bg-transparent"
        }`}
      >
        <div className="container mx-auto">
          <nav
            className={`lg:h-18 hidden justify-between lg:relative lg:flex lg:justify-between h-14`}
          >
            <div className="flex items-center justify-between gap-6 ">
              <div className="flex w-36 justify-start left-0">
                <Link
                  href="/"
                  className={`navbar-logo block w-full ${
                    sticky ? "py-2" : "py-5"
                  } `}
                >
                  {pathUrl !== "/" ? (
                    <>
                      <Image
                        src={`${
                          sticky
                            ? "/images/logo/logo.svg"
                            : "/images/logo/logo.svg"
                        }`}
                        alt="logo"
                        width={70}
                        height={70}
                        className="header-logo w-full dark:hidden"
                      />
                      <Image
                        src={`/images/logo/logo-white.svg`}
                        alt="logo"
                        width={70}
                        height={70}
                        className="header-logo hidden w-full dark:block"
                      />
                    </>
                  ) : (
                    <>
                      <Image
                        src={`${
                          sticky
                            ? "/images/logo/logo.svg"
                            : "/images/logo/logo-white.svg"
                        }`}
                        alt="logo"
                        width={70}
                        height={70}
                        className="header-logo w-full dark:hidden"
                      />
                      <Image
                        src={"/images/logo/logo-white.svg"}
                        alt="logo"
                        width={70}
                        height={70}
                        className="header-logo hidden w-full dark:block"
                      />
                    </>
                  )}
                </Link>
              </div>
              <div className="flex items-center">
                <Link
                  className={cn(
                    navigationMenuTriggerStyle,
                    buttonVariants({
                      variant: "ghost",
                    }),
                  )}
                  href="/"
                >
                  Home
                </Link>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenu>
                      <NavigationMenuList>
                        <NavigationMenuItem>
                          <NavigationMenuTrigger>
                            Services
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="w-80 p-3">
                              {subMenuItemsServices.map((item, idx) => (
                                <li key={idx}>
                                  <Link
                                    className="flex gap-4 rounded-md p-3 hover:bg-accent"
                                    href={`/services/${item.slug}`}
                                  >
                                    {item.icon}
                                    <div>
                                      <div className="text-sm font-semibold">
                                        {item.title}
                                      </div>
                                      <p className="text-sm text-muted-foreground">
                                        {item.description}
                                      </p>
                                    </div>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                          <NavigationMenuTrigger>
                            Industries
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="w-80 p-3">
                              {subMenuItemsIndustries.map((item, idx) => (
                                <li key={idx}>
                                  <Link
                                    className="flex gap-4 rounded-md p-3 hover:bg-accent"
                                    href={`/industries/${item.slug}`}
                                  >
                                    {item.icon}
                                    <div>
                                      <div className="text-sm font-semibold">
                                        {item.title}
                                      </div>
                                      <p className="text-sm text-muted-foreground">
                                        {item.description}
                                      </p>
                                    </div>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                          <NavigationMenuTrigger>
                            Resources
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
                            <ul className="w-80 p-3">
                              {subMenuItemsResources.map((item, idx) => (
                                <li key={idx}>
                                  <Link
                                    className="flex gap-4 rounded-md p-3 hover:bg-accent"
                                    href={`/resources/${item.slug}`}
                                  >
                                    {item.icon}
                                    <div>
                                      <div className="text-sm font-semibold">
                                        {item.title}
                                      </div>
                                      <p className="text-sm text-muted-foreground">
                                        {item.description}
                                      </p>
                                    </div>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
                  </NavigationMenuList>
                </NavigationMenu>

                <Link
                  className={cn(
                    navigationMenuTriggerStyle,
                    buttonVariants({
                      variant: "ghost",
                    }),
                  )}
                  href="#"
                >
                  Pricing
                </Link>
                <Link
                  className={cn(
                    navigationMenuTriggerStyle,
                    buttonVariants({
                      variant: "ghost",
                    }),
                  )}
                  href="#"
                >
                  Blog
                </Link>
              </div>
            </div>
            <div className="flex gap-2">
              {/* <Button variant={"outline"}>Log in</Button> */}
              <Button>Get Started</Button>
            </div>
          </nav>
          <div className="block lg:hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
              <>
                      <Image
                        src={`${
                          sticky
                            ? "/images/logo/logo.svg"
                            : "/images/logo/logo.svg"
                        }`}
                        alt="logo"
                        width={100}
                        height={100}
                        className="header-logo w-full dark:hidden"
                      />
                      <Image
                        src={`/images/logo/logo-white.svg`}
                        alt="logo"
                        width={100}
                        height={100}
                        className="header-logo hidden w-full dark:block"
                      />
                    </>
                <span className="text-xl font-bold">Bulkcare</span>
              </div>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant={"outline"} size={"icon"}>
                    <Menu className="size-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>
                      <div className="flex items-center gap-2">
                        <img
                          src="https://www.shadcnblocks.com/images/block/block-1.svg"
                          className="w-8"
                          alt="logo"
                        />
                        <span className="text-xl font-bold">Shadcn Blocks</span>
                      </div>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="my-8 flex flex-col gap-4">
                    <Link href="#" className="font-semibold">
                      Home
                    </Link>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="services" className="border-b-0">
                        <AccordionTrigger className="mb-4 py-0 font-semibold hover:no-underline">
                          Services
                        </AccordionTrigger>
                        <AccordionContent className="mt-2">
                          {subMenuItemsServices.map((item, idx) => (
                            <Link
                              key={idx}
                              className={cn(
                                "flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                              )}
                              href={`/services/${item.slug}`}
                            >
                              {item.icon}
                              <div>
                                <div className="text-sm font-semibold">
                                  {item.title}
                                </div>
                                <p className="text-sm leading-snug text-muted-foreground">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="industries" className="border-b-0">
                        <AccordionTrigger className="py-0 font-semibold hover:no-underline">
                          Industries
                        </AccordionTrigger>
                        <AccordionContent className="mt-2">
                          {subMenuItemsIndustries.map((item, idx) => (
                            <Link
                              key={idx}
                              className={cn(
                                "flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                              )}
                              href={`/industries/${item.slug}`}
                            >
                              {item.icon}
                              <div>
                                <div className="text-sm font-semibold">
                                  {item.title}
                                </div>
                                <p className="text-sm leading-snug text-muted-foreground">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    <Link href="/pricing" className="font-semibold">
                      Pricing
                    </Link>
                    <Link href="/blog" className="font-semibold">
                      Blog
                    </Link>
                  </div>
                  <div className="border-t pt-4">
                    <div className="grid grid-cols-2 justify-start">
                      <Link
                        className={cn(
                          buttonVariants({
                            variant: "ghost",
                          }),
                          "justify-start text-muted-foreground",
                        )}
                        href="/press"
                      >
                        Press
                      </Link>
                      <Link
                        className={cn(
                          buttonVariants({
                            variant: "ghost",
                          }),
                          "justify-start text-muted-foreground",
                        )}
                        href="contact"
                      >
                        Contact
                      </Link>
                      <Link
                        className={cn(
                          buttonVariants({
                            variant: "ghost",
                          }),
                          "justify-start text-muted-foreground",
                        )}
                        href="/imprint"
                      >
                        Imprint
                      </Link>
                      <Link
                        className={cn(
                          buttonVariants({
                            variant: "ghost",
                          }),
                          "justify-start text-muted-foreground",
                        )}
                        href="/sitemap"
                      >
                        Sitemap
                      </Link>
                      <Link
                        className={cn(
                          buttonVariants({
                            variant: "ghost",
                          }),
                          "justify-start text-muted-foreground",
                        )}
                        href="/legal"
                      >
                        Legal
                      </Link>
                      <Link
                        className={cn(
                          buttonVariants({
                            variant: "ghost",
                          }),
                          "justify-start text-muted-foreground",
                        )}
                        href="/cookie-settings"
                      >
                        Cookie Settings
                      </Link>
                    </div>
                    <div className="mt-2 flex flex-col gap-3">
                      <Button>Get Started</Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
