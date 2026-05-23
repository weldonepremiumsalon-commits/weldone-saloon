"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import WelcomeScreen from "./WelcomeScreen";

type Category = "men" | "women" | null;

interface CategoryContextType {
  category: Category;
  setCategory: (cat: Category) => void;
}

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

export function CategoryProvider({ children }: { children: React.ReactNode }) {
  const [category, setCategory] = useState<Category>(null);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  // 1. Load preference from Local Storage on initial load
  useEffect(() => {
    const saved = localStorage.getItem("weldone_category") as Category;
    if (saved) setCategory(saved);
    setIsMounted(true);
  }, []);

  // 2. SCROLL TO TOP LOGIC: Fires every time the pathname changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  const handleSetCategory = (cat: Category) => {
    setCategory(cat);
    // Only store non‑null values to satisfy TypeScript and avoid storing "null"
    if (cat) {
      localStorage.setItem("weldone_category", cat);
    }
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!isMounted) return null;

  return (
    <CategoryContext.Provider value={{ category, setCategory: handleSetCategory }}>
      {/* If no category is selected, lock them on the Welcome Screen. Otherwise, load the app! */}
      {!category ? <WelcomeScreen onSelect={handleSetCategory} /> : children}
    </CategoryContext.Provider>
  );
}

// Custom hook to easily grab the category inside any page
export function useCategory() {
  const context = useContext(CategoryContext);
  if (!context) throw new Error("useCategory must be used within a CategoryProvider");
  return context;
}