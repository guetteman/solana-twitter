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
import { Fragment } from 'react'
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
          {tweets.map((tweet, index) => (
            <Fragment key={tweet.id}>
              <ListItem
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'start',
                }}
              >
                <Box sx={{ width: 1 }}>
                  <Typography component="span" sx={{ fontWeight: 'bold' }}>
                    {tweet.author}
                  </Typography>
                  <Typography component="span"> - </Typography>
                  <Typography color="dimgrey" component="span">
                    {tweet.timestamp.fromNow()}
                  </Typography>
                </Box>
                <Typography variant="body1">{tweet.content}</Typography>
                <Typography color="secondary" variant="body2" sx={{ mt: 2 }}>
                  #{tweet.topic}
                </Typography>
              </ListItem>
              {index < tweets.length - 1 && <Divider />}
            </Fragment>
          ))}
        </List>
      </Container>
    </Box>
  )
}
