import { Box, Typography } from '@mui/material'
import { WalletMultiButton } from '@solana/wallet-adapter-material-ui'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useWorkspace } from '../hooks/useWorkspace'

export function Login() {
  const { wallet } = useWorkspace()
  const navigate = useNavigate()

  useEffect(() => {
    if (wallet) {
      navigate('/')
    }
  }, [wallet])

  return (
    <Box
      sx={{
        height: 1,
        width: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h5">Please, login to see the content</Typography>
      <WalletMultiButton sx={{ width: 200 }} />
    </Box>
  )
}
