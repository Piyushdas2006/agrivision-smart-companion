import { useLanguage } from "@/hooks/useLanguage";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Bell, Shield, HelpCircle, LogOut } from "lucide-react";

const Settings = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-border bg-card sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-display font-bold text-foreground">
            {t("settings")}
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
        {/* Notifications */}
        <Card className="p-6 border-border">
          <div className="flex items-center gap-3 mb-4">
            <Bell className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-display font-bold text-foreground">
              Notifications
            </h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Weather Alerts</p>
                <p className="text-sm text-muted-foreground">
                  Get notified about weather changes
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="border-t border-border pt-4 flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Crop Health</p>
                <p className="text-sm text-muted-foreground">
                  Regular health check reminders
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="border-t border-border pt-4 flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">Pest Alerts</p>
                <p className="text-sm text-muted-foreground">
                  Immediate notification of pest detection
                </p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </Card>

        {/* Privacy & Security */}
        <Card className="p-6 border-border">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-display font-bold text-foreground">
              Privacy & Security
            </h2>
          </div>
          <div className="space-y-4">
            <Button variant="outline" className="w-full justify-start">
              Change Password
            </Button>
            <Button variant="outline" className="w-full justify-start">
              Manage Permissions
            </Button>
            <Button variant="outline" className="w-full justify-start">
              Data & Privacy
            </Button>
          </div>
        </Card>

        {/* Support */}
        <Card className="p-6 border-border">
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-display font-bold text-foreground">
              Support
            </h2>
          </div>
          <div className="space-y-4">
            <Button variant="outline" className="w-full justify-start">
              Help & FAQ
            </Button>
            <Button variant="outline" className="w-full justify-start">
              Contact Support
            </Button>
            <Button variant="outline" className="w-full justify-start">
              Report Issue
            </Button>
          </div>
        </Card>

        {/* Danger Zone */}
        <Card className="p-6 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/20">
          <h2 className="text-lg font-display font-bold text-red-900 dark:text-red-200 mb-4">
            Danger Zone
          </h2>
          <Button variant="destructive" className="w-full">
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
