import { useLanguage } from "@/hooks/useLanguage";
import { Card } from "@/components/ui/card";
import { CloudRain, Wind, Droplets, Eye, Gauge } from "lucide-react";

const Weather = () => {
  const { t } = useLanguage();

  const weatherData = {
    temp: "28°C",
    condition: "Partly Cloudy",
    humidity: "65%",
    windSpeed: "12 km/h",
    rainfall: "2.5 mm",
    visibility: "10 km",
    pressure: "1013 mb",
  };

  const forecast = [
    { day: "Tomorrow", high: "30°C", low: "22°C", condition: "Sunny", icon: "☀️" },
    { day: "Wednesday", high: "28°C", low: "20°C", condition: "Cloudy", icon: "☁️" },
    { day: "Thursday", high: "26°C", low: "19°C", condition: "Rainy", icon: "🌧️" },
    { day: "Friday", high: "29°C", low: "21°C", condition: "Sunny", icon: "☀️" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-display font-bold text-foreground">
            {t("weather")}
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            {t("currentWeather")} for your fields
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        {/* Current Weather Card */}
        <Card className="p-8 border-border bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">⛅</div>
            <p className="text-4xl font-bold text-foreground">
              {weatherData.temp}
            </p>
            <p className="text-lg text-muted-foreground mt-2">
              {weatherData.condition}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="text-center">
              <Droplets className="h-6 w-6 mx-auto mb-2 text-blue-500" />
              <p className="text-sm text-muted-foreground">{t("humidity")}</p>
              <p className="font-bold text-foreground">{weatherData.humidity}</p>
            </div>
            <div className="text-center">
              <Wind className="h-6 w-6 mx-auto mb-2 text-blue-500" />
              <p className="text-sm text-muted-foreground">{t("windSpeed")}</p>
              <p className="font-bold text-foreground">
                {weatherData.windSpeed}
              </p>
            </div>
            <div className="text-center">
              <CloudRain className="h-6 w-6 mx-auto mb-2 text-blue-500" />
              <p className="text-sm text-muted-foreground">{t("rainfall")}</p>
              <p className="font-bold text-foreground">
                {weatherData.rainfall}
              </p>
            </div>
            <div className="text-center">
              <Eye className="h-6 w-6 mx-auto mb-2 text-blue-500" />
              <p className="text-sm text-muted-foreground">Visibility</p>
              <p className="font-bold text-foreground">
                {weatherData.visibility}
              </p>
            </div>
          </div>
        </Card>

        {/* Forecast */}
        <section>
          <h2 className="text-lg font-display font-bold text-foreground mb-4">
            {t("forecast")} (7 Days)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {forecast.map((day, i) => (
              <Card key={i} className="p-4 border-border text-center">
                <p className="font-semibold text-foreground mb-2">{day.day}</p>
                <p className="text-3xl mb-2">{day.icon}</p>
                <p className="text-sm text-muted-foreground mb-3">
                  {day.condition}
                </p>
                <div className="flex justify-center gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground">High</p>
                    <p className="font-bold text-foreground">{day.high}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Low</p>
                    <p className="font-bold text-foreground">{day.low}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Weather Alerts */}
        <section>
          <h2 className="text-lg font-display font-bold text-foreground mb-4">
            Alerts
          </h2>
          <Card className="p-4 border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950/20">
            <p className="text-sm text-amber-800 dark:text-amber-200">
              ⚠️ Heavy rainfall expected Thursday evening. Plan your irrigation
              accordingly.
            </p>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Weather;
