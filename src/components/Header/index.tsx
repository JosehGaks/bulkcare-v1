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

const ListItem = ({ className, title, children, icon: Icon, ...props }:any) => {
  return (
    <li>
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img className="h-8 w-auto" src="/placeholder.svg?height=32&width=32" alt="BulkCare" />
          </div>
          <div className="hidden sm:flex sm:items-center sm:justify-center flex-grow">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent className="z-50">
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                      <ListItem title="Digital Customer Experience" icon={Laptop}>
                        Enhance your customer experiences across all channels
                      </ListItem>
                      <ListItem title="Content Control & Verification" icon={ShieldCheck}>
                        Enable a safe environment and trusted brand
                      </ListItem>
                      <ListItem title="AI Customer Service" icon={Bot}>
                        Faster, better, and more efficient customer support experiences
                      </ListItem>
                      <ListItem title="Back-office Support" icon={Briefcase}>
                        Extend your team with culturally aligned, global teams
                      </ListItem>
                      <ListItem title="Human in the loop (HITL)" icon={Users}>
                        Transform critical human connections in your technology loop
                      </ListItem>
                      <ListItem title="Digital Marketing Support" icon={BarChart}>
                        Drive better marketing results with precision
                      </ListItem>
                      <ListItem title="Software Development" icon={Code}>
                        Convert your ideas into impactful digital solutions
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
                  <NavigationMenuContent className="z-50">
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                      <ListItem title="Ecommerce & Retail" icon={ShoppingCart}>
                        Meet your customers with a personalized journey
                      </ListItem>
                      <ListItem title="SaaS & Software" icon={Cloud}>
                        Exceed customer needs and expand business opportunities
                      </ListItem>
                      <ListItem title="HealthCare & HealthTech" icon={Activity}>
                        Drive growth and advance patient experience
                      </ListItem>
                      <ListItem title="Gaming & Entertainment" icon={Gamepad2}>
                        Take the lead in customer choice and service expectations
                      </ListItem>
                      <ListItem title="FinTech" icon={Banknote}>
                        Provide secure solutions that protect users and meet regulations
                      </ListItem>
                      <ListItem title="Automotive" icon={Car}>
                        Leverage our expertise for tailored automobile solutions
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Locations</NavigationMenuTrigger>
                  <NavigationMenuContent className="z-50">
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                      <ListItem title="BulkCare USA" icon={MapPin}>
                        Scalable US-based native English speakers
                      </ListItem>
                      <ListItem title="BulkCare Mexico" icon={MapPin}>
                        Highly-educated, scalable talent pool
                      </ListItem>
                      <ListItem title="BulkCare Germany" icon={MapPin}>
                        Non-scalable native-speaker teams
                      </ListItem>
                      <ListItem title="BulkCare Philippines" icon={MapPin}>
                        Multilingual, scalable teams
                      </ListItem>
                      <ListItem title="BulkCare Uganda" icon={MapPin}>
                        Skillful, scalable talent pool
                      </ListItem>
                      <ListItem title="BulkCare at Home" icon={Globe}>
                        Our WFH option benefits for clients and team members
                      </ListItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <ListItem title="Pricing" icon={DollarSign} />
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/insights" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      <ListItem title="Insights" icon={BookOpen} />
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
                            <ListItem title="Digital Customer Experience" icon={Laptop} />
                            <ListItem title="Content Control & Verification" icon={ShieldCheck} />
                            <ListItem title="AI Customer Service" icon={Bot} />
                            <ListItem title="Back-office Support" icon={Briefcase} />
                            <ListItem title="Data Labeling" icon={Database} />
                            <ListItem title="Human in the loop (HITL)" icon={Users} />
                            <ListItem title="Digital Marketing Support" icon={BarChart} />
                            <ListItem title="Cybersecurity" icon={Lock} />
                            <ListItem title="Software Development" icon={Code} />
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
                        <NavigationMenuContent className="z-50">
                          <ul className="grid gap-3 p-6 md:w-[400px]">
                            <ListItem title="Ecommerce & Retail" icon={ShoppingCart} />
                            <ListItem title="SaaS & Software" icon={Cloud} />
                            <ListItem title="HealthCare & HealthTech" icon={Activity} />
                            <ListItem title="Gaming & Entertainment" icon={Gamepad2} />
                            <ListItem title="FinTech" icon={Banknote} />
                            <ListItem title="Automotive" icon={Car} />
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger>Locations</NavigationMenuTrigger>
                        <NavigationMenuContent className="z-50">
                          <ul className="grid gap-3 p-6 md:w-[400px]">
                            <ListItem title="BulkCare USA" icon={MapPin} />
                            <ListItem title="BulkCare Mexico" icon={MapPin} />
                            <ListItem title="BulkCare Germany" icon={MapPin} />
                            <ListItem title="BulkCare Philippines" icon={MapPin} />
                            <ListItem title="BulkCare Uganda" icon={MapPin} />
                            <ListItem title="BulkCare at Home" icon={Globe} />
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                        <ListItem title="Pricing" icon={DollarSign} />
                      </NavigationMenuItem>
                      <NavigationMenuItem>
                        <Link href="/insights" legacyBehavior passHref>
                          <ListItem title="Insights" icon={BookOpen} />
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