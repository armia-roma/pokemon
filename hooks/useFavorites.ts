"use client";

import { useState, useEffect } from "react";

// Helper to read favorites from localStorage
const getFavorites = (): string[] => {
  if (typeof window === "undefined") return [];
  try {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

// Helper to save favorites to localStorage
const saveFavorites = (favorites: string[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
};

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>(getFavorites());

  // Sync state with localStorage whenever it changes
  useEffect(() => {
    saveFavorites(favorites);
  }, [favorites]);

  const toggleFavorite = (name: string) => {
    setFavorites((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  const isFavorite = (name: string) => favorites.includes(name);

  return { favorites, toggleFavorite, isFavorite };
}
