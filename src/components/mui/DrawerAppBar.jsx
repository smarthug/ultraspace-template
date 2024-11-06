import * as React from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Menu,
  MenuItem,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
// import { useMegicStore } from "../../utils/useMegicStore";
import { useMegicStore } from "../../utils/useMegicStore";


const drawerWidth = 240;
// const navItems = ['Home', 'About', 'Contact'];

function DrawerAppBar(props) {
  // const megicPoints = useMegicStore((state) => state.megicPoints);

  // const megicPoints = useBalance();
  // console.log("megicPoints", megicPoints);

  // React.useEffect(() => {
  //   console.log("megicPoints", megicPoints);
  // }, [megicPoints]);

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  function handleListItemClick(event, index) {
    console.log(event.target.key);
    console.log(index);
    console.log("clicked");

    alert("wip");
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        hello@ultraspace.xyz
      </Typography>
      <Divider />
      <List>
        <ListItem onClick={handleListItemClick} key={"discord"} disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={"Discord"} />
          </ListItemButton>
        </ListItem>
        <ListItem onClick={handleListItemClick} key={"telegram"} disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText primary={"Telegram"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    // setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <div>hello</div>
      </MenuItem>

    </Menu>
  );

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0, // 소수점을 원하지 않으면 이 줄을 추가하세요.
    }).format(amount);
  };

  const UserMoneyDisplay = ({ amount }) => {
    return (
      <Typography variant="h5" component="span" sx={{ flexGrow: 1 }}>
        {formatCurrency(amount)}
      </Typography>
    );
  };

  return (
    <>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ background: (theme) => theme.palette.gradient.main }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            // sx={{ mr: 2, display: { sm: "none" } }}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "block", sm: "block" } }}
          >
            {/* MEGIC */}
          </Typography>
          {/* <Box sx={{ display: { xs: "none", sm: "block" } }}></Box> */}

          {/* <Box sx={{ flexGrow: 1 }} /> */}
          <Box sx={{ flexGrow: 1 }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              //   onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              {/* <AttachMoneyIcon /> */}
              {/* <Typography variant="h5" component="span" sx={{ flexGrow: 1 }}>
                {`${megicPoints}`}
              </Typography> */}
              {/* <Typography variant="h5" component="span" sx={{ flexGrow: 1 }}>
                {megicPoints}
              </Typography> */}
              {/* <UserMoneyDisplay amount={megicPoints} /> */}

              <WalletBalance />
            </IconButton>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "flex" } }}>
            {/* <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
}

export default DrawerAppBar;

{
  /* <Box component="main" sx={{ p: 0 }}>
        <Toolbar
         style={{
            backgroundColor: 'blue',
        }}
        />
          <div 
            style={{
                backgroundColor: 'red',
            }}
          >
            hello
          </div>
      </Box> */
}
