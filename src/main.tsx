import { createRoot } from "react-dom/client";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/hooks/useLanguage";
import App from "./App.tsx";
import "./index.css";
import { registerServiceWorker } from "./lib/registerSW";

registerServiceWorker();

createRoot(document.getElementById("root")!).render(
  <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </ThemeProvider>
);
