import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "group relative bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out overflow-hidden",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "relative aspect-video overflow-hidden p-0",
      className
    )}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "absolute bottom-2 left-2 right-2 text-lg font-semibold text-white",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardTag = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "absolute top-2 px-2 py-1 rounded-xl text-xs font-semibold text-white",
      className
    )}
    {...props}
  />
));
CardTag.displayName = "CardTag";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-4 flex flex-col justify-between", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-gray-600 line-clamp-3 mb-4 text-left", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex justify-between items-center mt-auto p-4", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

const CardPrice = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn("text-lg font-bold text-primary-blue", className)}
    {...props}
  />
));
CardPrice.displayName = "CardPrice";

const CardButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "rounded-full bg-secondary-blue text-white px-4 py-2 text-sm hover:bg-secondary-blue/90",
      className
    )}
    {...props}
  />
));
CardButton.displayName = "CardButton";

export {
  Card,
  CardHeader,
  CardTitle,
  CardTag,
  CardContent,
  CardDescription,
  CardFooter,
  CardPrice,
  CardButton,
};
