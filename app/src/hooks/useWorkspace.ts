import { Idl, Program, Provider } from '@project-serum/anchor'
import { Wallet } from '@project-serum/anchor/dist/cjs/provider'
import { useAnchorWallet } from '@solana/wallet-adapter-react'
import { ConfirmOptions, Connection, PublicKey } from '@solana/web3.js'
import { useMemo } from 'react'
import idl from '../../../target/idl/solana_twitter.json'

const opts: ConfirmOptions = {
  preflightCommitment: 'processed',
  commitment: 'processed',
}

const programID = new PublicKey(idl.metadata.address)

export function useWorkspace() {
  const wallet = useAnchorWallet()
  const connection = useMemo(() => new Connection('http://127.0.0.1:8899'), [])

  const provider = useMemo(() => {
    return new Provider(connection, wallet as unknown as Wallet, opts)
  }, [wallet])

  const program = useMemo(() => {
    return new Program(idl as Idl, programID, provider)
  }, [provider])

  return {
    wallet,
    connection,
    provider,
    program,
  }
}
