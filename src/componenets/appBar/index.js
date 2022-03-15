import { AppBar, Avatar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";

import { AppBarContainer } from "./styles";

const CustomAppBar = () => {
    return (
        <AppBarContainer>
            {/* <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" style={{ background: '#FFFFFF' }}>
                    <Toolbar>
                        <Avatar alt="Remy Sharp" src="https://previews.123rf.com/images/tatianasun/tatianasun1801/tatianasun180100064/93737696-icona-del-carrello-metti-nel-carrello-icona-dello-shopping-online-con-la-freccia-vettore-.jpg" />
                        <Typography style={{ paddingLeft: '10px' }} className="title" variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Sysco
                        </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </Box> */}
        </AppBarContainer>
    );
}

export default CustomAppBar;