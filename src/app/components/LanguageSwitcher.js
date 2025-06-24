"use client";
import { motion } from "framer-motion";
import { useTranslation } from "../hooks/useTranslation";

const LanguageSwitcher = () => {
  const { locale, changeLanguage, mounted } = useTranslation();

  const switchLanguage = (newLocale) => {
    if (newLocale !== locale) {
      changeLanguage(newLocale);
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative"
    >
      <div className="flex items-center gap-2 p-2 rounded-lg bg-gray-100 dark:bg-zinc-800">
        <button
          onClick={() => switchLanguage("id")}
          className={`px-3 py-1 text-xs rounded-md transition-all duration-200 ${
            locale === "id"
              ? "bg-teal-500 text-white shadow-sm"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
          }`}
        >
          🇮🇩 ID
        </button>
        <button
          onClick={() => switchLanguage("en")}
          className={`px-3 py-1 text-xs rounded-md transition-all duration-200 ${
            locale === "en"
              ? "bg-teal-500 text-white shadow-sm"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
          }`}
        >
          🇺🇸 EN
        </button>
      </div>
    </motion.div>
  );
};

export default LanguageSwitcher;
