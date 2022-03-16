import { CircularProgress } from "@mui/material";
import { LayoutView } from "./styles";

const CustomLoader = () => {
  return (
    <LayoutView>
      <CircularProgress/>
    </LayoutView>
  );
};

export { CustomLoader };
