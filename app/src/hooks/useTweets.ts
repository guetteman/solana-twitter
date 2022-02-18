import { web3 } from '@project-serum/anchor'
import { useCallback, useEffect, useState } from 'react'
import { useWorkspace } from './useWorkspace'

export function useTweets() {
  const { wallet, program } = useWorkspace()
  const [tweets, setTweets] = useState<any>([])

  useEffect(() => {
    ;(async () => {
      const data = await program.account.tweet.all()
      setTweets(data)
    })()
  }, [program])

  const sendTweet = useCallback(
    async (topic: string, content: string) => {
      if (!wallet) {
        throw new Error('There is no wallet')
      }

      const tweetKey = web3.Keypair.generate()

      await program.rpc.sendTweet(topic, content, {
        accounts: {
          author: wallet?.publicKey,
          tweet: tweetKey.publicKey,
          systemProgram: web3.SystemProgram.programId,
        },
        signers: [tweetKey],
      })

      const data = await program.account.tweet.all()
      setTweets(data)
    },
    [program, wallet, setTweets]
  )

  return {
    tweets,
    sendTweet,
  }
}
