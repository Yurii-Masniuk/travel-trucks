import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface VehicleState {
  favorites: string[]; // Масив ID обраних кемперів
  toggleFavorite: (id: string) => void;
}

export const useVehicleStore = create<VehicleState>()(
  persist(
    (set) => ({
      favorites: [],
      toggleFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.includes(id)
            ? state.favorites.filter((favId) => favId !== id) // Видалити, якщо вже є
            : [...state.favorites, id], // Додати, якщо немає
        })),
    }),
    {
      name: 'favorites-storage', // Ключ у LocalStorage
      storage: createJSONStorage(() => localStorage),
    }
  )
);