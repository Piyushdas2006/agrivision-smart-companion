export const translations = {
  en: {
    // Hero Section
    agriVision: "AgriVision",
    heroSubtitle: "Smart farming powered by AI & real-time data",

    // Status Bar
    online: "Online",
    location: "Location",
    camera: "Camera",

    // Features
    features: "Features",
    weatherInsights: "Weather Insights",
    weatherInsightsDesc: "Hyper-local forecasts for your fields",
    leafAnalysis: "Leaf Analysis",
    leafAnalysisDesc: "AI-powered disease detection",
    cropSuggestions: "Crop Suggestions",
    cropSuggestionsDesc: "Region-optimized recommendations",

    // Permission Flow
    permissionsNeeded: "Permissions Needed",
    permissionsDescription: "AgriVision needs location and camera access to provide personalized insights.",
    allowLocation: "Allow Location",
    allowCamera: "Allow Camera",
    skip: "Skip",
    permissionsGranted: "Permissions Granted!",
    ready: "Ready to help you grow!",

    // Offline Modal
    offline: "You're Offline",
    offlineMessage: "Some features require internet connection. You can still access offline features.",
    dismiss: "Dismiss",

    // ChatBot
    chatPlaceholder: "Ask me about your crops...",
    send: "Send",

    // Theme Toggle
    switchTheme: "Switch theme",

    // Language
    language: "Language",

    // Denied Permissions
    permissionsDenied: "Some permissions were denied",
    grantPermissions: "You can grant permissions in settings to unlock all features",
  },
  hi: {
    // Hero Section
    agriVision: "कृषि दृष्टि",
    heroSubtitle: "AI और रीयल-टाइम डेटा द्वारा संचालित स्मार्ट खेती",

    // Status Bar
    online: "ऑनलाइन",
    location: "स्थान",
    camera: "कैमरा",

    // Features
    features: "विशेषताएं",
    weatherInsights: "मौसम की जानकारी",
    weatherInsightsDesc: "अपने खेतों के लिए हाइपर-लोकल पूर्वानुमान",
    leafAnalysis: "पत्ती विश्लेषण",
    leafAnalysisDesc: "AI-संचालित रोग का पता लगाना",
    cropSuggestions: "फसल सुझाव",
    cropSuggestionsDesc: "क्षेत्र-अनुकूलित सिफारिशें",

    // Permission Flow
    permissionsNeeded: "अनुमतियां आवश्यक हैं",
    permissionsDescription: "कृषि दृष्टि को व्यक्तिगत अंतर्दृष्टि प्रदान करने के लिए स्थान और कैमरा एक्सेस की आवश्यकता है।",
    allowLocation: "स्थान की अनुमति दें",
    allowCamera: "कैमरा की अनुमति दें",
    skip: "छोड़ें",
    permissionsGranted: "अनुमतियां दी गई हैं!",
    ready: "आपकी वृद्धि में मदद करने के लिए तैयार!",

    // Offline Modal
    offline: "आप ऑफ़लाइन हैं",
    offlineMessage: "कुछ सुविधाओं के लिए इंटरनेट कनेक्शन की आवश्यकता है। आप अभी भी ऑफ़लाइन सुविधाओं तक पहुंच सकते हैं।",
    dismiss: "बंद करें",

    // ChatBot
    chatPlaceholder: "अपनी फसलों के बारे में मुझसे पूछें...",
    send: "भेजें",

    // Theme Toggle
    switchTheme: "थीम बदलें",

    // Language
    language: "भाषा",

    // Denied Permissions
    permissionsDenied: "कुछ अनुमतियां अस्वीकार कर दी गई हैं",
    grantPermissions: "आप सभी सुविधाओं को अनलॉक करने के लिए सेटिंग्स में अनुमतियां दे सकते हैं",
  },
} as const;

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;
