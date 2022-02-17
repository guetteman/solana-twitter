import { useEffect, useState } from 'react'
import { useWorkspace } from './useWorkspace'

export function useTweets() {
  const { program } = useWorkspace()
  const [tweets, setTweets] = useState<any>([])

  useEffect(() => {
    ;(async () => {
      const data = await program.account.tweet.all()
      setTweets(data)
    })()
  }, [program])

  return {
    tweets,
  }
}
