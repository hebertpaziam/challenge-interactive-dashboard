import { ColorEnum } from '@/enums/color.enum';
import { DepartmentCategoryEnum } from '@/enums/department-category.enum';

export interface ISale {
  id: number;
  data: Date;
  cliente: string;
  valor_total: number;
  itens: number;
  mes: number;
  ano: number;
  categoria: DepartmentCategoryEnum;
  cor: ColorEnum;
  fabricante: string;
}
