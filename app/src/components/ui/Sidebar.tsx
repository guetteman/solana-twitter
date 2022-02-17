import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material'
import { Home as HomeIcon } from '@mui/icons-material'
import { WalletMultiButton } from '@solana/wallet-adapter-material-ui'
import { useNavigate } from 'react-router-dom'
import { useWorkspace } from '../../hooks/useWorkspace'

const drawerWidth = 240

export function Sidebar() {
  const navigate = useNavigate()
  const { wallet } = useWorkspace()

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
        <ListItem disabled={!wallet} onClick={() => navigate('/')}>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem
          sx={{
            py: 6,
          }}
        >
          {wallet && <WalletMultiButton sx={{ width: 1 }} />}
        </ListItem>
      </List>
    </Drawer>
  )
}
