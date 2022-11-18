import { PropsWithChildren } from "react";
import { Button } from "../../components/Button";
import { FilterBy } from "./types";

interface Props {
  setAction: React.Dispatch<React.SetStateAction<FilterBy>>;
}
export const Actions = ({ setAction }:PropsWithChildren<Props>) => {
  return (
    <>
      <Button onClick={() => setAction(FilterBy.All)}>Todas</Button>
      <Button onClick={() => setAction(FilterBy.Done)}>Completadas</Button>
      <Button onClick={() => setAction(FilterBy.Pending)}>Pendientes</Button>
    </>
  );
};
