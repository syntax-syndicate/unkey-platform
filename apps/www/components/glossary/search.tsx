"use client";

import type { Glossary } from "@/.content-collections/generated";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { Command as CommandPrimitive } from "cmdk";
import { useRouter } from "next/navigation";
import * as React from "react";

export function FilterableCommand(props: {
  placeholder: string;
  className?: string;
  terms: Array<Glossary>;
}) {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  return (
    <Command className={cn("h-auto [&>div]:border-b-0", props.className)}>
      <CommandInput
        placeholder={props.placeholder}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
      />

      {open && (
        <CommandList>
          <CommandEmpty>No terms found.</CommandEmpty>
          <CommandGroup heading="Glossary Terms">
            {props.terms.map((item) => (
              <CommandPrimitive.Item
                key={item.slug}
                value={item.slug}
                className="px-3 py-2 cursor-pointer flex items-center w-full text-sm text-white/60 hover:text-white"
                onSelect={() => router.push(`/glossary/${item.slug}`)}
              >
                {item.title}
              </CommandPrimitive.Item>
            ))}
          </CommandGroup>
        </CommandList>
      )}
    </Command>
  );
}
