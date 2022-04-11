import Button from "@mui/material/Button";
const OutLinedButton = ({
  name,
  size,
  color = "black",
  backgroundColor = "white",
  fontWeight = 900,
  disableElevation = true,
  clickCb,
  disabled = false,
}) => {
  return (
    <Button
      variant="contained"
      size={size}
      sx={{ color, backgroundColor, fontWeight }}
      disableElevation={disableElevation}
      onClick={clickCb}
      disabled={disabled}
    >
      {name}
    </Button>
  );
};

export { OutLinedButton };
