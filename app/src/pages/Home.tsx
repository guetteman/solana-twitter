import {
  AppBar,
  Box,
  Container,
  Divider,
  List,
  ListItem,
  Toolbar,
  Typography,
} from '@mui/material'
import { SendTweet } from '../components/tweets/SendTweet'
import { useTweets } from '../hooks/useTweets'

export function Home() {
  const { tweets } = useTweets()

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
        <Divider />
        <List>
          {tweets.map((tweet) => (
            <ListItem key={tweet.publicKey.toString()}>
              {tweet.account.content}
            </ListItem>
          ))}
        </List>
      </Container>
    </Box>
  )
}
