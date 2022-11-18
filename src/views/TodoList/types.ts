export enum FilterBy {
  Done = "Completado",
  All = "Todo",
  Pending = "Pendiente",
}
export interface ITodo {
  text: string;
  done: boolean;
}
