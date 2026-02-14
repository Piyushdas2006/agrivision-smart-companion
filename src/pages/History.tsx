import { useLanguage } from "@/hooks/useLanguage";
import { Card } from "@/components/ui/card";
import { EmptyState } from "@/components/EmptyStates";

const History = () => {
  const { t } = useLanguage();
  const activities = [
    { id: 1, action: "Harvested Wheat", date: "2025-02-10", crop: "Field A" },
    { id: 2, action: "Applied fertilizer", date: "2025-02-05", crop: "Field B" },
    { id: 3, action: "Pest treatment", date: "2025-02-01", crop: "Field C" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border bg-card sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-display font-bold text-foreground">
            {t("history")}
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            View your farming activities and events
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {activities.length > 0 ? (
          <div className="space-y-3">
            {activities.map((activity) => (
              <Card key={activity.id} className="p-4 border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-foreground">
                      {activity.action}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {activity.crop}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {new Date(activity.date).toLocaleDateString()}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <EmptyState title={t("noData")} description="No activities recorded yet." />
        )}
      </div>
    </div>
  );
};

export default History;
