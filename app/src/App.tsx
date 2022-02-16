import { Box, Container, Paper } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import { Sidebar } from './components/ui/Sidebar'
import { WalletProvider } from './components/wallet/WalletProvider'
import { Home } from './pages/Home'

function App() {
  return (
    <WalletProvider>
      <Paper elevation={0}>
        <Container
          maxWidth="xl"
          sx={{
            height: '100vh',
          }}
        >
          <Box sx={{ display: 'flex', height: 1, width: 1 }}>
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Box>
        </Container>
      </Paper>
    </WalletProvider>
  )
}

export default App
