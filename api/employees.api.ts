import { IEmployee } from '@/interfaces/employee.interface';

export const fetchEmployees = async (): Promise<IEmployee[]> => {
  try {
    const response = await fetch("../data/employees.data.json", { next: { revalidate: 3600 } });
    
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return await response.json();
  } catch (error) {
    return Promise.reject(error);
  }
};
