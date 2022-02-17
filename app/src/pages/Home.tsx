import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material'
import { SendTweet } from '../components/tweets/SendTweet'
import { useTweets } from '../hooks/useTweets'

export function Home() {
  const { tweets } = useTweets()

  console.log(tweets)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="h1">
            Home
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 6 }}>
        <SendTweet />
      </Container>
    </Box>
  )
}
