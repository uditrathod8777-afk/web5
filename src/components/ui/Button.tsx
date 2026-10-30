import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "teal";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  external?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className,
  type = "button",
  disabled = false,
  external = false,
}: ButtonProps) {
  const baseClasses = "relative inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 overflow-hidden group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary: "text-white",
    secondary: "bg-[#141518] border border-[#29272A] text-[#F5F3F0] hover:border-[#65503F] hover:bg-[#191A1E]",
    outline: "border border-[#A66C45] text-[#A66C45] hover:bg-[#A66C45]/10",
    ghost: "text-[#A5A5AA] hover:text-[#F5F3F0] hover:bg-[#101114]",
    teal: "text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const style =
    variant === "primary"
      ? { background: "linear-gradient(135deg, #75472F, #A66C45)" }
      : variant === "teal"
      ? { background: "linear-gradient(135deg, #073F40, #0D7775)" }
      : {};

  const classes = cn(baseClasses, variants[variant], sizes[size], className);

  const inner = (
    <>
      <span className="relative z-10">{children}</span>
      {(variant === "primary" || variant === "teal") && (
        <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-200"></span>
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes} style={style}>
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} style={style}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes} style={style}>
      {inner}
    </button>
  );
}
