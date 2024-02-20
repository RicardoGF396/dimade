import { create } from "zustand";

const useServicesStore = create((set) => ({
  service: "Obra civil",
  setService: (newService) => set(() => ({ service: newService })),
}));

export default useServicesStore;
