import { create } from 'zustand';

interface AppState {
  currentPageId: string;
  darkMode: boolean;
  sidebarOpen: boolean;
  setCurrentPage: (pageId: string) => void;
  toggleDarkMode: () => void;
  toggleSidebar: () => void;
}

export const useStore = create<AppState>((set) => ({
  currentPageId: 'home',
  darkMode: false,
  sidebarOpen: true,
  setCurrentPage: (pageId) => set({ currentPageId: pageId }),
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
}));
