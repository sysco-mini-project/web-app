import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { IcnButton } from "../../atoms/button/iconButton";
import { AddShoppingCart } from "@mui/icons-material";
import { TextField } from "@mui/material";
import { ServiceLocator } from "../../../context/serviceProvider";

export default function CreateCartDialog() {
  const [open, setOpen] = React.useState(false);
  const [text, setText] = React.useState("");

  const { cartService } = React.useContext(ServiceLocator);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {

    cartService.createCart({
        "name" : text
    }).then(()=> {
        console.log('Cart created successfully')
        setOpen(false);
    }).catch((e)=>{
        console.log('error in creating cart')
        console.log(e)
        setOpen(false);
    })
    
  };

  const _handleTextFieldChange = (e) => {
    console.log(e.target.value);
    setText(e.target.value);
  };
  return (
    <div>
      <IcnButton
        icon={AddShoppingCart}
        backgroundColor="orange"
        label="create cart"
        color="white"
        size="small"
        cb={handleClickOpen}
      />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create Cart</DialogTitle>
        <DialogContent>
          <DialogContentText>Add a name for the Cart</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Cart Name"
            fullWidth
            variant="standard"
            value={text}
            onChange={_handleTextFieldChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
