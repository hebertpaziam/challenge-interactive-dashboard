import { ISale } from "@/interfaces/sales.interface";

export const fetchSales = async (): Promise<ISale[]> => {
  try {
    const response = await fetch("/data/sales.data.json", {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return await response.json();
  } catch (error) {
    return Promise.reject(error);
  }
};
