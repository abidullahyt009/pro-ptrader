
import { PlanType, PlanDetails } from './types';

export const PLANS: Record<PlanType, PlanDetails> = {
  [PlanType.CHALLENGE]: {
    id: PlanType.CHALLENGE,
    name: 'Challenge Plan',
    fee: 25,
    target: '$700',
    dailyLoss: '30%',
    totalLoss: '80%',
    description: 'Perfect for disciplined traders looking to prove their skills.'
  },
  [PlanType.INSTANT]: {
    id: PlanType.INSTANT,
    name: 'Instant Plan',
    fee: 30,
    target: 'N/A',
    dailyLoss: '30%',
    totalLoss: '80%',
    description: 'Immediate access to live funds. No evaluation period required.'
  }
};

export const BROKERS = [
  'Quotex',
  'Pocket Option',
  'Olymp Trade',
  'Binomo',
  'IQ Option'
];

export const WALLET_ADDRESSES = {
  TRC20: 'TLy8Z6mP1eK8RjV3mYn9zX5qW2pL1rS4tM',
  BEP20: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e'
};
