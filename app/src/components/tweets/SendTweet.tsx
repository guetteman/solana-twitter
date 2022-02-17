import { Box, Button, TextField } from '@mui/material'

export function SendTweet() {
  return (
    <Box sx={{ width: 1 }}>
      <TextField
        sx={{ width: 1 }}
        label="What's happening?"
        multiline
        rows={4}
        variant="filled"
      />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mt: 2,
        }}
      >
        <TextField sx={{ width: 0.3 }} label="Topic" variant="filled" />

        <Box>
          <Button variant="contained">Tweet</Button>
        </Box>
      </Box>
    </Box>
  )
}
