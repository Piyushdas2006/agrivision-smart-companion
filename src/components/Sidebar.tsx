import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageToggle } from "@/components/LanguageToggle";
import { Button } from "@/components/ui/button";
import { Leaf, Cloud, Sprout, History, Settings, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export function Sidebar() {
  const { t } = useLanguage();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { icon: Leaf, label: t("dashboard"), path: "/" },
    { icon: Cloud, label: t("weather"), path: "/weather" },
    { icon: Sprout, label: t("crops"), path: "/crops" },
    { icon: History, label: t("history"), path: "/history" },
    { icon: Settings, label: t("settings"), path: "/settings" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="sticky top-0 z-50 flex items-center justify-between md:hidden gap-2 px-4 py-3 border-b border-border bg-card">
        <Link to="/" className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-primary" />
          <span className="font-display font-bold text-foreground">AgriVision</span>
        </Link>
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-screen w-64 border-r border-border bg-card transition-transform duration-300 z-40 md:static md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:z-auto`}
      >
        <div className="hidden md:flex items-center gap-2 p-6 border-b border-border">
          <Leaf className="h-6 w-6 text-primary" />
          <span className="font-display font-bold text-foreground">AgriVision</span>
        </div>

        {/* Navigation Items */}
        <nav className="flex flex-col gap-2 p-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  active
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom Controls */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-border bg-card p-4 space-y-2">
          <div className="flex items-center gap-2 justify-between">
            <span className="text-xs text-muted-foreground">Theme</span>
            <ThemeToggle />
          </div>
          <div className="flex items-center gap-2 justify-between">
            <span className="text-xs text-muted-foreground">Language</span>
            <LanguageToggle />
          </div>
        </div>
      </div>
    </>
  );
}
