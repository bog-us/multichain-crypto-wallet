import type { NextApiRequest, NextApiResponse } from 'next';
import { transfer } from '../../lib/wallet';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }
  const { network, from, to, amount, privateKey } = req.body;
  if (!network || !from || !to || !amount || !privateKey) {
    return res.status(400).json({ error: 'Missing params' });
  }
  try {
    const tx = await transfer(network, from, to, amount, privateKey);
    res.status(200).json(tx);
  } catch (e) {
    res.status(500).json({ error: 'Transfer failed' });
  }
}
