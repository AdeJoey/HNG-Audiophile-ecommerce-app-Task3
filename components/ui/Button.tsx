import { cn } from "@/lib/utils/cn";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "font-bold text-[13px] tracking-widest uppercase px-8 py-4 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
          {
            'bg-brand-orange hover:bg-light-orange text-white': variant === 'primary',
            'bg-transparent hover:bg-black text-black hover:text-white border border-black': variant === 'secondary',
            'bg-black hover:bg-gray-800 text-white': variant === 'tertiary',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };