import { create } from 'zustand';

type State = { theme: 'light' | 'dark' | 'system' };
type Actions = { setTheme: (theme: 'light' | 'dark' | 'system') => void };

export const useTheme = create<State & Actions>((set) => ({
  theme: 'system',
  setTheme: (theme) => set(() => ({ theme })),
}));
