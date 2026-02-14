import { useLanguage } from "@/hooks/useLanguage";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NoCropsState } from "@/components/EmptyStates";
import { Progress } from "@/components/ui/progress";
import { Plus, Leaf, Calendar, Sprout } from "lucide-react";

const CropsPage = () => {
  const { t } = useLanguage();
  const crops = [
    {
      id: 1,
      name: "Potato",
      field: "Field A",
      plantDate: "2025-01-15",
      expectedHarvest: "2026-04-15",
      health: 92,
      stage: "Growth",
    },
    {
      id: 2,
      name: "Tomato",
      field: "Field B",
      plantDate: "2025-12-01",
      expectedHarvest: "2026-04-01",
      health: 88,
      stage: "Flowering",
    },
    {
      id: 3,
      name: "Potato",
      field: "Field C",
      plantDate: "2025-11-20",
      expectedHarvest: "2026-03-20",
      health: 85,
      stage: "Growth",
    },
    {
      id: 4,
      name: "Corn",
      field: "Field D",
      plantDate: "2025-10-20",
      expectedHarvest: "2026-03-20",
      health: 90,
      stage: "Growth",
    },
  ];

  const calculateDaysLeft = (harvestDate: string) => {
    const today = new Date();
    const harvest = new Date(harvestDate);
    const diff = Math.ceil((harvest.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    return Math.max(0, diff);
  };

  if (crops.length === 0) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <div className="border-b border-border bg-card sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <h1 className="text-3xl font-display font-bold text-foreground">
              {t("myCrops")}
            </h1>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center px-4">
          <NoCropsState onAddCrop={() => {}} />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-display font-bold text-foreground">
              {t("myCrops")}
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Manage and monitor your crops
            </p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            {t("addCrop")}
          </Button>
        </div>
      </div>

      {/* Crops Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {crops.map((crop) => {
            const daysLeft = calculateDaysLeft(crop.expectedHarvest);
            return (
              <Card
                key={crop.id}
                className="p-6 border-border hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-display font-bold text-foreground">
                      {crop.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{crop.field}</p>
                  </div>
                  <Leaf className="h-6 w-6 text-primary" />
                </div>

                {/* Health Status */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium text-foreground">
                      {t("cropHealth")}
                    </p>
                    <span className="text-sm font-bold text-primary">
                      {crop.health}%
                    </span>
                  </div>
                  <Progress value={crop.health} className="h-2" />
                </div>

                {/* Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      {t("plantDate")}:{" "}
                    </span>
                    <span className="font-medium text-foreground">
                      {new Date(crop.plantDate).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Sprout className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">
                      {t("daysLeft")}:{" "}
                    </span>
                    <span className="font-bold text-primary">{daysLeft} days</span>
                  </div>
                </div>

                {/* Stage Badge */}
                <div className="flex items-center gap-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      crop.stage === "Growth"
                        ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200"
                        : crop.stage === "Flowering"
                          ? "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-200"
                          : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200"
                    }`}
                  >
                    {crop.stage}
                  </span>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CropsPage;
