import { create } from "zustand";

interface AppModalStore {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useAppModal = create<AppModalStore>((set) => ({
  open: false,
  onOpen: () => set({ open: true }),
  onClose: () => set({ open: false }),
}));

export default useAppModal;
