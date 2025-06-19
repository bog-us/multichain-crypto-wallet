import type { NextApiRequest, NextApiResponse } from 'next';
import { getBalance } from '../../lib/wallet';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { network, address } = req.query;
  if (typeof network !== 'string' || typeof address !== 'string') {
    return res.status(400).json({ error: 'Invalid query' });
  }
  try {
    const data = await getBalance(network, address);
    res.status(200).json({ balance: data.balance });
  } catch (e) {
    res.status(500).json({ error: 'Failed to fetch balance' });
  }
}
