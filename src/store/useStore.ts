
import { create } from 'zustand';
import { Solution, RoadmapCard, Status } from '../types/roadmap';
import { initialData } from '../data/initial-data';

interface RoadmapStore {
  solutions: Solution[];
  selectedSolutionId: string | null;
  isDarkMode: boolean;
  filters: {
    productSection: string | null;
    progressRange: [number, number];
    tags: string[];
  };
  selectSolution: (id: string) => void;
  toggleDarkMode: () => void;
  updateCard: (solutionId: string, card: RoadmapCard) => void;
  moveCard: (solutionId: string, cardId: string, newStatus: Status) => void;
  setFilters: (filters: Partial<RoadmapStore['filters']>) => void;
  deleteCard: (solutionId: string, cardId: string) => void;
}

export const useStore = create<RoadmapStore>((set) => ({
  solutions: initialData,
  selectedSolutionId: initialData[0].id,
  isDarkMode: false,
  filters: {
    productSection: null,
    progressRange: [0, 100],
    tags: [],
  },
  selectSolution: (id) => set({ selectedSolutionId: id }),
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
  updateCard: (solutionId, updatedCard) =>
    set((state) => ({
      solutions: state.solutions.map((solution) =>
        solution.id === solutionId
          ? {
              ...solution,
              cards: solution.cards.map((card) =>
                card.id === updatedCard.id ? updatedCard : card
              ),
            }
          : solution
      ),
    })),
  moveCard: (solutionId, cardId, newStatus) =>
    set((state) => ({
      solutions: state.solutions.map((solution) =>
        solution.id === solutionId
          ? {
              ...solution,
              cards: solution.cards.map((card) =>
                card.id === cardId ? { ...card, status: newStatus } : card
              ),
            }
          : solution
      ),
    })),
  setFilters: (newFilters) =>
    set((state) => ({
      filters: { ...state.filters, ...newFilters },
    })),
  deleteCard: (solutionId, cardId) =>
    set((state) => ({
      solutions: state.solutions.map((solution) =>
        solution.id === solutionId
          ? {
              ...solution,
              cards: solution.cards.filter((card) => card.id !== cardId),
            }
          : solution
      ),
    })),
}));