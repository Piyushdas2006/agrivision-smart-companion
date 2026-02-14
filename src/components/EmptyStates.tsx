import { AlertCircle, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  actionLabel?: string;
  onAction?: () => void;
}

export function EmptyState({
  title,
  description,
  icon,
  actionLabel,
  onAction,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
        {icon || <AlertCircle className="h-8 w-8 text-muted-foreground" />}
      </div>
      <h3 className="text-lg font-display font-semibold text-foreground mb-2">
        {title}
      </h3>
      {description && (
        <p className="text-sm text-muted-foreground mb-6 max-w-sm">
          {description}
        </p>
      )}
      {actionLabel && onAction && (
        <Button onClick={onAction} size="sm">
          <PlusCircle className="h-4 w-4 mr-2" />
          {actionLabel}
        </Button>
      )}
    </div>
  );
}

export function NoCropsState({ onAddCrop }: { onAddCrop: () => void }) {
  return (
    <EmptyState
      title="No Crops Yet"
      description="Start by adding your first crop to get personalized recommendations and monitoring."
      actionLabel="Add Crop"
      onAction={onAddCrop}
    />
  );
}

export function NoDataState({ title }: { title: string }) {
  return <EmptyState title={title} description="No data available at the moment." />;
}
