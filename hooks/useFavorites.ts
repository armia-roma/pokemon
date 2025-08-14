"use client";

import React, {
	useState,
	useEffect,
	useCallback,
	createContext,
	useContext,
	useMemo,
} from "react";

// Create context for favorites
interface FavoritesContextType {
	favorites: string[];
	toggleFavorite: (pokemonName: string) => void;
	isFavorite: (pokemonName: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
	undefined
);

// Provider component
export function FavoritesProvider({children}: {children: React.ReactNode}) {
	const [favorites, setFavorites] = useState<string[]>([]);

	// Load from localStorage on first mount
	useEffect(() => {
		const stored = localStorage.getItem("favorites");
		if (stored) {
			try {
				setFavorites(JSON.parse(stored));
			} catch (error) {
				console.error(
					"Error parsing favorites from localStorage:",
					error
				);
				setFavorites([]);
			}
		}
	}, []);

	// Save to localStorage whenever favorites change
	useEffect(() => {
		localStorage.setItem("favorites", JSON.stringify(favorites));
	}, [favorites]);

	const toggleFavorite = useCallback((pokemonName: string) => {
		setFavorites((prev) => {
			if (prev.includes(pokemonName)) {
				return prev.filter((fav) => fav !== pokemonName);
			}
			return [...prev, pokemonName];
		});
	}, []);

	const isFavorite = useCallback(
		(pokemonName: string) => {
			return favorites.includes(pokemonName);
		},
		[favorites]
	);

	const value = useMemo(
		() => ({
			favorites,
			toggleFavorite,
			isFavorite,
		}),
		[favorites, toggleFavorite, isFavorite]
	);

	return React.createElement(FavoritesContext.Provider, {value}, children);
}

// Hook to use favorites context
export function useFavorites() {
	const context = useContext(FavoritesContext);
	if (context === undefined) {
		throw new Error("useFavorites must be used within a FavoritesProvider");
	}
	return context;
}
