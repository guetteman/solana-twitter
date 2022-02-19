import { BN, Idl, Program, ProgramAccount, web3 } from '@project-serum/anchor'
import { PublicKey } from '@solana/web3.js'
import dayjs, { Dayjs } from 'dayjs'
import { useCallback } from 'react'
import useSWR from 'swr'
import { useWorkspace } from './useWorkspace'

interface TweetAccount {
  account: {
    author: PublicKey
    timestamp: BN
    topic: string
    content: string
  }
  publicKey: PublicKey
}

export interface Tweet {
  id: string
  content: string
  topic: string
  author: string
  timestamp: Dayjs
}

const newTweet = (tweetAccount: TweetAccount): Tweet => {
  const author = tweetAccount.account.author.toString()
  return {
    id: tweetAccount.publicKey.toString(),
    content: tweetAccount.account.content,
    topic: tweetAccount.account.topic,
    author: author.slice(0, 4) + '..' + author.slice(-4),
    timestamp: dayjs.unix(Number(tweetAccount.account.timestamp.toString())),
  }
}

const fetcher = (program: Program<Idl>): Promise<Tweet[]> =>
  (program.account.tweet.all() as unknown as Promise<TweetAccount[]>).then(
    (tweetAccounts) =>
      tweetAccounts.map((tweetAccount) => newTweet(tweetAccount))
  )

export function useTweets() {
  const { wallet, program } = useWorkspace()
  const { data: tweets = [], mutate } = useSWR(program, fetcher)

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

      mutate()
    },
    [program, wallet]
  )

  return {
    tweets,
    sendTweet,
  }
}
