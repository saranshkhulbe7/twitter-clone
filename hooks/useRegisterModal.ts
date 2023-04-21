import { create } from "zustand";

interface RegisterModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useRegisterModal = create<RegisterModalStore>((set) => {
    return {
        isOpen: false,
        onOpen: () => set((state) => {
            return {
                ...state,
                isOpen: true
            }
        }),
        onClose: () => set((state) => {
            return {
                ...state,
                isOpen: false
            }
        })
    }
})
export default useRegisterModal;