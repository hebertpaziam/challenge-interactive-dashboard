import { BankingOperationCategoryEnum } from "@/enums/banking-operation-category.enum";
import { BankingOperationTypeEnum } from "@/enums/banking-operation-type.enum";
import { ColorEnum } from "@/enums/color.enum";

export interface IBankingOperation {
  id: number;
  data: Date;
  conta_id: number;
  valor: number;
  tipo: BankingOperationTypeEnum;
  mes: number;
  ano: number;
  categoria: BankingOperationCategoryEnum;
  cor: ColorEnum;
  fabricante: string;
}
