import { IProduct } from "@/interfaces/product.interface";

export const fetchProducts = async (): Promise<IProduct[]> => {
  try {
    const response = await fetch("/data/products.data.json", {
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
