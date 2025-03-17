"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";
import * as React from "react";

import { cn } from "@/lib/utils";

const Tabs = TabsPrimitive.Root;

const TabsList = (
  {
    ref,
    className,
    ...props
  }: React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> & {
    ref?: React.RefObject<React.ElementRef<typeof TabsPrimitive.List>>;
  }
) => (<TabsPrimitive.List
  ref={ref}
  className={cn("inline-flex h-10 items-center justify-center rounded-md p-1 ", className)}
  {...props}
/>);
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = (
  {
    ref,
    className,
    ...props
  }: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
    ref?: React.RefObject<React.ElementRef<typeof TabsPrimitive.Trigger>>;
  }
) => (<TabsPrimitive.Trigger
  ref={ref}
  className={cn(
    "inline-flex items-center justify-center whitespace-nowrap rounded-xs px-3 py-2 text-xs font-medium transition-all data-[state=active]:bg-white/10 data-[state=active]:text-white/60 data-[state=active]:shadow-xs data-[state=active]:rounded-lg",
    className,
  )}
  {...props}
/>);
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = (
  {
    ref,
    className,
    ...props
  }: React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> & {
    ref?: React.RefObject<React.ElementRef<typeof TabsPrimitive.Content>>;
  }
) => (<TabsPrimitive.Content ref={ref} className={cn("mt-2 ", className)} {...props} />);
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
