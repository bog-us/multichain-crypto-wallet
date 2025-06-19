import type { NextApiRequest, NextApiResponse } from 'next';
import { createWallet } from '../../lib/wallet';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { network } = req.query;
  if (typeof network !== 'string') {
    return res.status(400).json({ error: 'Network required' });
  }
  const wallet = createWallet(network);
  res.status(200).json(wallet);
}
