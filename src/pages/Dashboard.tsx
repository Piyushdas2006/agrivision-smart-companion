import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { DashboardCard, MetricGrid } from "@/components/DashboardCard";
import { EmptyState } from "@/components/EmptyStates";
import { Card } from "@/components/ui/card";
import {
  Droplets,
  Bug,
  Leaf,
  TrendingUp,
  Calendar,
  AlertCircle,
} from "lucide-react";

const Dashboard = () => {
  const { t } = useLanguage();
  const [recentActivities] = useState([
    { id: 1, title: "Watered field A", time: "2 hours ago", type: "action" },
    { id: 2, title: "Pest detected in crop", time: "5 hours ago", type: "alert" },
    { id: 3, title: "Weather forecast updated", time: "1 day ago", type: "info" },
  ]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-display font-bold text-foreground">
            {t("welcomeBack")}
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        {/* Key Metrics */}
        <section>
          <h2 className="text-lg font-display font-bold text-foreground mb-4">
            {t("todaysFocus")}
          </h2>
          <MetricGrid>
            <DashboardCard
              title={t("fieldHealth")}
              value="92%"
              subtitle="Excellent condition"
              icon={<TrendingUp className="h-5 w-5" />}
              variant="success"
            />
            <DashboardCard
              title={t("wateringNeeded")}
              value="2"
              subtitle="Fields requiring water"
              icon={<Droplets className="h-5 w-5" />}
              variant="warning"
            />
            <DashboardCard
              title={t("pestAlert")}
              value="1"
              subtitle="Detected in Field B"
              icon={<Bug className="h-5 w-5" />}
              variant="danger"
            />
            <DashboardCard
              title={t("goodCondition")}
              value="5/6"
              subtitle="Fields in good shape"
              icon={<Leaf className="h-5 w-5" />}
              variant="success"
            />
          </MetricGrid>
        </section>

        {/* Recent Activities */}
        <section>
          <h2 className="text-lg font-display font-bold text-foreground mb-4">
            {t("recent")}
          </h2>
          {recentActivities.length > 0 ? (
            <div className="space-y-2">
              {recentActivities.map((activity) => (
                <Card
                  key={activity.id}
                  className="p-4 hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {activity.type === "alert" ? (
                        <AlertCircle className="h-5 w-5 text-red-500" />
                      ) : activity.type === "action" ? (
                        <Calendar className="h-5 w-5 text-blue-500" />
                      ) : (
                        <Leaf className="h-5 w-5 text-green-500" />
                      )}
                      <div>
                        <p className="font-medium text-foreground">
                          {activity.title}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <EmptyState
              title={t("noRecent")}
              description="Start by adding crops or taking actions."
            />
          )}
        </section>

        {/* Quick Stats */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-6 border-border">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">Total Crops</p>
              <p className="text-3xl font-bold text-primary">6</p>
            </div>
          </Card>
          <Card className="p-6 border-border">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">
                {t("daysLeft")} to Harvest
              </p>
              <p className="text-3xl font-bold text-primary">23</p>
            </div>
          </Card>
          <Card className="p-6 border-border">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">
                Health Average
              </p>
              <p className="text-3xl font-bold text-primary">94%</p>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
