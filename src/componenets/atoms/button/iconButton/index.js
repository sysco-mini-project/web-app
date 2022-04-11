import { Input } from "@mui/material";
import { orange } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";

const IcnButton = ({
  icon: Icon,
  label,
  id = "icon-button",
  cb,
  backgroundColor = "transparent",
  color = "black",
  size = "large",
  disabled = false
}) => {
  return (
    <label htmlFor={id}>
      <Input aid={id} type="file" style={{ display: "none" }} />
      <IconButton
        aria-label={label}
        component="span"
        onClick={cb}
        size={size}
        disabled={disabled}
        sx={{ backgroundColor, color }}
      >
        <Icon />
      </IconButton>
    </label>
  );
};

export { IcnButton };
