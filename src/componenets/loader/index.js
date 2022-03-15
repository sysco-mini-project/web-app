import { CircularProgress } from "@mui/material";
import { LayoutView } from "./styles";

const Loader = () => {
  return (
    <LayoutView>
      <CircularProgress/>
    </LayoutView>
  );
};

export { Loader };
