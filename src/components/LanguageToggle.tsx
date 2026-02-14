import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-12 h-10" />;
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLanguage(language === "en" ? "hi" : "en")}
      className="text-xs font-medium"
      title={`Switch to ${language === "en" ? "हिंदी" : "English"}`}
    >
      {language === "en" ? "हिंदी" : "EN"}
    </Button>
  );
}
