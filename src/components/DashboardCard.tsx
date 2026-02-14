import { Alert } from "@/components/ui/alert";

interface DashboardCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: React.ReactNode;
  variant?: "default" | "warning" | "success" | "danger";
}

const variantStyles = {
  default: "bg-card border-border",
  warning: "bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800",
  success: "bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800",
  danger: "bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800",
};

const textVariants = {
  default: "text-foreground",
  warning: "text-amber-700 dark:text-amber-200",
  success: "text-green-700 dark:text-green-200",
  danger: "text-red-700 dark:text-red-200",
};

export function DashboardCard({
  title,
  value,
  subtitle,
  icon,
  variant = "default",
}: DashboardCardProps) {
  return (
    <div
      className={`p-4 rounded-xl border transition-all hover:shadow-md ${variantStyles[variant]}`}
    >
      <div className="flex items-start justify-between mb-2">
        <h3 className={`text-sm font-display font-semibold ${textVariants[variant]}`}>
          {title}
        </h3>
        {icon && <div className={textVariants[variant]}>{icon}</div>}
      </div>
      <p className={`text-2xl font-bold mb-1 ${textVariants[variant]}`}>
        {value}
      </p>
      {subtitle && (
        <p className="text-xs text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}

interface MetricGridProps {
  children: React.ReactNode;
}

export function MetricGrid({ children }: MetricGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {children}
    </div>
  );
}
