import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material'
import { Home as HomeIcon } from '@mui/icons-material'
import { WalletMultiButton } from '@solana/wallet-adapter-material-ui'

const drawerWidth = 240

export function Sidebar() {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      <List>
        <ListItem>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <Divider />
        <ListItem
          sx={{
            py: 6,
          }}
        >
          <WalletMultiButton variant="contained" sx={{ width: 1 }} />
        </ListItem>
      </List>
    </Drawer>
  )
}
