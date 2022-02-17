import { Box, Container, Paper } from '@mui/material'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Sidebar } from './components/ui/Sidebar'
import { useWorkspace } from './hooks/useWorkspace'
import { Home } from './pages/Home'
import { Login } from './pages/Login'

function App() {
  const { wallet } = useWorkspace()
  return (
    <Paper elevation={0} sx={{ height: '100vh' }}>
      <Box sx={{ display: 'flex', height: 1, width: 1 }}>
        <Sidebar />
        <Routes>
          <Route
            path="/"
            element={wallet ? <Home /> : <Navigate to="/login" />}
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Box>
    </Paper>
  )
}

export default App
