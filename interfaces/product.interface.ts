import { ColorEnum } from '@/enums/color.enum';
import { DepartmentCategoryEnum } from '@/enums/department-category.enum';

export interface IProduct {
  id: number;
  nome: string;
  categoria: DepartmentCategoryEnum;
  preco: number;
  quantidade: number;
  ano: number;
  mes: number;
  cor: ColorEnum;
  fabricante: string;
}
