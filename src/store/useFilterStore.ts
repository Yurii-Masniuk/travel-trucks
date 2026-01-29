import { create } from 'zustand';

interface FilterState {
  location: string;
  equipment: string[];
  vehicleType: string;
  setLocation: (loc: string) => void;
  toggleEquipment: (id: string) => void;
  setVehicleType: (type: string) => void;
  resetFilters: () => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  location: '',
  equipment: [],
  vehicleType: '',

  setLocation: (loc) => set({ location: loc }),

  toggleEquipment: (id) => set((state) => ({
    equipment: state.equipment.includes(id)
      ? state.equipment.filter((item) => item !== id)
      : [...state.equipment, id]
  })),

  setVehicleType: (type) => set((state) => ({
    vehicleType: state.vehicleType === type ? '' : type
  })),

  resetFilters: () => set({
    location: '',
    equipment: [],
    vehicleType: ''
  }),
}));