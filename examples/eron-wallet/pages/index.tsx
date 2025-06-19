import { useState } from 'react';
import type { NextPage } from 'next';
import * as multichain from 'multichain-crypto-wallet';

const Home: NextPage = () => {
  const [network, setNetwork] = useState<'ethereum' | 'solana' | 'tron'>('ethereum');
  const [address, setAddress] = useState('');
  const [balance, setBalance] = useState('');

  const connect = async () => {
    if (network === 'ethereum' && (window as any).ethereum) {
      const [acc] = await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
      setAddress(acc);
    } else if (network === 'solana' && (window as any).phantom?.solana) {
      const resp = await (window as any).phantom.solana.connect();
      setAddress(resp.publicKey.toString());
    } else if (network === 'tron' && (window as any).tronWeb) {
      await (window as any).tronWeb.request({ method: 'tron_requestAccounts' });
      setAddress((window as any).tronWeb.defaultAddress.base58);
    }
  };

  const fetchBalance = async () => {
    const result = await fetch(`/api/get-balance?network=${network}&address=${address}`);
    const data = await result.json();
    setBalance(data.balance);
  };

  return (
    <div>
      <h1>eRON Wallet</h1>
      <select value={network} onChange={(e) => setNetwork(e.target.value as any)}>
        <option value="ethereum">Ethereum</option>
        <option value="solana">Solana</option>
        <option value="tron">Tron</option>
      </select>
      <button onClick={connect}>Connect Wallet</button>
      {address && (
        <div>
          <p>Address: {address}</p>
          <button onClick={fetchBalance}>Get eRON Balance</button>
          {balance && <p>Balance: {balance}</p>}
        </div>
      )}
    </div>
  );
};

export default Home;
