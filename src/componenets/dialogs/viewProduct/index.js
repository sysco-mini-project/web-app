import { Dialog, DialogContent, DialogTitle, Divider } from "@mui/material";
import { useContext } from "react";
import { DialogContext } from "../../../context/dialogBoxProvider";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

import CloseIcon from "@mui/icons-material/Close";

const ViewProductDialog = ({ item }) => {
  const { open, setOpen } = useContext(DialogContext);

  return (
    <Dialog fullWidth={false} maxWidth={"xl"} open={open} onClose={() => {}}>
      <DialogTitle sx={{ fontSize: "28px", mb: 2, mt: 2 }}>
        <IconButton
          aria-label="close"
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
          onClick={() => {
            setOpen(false);
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <Card sx={{ width: 500 }}>
          <CardHeader
            avatar={
              <Avatar
                sx={{ bgcolor: red[500] }}
                aria-label="recipe"
                src={item?.producerImage}
              >
                R
              </Avatar>
            }
            title={item?.producer}
            subheader={`Rs : ${item?.price} /=`}
          />
          <CardMedia
            component="img"
            height="250"
            image={item?.image}
            alt="Paella dish"
          />

          <CardContent>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ padding: "0px  5px" }}
            >
              {item?.name}
            </Typography>
            <Divider></Divider>

            <div sx={{ width: "100%", padding: "0px 5px" }}>
              <Typography variant="body2" color="text.secondary">
                Manufacturd By:
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {item?.producer},
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {item?.address}
              </Typography>
            </div>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export { ViewProductDialog };
