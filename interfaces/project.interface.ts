import { ColorEnum } from "@/enums/color.enum";

export interface IProject {
  id: number;
  nome: string;
  departamento: string;
  orcamento: number;
  duracao_meses: number;
  ano_inicio: number;
  mes_inicio: number;
  cor: ColorEnum;
  fabricante: string;
}
