import * as multichain from 'multichain-crypto-wallet';

export function createWallet(network: string) {
  return multichain.createWallet({ network });
}

export async function getBalance(network: string, address: string) {
  return multichain.getBalance({ network, address, tokenSymbol: 'eRON' });
}

export async function transfer(network: string, from: string, to: string, amount: string, privateKey: string) {
  return multichain.transfer({ network, from, to, amount, privateKey, tokenSymbol: 'eRON' });
}
