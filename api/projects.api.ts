import { IProject } from '@/interfaces/project.interface';

export const fetchProjects = async (): Promise<IProject[]> => {
  try {
    const response = await fetch("/data/projects.data.json", { next: { revalidate: 3600 } });
    
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return await response.json();
  } catch (error) {
    return Promise.reject(error);
  }
};
