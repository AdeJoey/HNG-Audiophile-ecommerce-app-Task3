import { cn } from "@/lib/utils/cn";
import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, label, id, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label 
            htmlFor={id}
            className={cn(
              "block text-[12px] font-bold mb-2 tracking-tight",
              error ? "text-error" : "text-black"
            )}
          >
            {label}
            {error && <span className="float-right text-error">{error}</span>}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={cn(
            "w-full px-6 py-[18px] rounded-lg border-2 font-bold text-[14px] caret-brand-orange",
            "focus:outline-none focus:border-brand-orange",
            "placeholder:text-black placeholder:opacity-40",
            error 
              ? "border-error focus:border-error" 
              : "border-light-gray",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
// components/ui/Input.tsx
export * from "./input";
