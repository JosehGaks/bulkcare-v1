"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import {
  Laptop,
  ShieldCheck,
  Bot,
  Briefcase,
  Database,
  Users,
  BarChart,
  Lock,
  Code,
  ShoppingCart,
  Cloud,
  Activity,
  Gamepad2,
  Banknote,
  Car,
  MapPin,
  Globe,
  DollarSign,
  BookOpen,
} from 'lucide-react';
import Image from 'next/image';

const ListItem = ({ className, title, children, icon: Icon,href, ...props }:any) => {
  const linkHref = href || '/';

  return (
    <li>
      <Link href={linkHref}>
      <NavigationMenuLink asChild>
        <a
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2">
            {Icon && <Icon className="h-5 w-5" />}
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
      </Link>
    </li>
  );
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-sm shadow" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Image className="dark:hidden" src="/images/logo/logo.svg" alt="BulkCare" height={124} width={124}/>
            <Image className="dark:block" src="/images/logo/logo-white.svg" alt="BulkCare" height={124} width={124}/>
          </div>
          <div className="hidden sm:flex sm:items-center sm:justify-center flex-grow">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent className="z-50">
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                      <ListItem title="Digital Customer Experience" icon={Laptop} href="/services/digital-customer-experience">
                        Enhance your customer experiences across all channels
                      </ListItem>
                      <ListItem title="Content Control & Verification" icon={ShieldCheck} href="/services/content-control-and-verification">
                        Enable a safe environment and trusted brand
                      </ListItem>
                      <ListItem title="AI Customer Service" icon={Bot} href="/services/ai-customer-service">
                        Faster, better, and more efficient customer support experiences
                      </ListItem>
                      <ListItem title="Back-office Support" icon={Briefcase} href="/services/back-office-support">
                        Extend your team with culturally aligned, global teams
                      </ListItem>
                      <ListItem title="Human in the loop (HITL)" icon={Users} href="/services/human-in-the-loop">
                        Transform critical human connections in your technology loop
                      </ListItem>
                      <ListItem title="Digital Marketing Support" icon={BarChart} href="/services/digital-marketing-support">
                        Drive better marketing results with precision
                      </ListItem>
                      <ListItem title="Software Development" icon={Code} href="/services/software-development">
                        Convert your ideas into impactful digital solutions
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
                  <NavigationMenuContent className="z-50">
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                      <ListItem title="Ecommerce & Retail" icon={ShoppingCart} href="/industries/ecommerce-and-retail">
                        Meet your customers with a personalized journey
                      </ListItem>
                      <ListItem title="SaaS & Software" icon={Cloud}>
                        Exceed customer needs and expand business opportunities
                      </ListItem>
                      <ListItem title="HealthCare & HealthTech" icon={Activity} href="/industries/healthcare-and-healthtech">
                        Drive growth and advance patient experience
                      </ListItem>
                      <ListItem title="Gaming & Entertainment" icon={Gamepad2} href="/industries/gaming-and-entertainment">
                        Take the lead in customer choice and service expectations
                      </ListItem>
                      <ListItem title="FinTech" icon={Banknote} href="/industries/fintech">
                        Provide secure solutions that protect users and meet regulations
                      </ListItem>
                      <ListItem title="Automotive" icon={Car} href="/industries/automotive">
                        Leverage our expertise for tailored automobile solutions
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Locations</NavigationMenuTrigger>
                  <NavigationMenuContent className="z-50">
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                      <ListItem title="BulkCare Kenya" icon={MapPin} href="/locations/kenya">
                        Skillful, scalable talent pool
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <ListItem title="Pricing" icon={DollarSign} href="/pricing"/>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/insights" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      <ListItem title="Insights" icon={BookOpen} href="/insights"/>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex items-center space-x-4">
            <Button asChild className="hidden sm:inline-flex">
              <Link href="/get-started">Get Started</Link>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="sm:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open main menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className='z-50'>
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <NavigationMenu orientation="vertical">
                    <NavigationMenuList className="flex-col items-start">
                      <NavigationMenuItem>
                        <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                        <NavigationMenuContent className="z-50">
                          <ul className="grid gap-3 p-6 md:w-[400px]">
                            <ListItem title="Digital Customer Experience" icon={Laptop} href="/services/digital-customer-experience"/>
                            <ListItem title="Content Control & Verification" icon={ShieldCheck} href="/services/content-control-and-verification"/>
                            <ListItem title="AI Customer Service" icon={Bot} href="/services/ai-customer-service"/>
                            <ListItem title="Back-office Support" icon={Briefcase} href="/services/back-office-support"/>
                            <ListItem title="Human in the loop (HITL)" icon={Users} href="/services/human-in-the-loop"/>
                            <ListItem title="Digital Marketing Support" icon={BarChart} href="/services/digital-marketing-support"/>
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
                        <NavigationMenuContent className="z-50">
                          <ul className="grid gap-3 p-6 md:w-[400px]">
                            <ListItem title="Ecommerce & Retail" icon={ShoppingCart} href="/industries/ecommerce-and-retail"/>
                            <ListItem title="SaaS & Software" icon={Cloud} href="/industries/saas-and-software"/>
                            <ListItem title="HealthCare & HealthTech" icon={Activity} href="/industries/healthcare-and-healthtech"/>
                            <ListItem title="Gaming & Entertainment" icon={Gamepad2} href="/industries/gaming-and-entertainment"/>
                            <ListItem title="FinTech" icon={Banknote} href="/industries/fintech"/>
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger>Locations</NavigationMenuTrigger>
                        <NavigationMenuContent className="z-50">
                          <ul className="grid gap-3 p-6 md:w-[400px]">
                            <ListItem title="BulkCare Kenya" icon={MapPin} href="/locations/kenya"/>
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                        <ListItem title="Pricing" icon={DollarSign} href="/pricing"/>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                        <Link href="/insights" legacyBehavior passHref>
                          <ListItem title="Insights" icon={BookOpen} href="/blog"/>
                        </Link>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                  <Button asChild className="w-full mt-4">
                    <Link href="/get-started">Get Started</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}