import { create } from 'zustand';

type State = { mobileMenuIsOpen: boolean };
type Actions = {
  toggleMobileMenu: () => void;
  setMobileMenu: (status: boolean) => void;
};

export const useMobileMenu = create<State & Actions>((set) => ({
  mobileMenuIsOpen: false,
  toggleMobileMenu: () => set(({ mobileMenuIsOpen }) => ({ mobileMenuIsOpen: !mobileMenuIsOpen })),
  setMobileMenu: (status) => set(() => ({ mobileMenuIsOpen: status })),
}));
