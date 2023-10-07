'use client';

import { create } from 'zustand';

type State = {
  modalIsOpen: boolean;
  component: React.ReactNode | null;
};

type Actions = {
  openModal: (component: React.ReactNode) => void;
  closeModal: () => void;
};

export const useModal = create<State & Actions>((set) => ({
  modalIsOpen: false,
  component: null,
  openModal: (component: React.ReactNode) => {
    set({ modalIsOpen: true, component });
    const modalExit = document.getElementById('modal-exit');
    if (modalExit) {
      modalExit.focus();
    }
  },
  closeModal: async () => {
    set({ modalIsOpen: false });
    await new Promise((resolve) => setTimeout(resolve, 350));
    set({ component: null });
  },
}));
