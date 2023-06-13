import { create } from "zustand";
import { persist } from "zustand/middleware";

interface DevMarker {
  hideSession: boolean;
  setHideSession: (state: boolean) => void;
}

export const devMarkerStore = create<DevMarker>()(
  persist(
    (set) => ({
      hideSession: false,
      setHideSession: (state) => set({ hideSession: state }),
    }),
    {
      name: "dev-marker-storage",
      getStorage: () => sessionStorage,
    }
  )
);
