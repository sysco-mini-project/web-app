import { Input } from "@mui/material";
import IconButton from "@mui/material/IconButton";

const IcnButton = ({ icon: Icon, label, id = "icon-button", cb }) => {
  return (
    <label htmlFor={id}>
      <Input aid={id} type="file" style={{ display: "none" }}  />
      <IconButton color="primary" aria-label={label} component="span" onClick={cb}> 
        <Icon />
      </IconButton>
    </label>
  );
};

export { IcnButton };
