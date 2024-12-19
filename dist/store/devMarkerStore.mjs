// src/store/devMarkerStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
var devMarkerStore = create()(
  persist(
    (set) => ({
      hideSession: false,
      setHideSession: (state) => set({ hideSession: state })
    }),
    {
      name: "dev-marker-storage",
      getStorage: () => sessionStorage
    }
  )
);
export {
  devMarkerStore
};
//# sourceMappingURL=devMarkerStore.mjs.map