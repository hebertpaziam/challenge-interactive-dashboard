import { ColorEnum } from '@/enums/color.enum';

export interface IEmployee {
  id: number;
  nome: string;
  departamento: string;
  salario: number;
  anos_experiencia: number;
  idade: number;
  mes: number;
  ano: number;
  cor: ColorEnum;
  fabricante: string;
}
