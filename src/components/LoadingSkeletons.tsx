import { Skeleton } from "@/components/ui/skeleton";

export function DashboardCardSkeleton() {
  return (
    <div className="p-4 rounded-xl border border-border bg-card space-y-3">
      <Skeleton className="h-4 w-32" />
      <Skeleton className="h-8 w-20" />
      <Skeleton className="h-3 w-full" />
    </div>
  );
}

export function FeatureListSkeleton() {
  return (
    <div className="space-y-3">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card">
          <Skeleton className="h-12 w-12 rounded-lg" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-3 w-48" />
          </div>
          <Skeleton className="h-5 w-5" />
        </div>
      ))}
    </div>
  );
}

export function WeatherCardSkeleton() {
  return (
    <div className="p-4 rounded-xl border border-border bg-card space-y-4">
      <div className="space-y-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-12 w-32" />
      </div>
      <div className="grid grid-cols-2 gap-2">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-16" />
        ))}
      </div>
    </div>
  );
}

export function CropCardSkeleton() {
  return (
    <div className="p-4 rounded-xl border border-border bg-card space-y-3">
      <div className="flex items-center justify-between">
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-6 w-16 rounded-full" />
      </div>
      <Skeleton className="h-3 w-full" />
      <div className="grid grid-cols-2 gap-2">
        <Skeleton className="h-8" />
        <Skeleton className="h-8" />
      </div>
    </div>
  );
}
