import { IBankingOperation } from "@/interfaces/banking-operation.interface";

export const fetchBankingOperations = async (): Promise<
  IBankingOperation[]
> => {
  try {
    const response = await fetch("/data/banking-operations.data.json", {
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
