# eRON Multichain Wallet Example

This example demonstrates how to integrate the **multichain-crypto-wallet** library in a Next.js application deployed on Vercel. It provides serverless API routes that generate wallets, retrieve balances and perform transfers on a single chain.

> **Note**: Cross-chain bridging is not implemented in this example. To move eRON between networks you need an external bridge service (e.g. Wormhole, Multichain, LayerZero) or your own smart contracts.

## Setup

```bash
npm install
```

Create a `.env.local` file in the project root with the following variables:

```bash
# RPC endpoints
RPC_URL_ETHEREUM=
RPC_URL_SOLANA=
RPC_URL_TRON=

# Mnemonic or private key for signing transactions
MNEMONIC_ETH=
MNEMONIC_SOL=
MNEMONIC_TRON=

# Bridge service (optional)
BRIDGE_API_URL=
BRIDGE_API_KEY=
```

## Available Scripts

- `npm run dev` – start the Next.js development server.
- `npm run build` – create a production build.

## Deploying on Vercel

1. Push this example to a Git repository.
2. Import the repository in Vercel and set the environment variables above.
3. Deploy. Vercel will run `npm run build` automatically.

## API Routes

The following serverless functions are exposed in `/pages/api`:

- `create-wallet` – generate a wallet using `createWallet` from the library.
- `get-balance` – return the eRON balance on the selected network.
- `transfer` – transfer eRON on the same network.

You can extend these routes to interact with a bridge service for cross-chain transfers.
