import { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  className?: string;
  children?: ReactNode;
}

export const SectionHeader = ({
  title,
  subtitle,
  description,
  centered = true,
  className = "",
  children,
}: SectionHeaderProps) => {
  return (
    <div
      className={`mb-12 md:mb-16 ${centered ? "text-center" : ""} ${className}`}
    >
      {subtitle && (
        <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
          {subtitle}
        </p>
      )}
      <h2 className="heading-section text-foreground mb-4">{title}</h2>
      {description && (
        <p
          className={`text-muted-foreground text-lg ${
            centered ? "max-w-2xl mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
      {children}
    </div>
  );
};
