import { create, type StateCreator } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { getEnvs } from "../helpers/getEnvs";
import axios from "axios";

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface ServicesState {
  services: Service[];
}

interface ServicesActions {
  setServices: (services: Service[]) => void;
  getServices: () => Promise<void>;
}

const { VITE_API_URL } = getEnvs();

const servicesApi: StateCreator<ServicesState & ServicesActions> = (set) => ({
  services: [],
  setServices: (services) => set({ services }),
  getServices: async () => {
    try {
      const { data } = await axios.get(`${VITE_API_URL}/services`);
      set({ services: data });
    } catch (error) {
      console.log("Error fetching services: ", error);
    }
  },
});

export const useServicesStore = create<ServicesState & ServicesActions>()(
  devtools(
    persist(servicesApi, {
      name: "services-storage",
    }),
  ),
);
