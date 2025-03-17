import * as React from "react";

import { cn } from "@/lib/utils";

const Table = (
  {
    ref,
    className,
    ...props
  }: React.HTMLAttributes<HTMLTableElement> & {
    ref: React.RefObject<HTMLTableElement>;
  }
) => (<div className="relative w-full overflow-auto">
  <table ref={ref} className={cn("caption-bottom", className)} {...props} />
</div>);
Table.displayName = "Table";

const TableHeader = (
  {
    ref,
    className,
    ...props
  }: React.HTMLAttributes<HTMLTableSectionElement> & {
    ref: React.RefObject<HTMLTableSectionElement>;
  }
) => (<thead
  ref={ref}
  className={cn("font-semibold text-base leading-6 pb-6 text-white ", className)}
  {...props}
/>);
TableHeader.displayName = "TableHeader";

const TableBody = (
  {
    ref,
    className,
    ...props
  }: React.HTMLAttributes<HTMLTableSectionElement> & {
    ref: React.RefObject<HTMLTableSectionElement>;
  }
) => (<tbody ref={ref} className={cn("text-left text-white/70 ", className)} {...props} />);
TableBody.displayName = "TableBody";

const TableFooter = (
  {
    ref,
    className,
    ...props
  }: React.HTMLAttributes<HTMLTableSectionElement> & {
    ref: React.RefObject<HTMLTableSectionElement>;
  }
) => (<tfoot ref={ref} className={cn("font-normal text-sm", className)} {...props} />);
TableFooter.displayName = "TableFooter";

const TableRow = (
  {
    ref,
    className,
    ...props
  }: React.HTMLAttributes<HTMLTableRowElement> & {
    ref: React.RefObject<HTMLTableRowElement>;
  }
) => (<tr ref={ref} className={cn("border-b-[.75px] border-white/[.08]", className)} {...props} />);
TableRow.displayName = "TableRow";

const TableHead = (
  {
    ref,
    className,
    ...props
  }: React.ThHTMLAttributes<HTMLTableCellElement> & {
    ref: React.RefObject<HTMLTableCellElement>;
  }
) => (<th
  ref={ref}
  className={cn(
    "h-12 px-4 text-left align-middle font-medium font-white border-b-[.75px] border-white/[.2] pb-2",
    className,
  )}
  {...props}
/>);
TableHead.displayName = "TableHead";

const TableCell = (
  {
    ref,
    className,
    ...props
  }: React.TdHTMLAttributes<HTMLTableCellElement> & {
    ref: React.RefObject<HTMLTableCellElement>;
  }
) => (<td ref={ref} className={cn("p-4 align-middle", className)} {...props} />);
TableCell.displayName = "TableCell";

const TableCaption = (
  {
    ref,
    className,
    ...props
  }: React.HTMLAttributes<HTMLTableCaptionElement> & {
    ref: React.RefObject<HTMLTableCaptionElement>;
  }
) => (<caption ref={ref} className={cn("mt-4 text-sm", className)} {...props} />);
TableCaption.displayName = "TableCaption";

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption };
