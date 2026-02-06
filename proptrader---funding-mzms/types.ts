
export enum AppStep {
  HOME = 'HOME',
  RULES = 'RULES',
  BROKER = 'BROKER',
  BILLING = 'BILLING',
  PAYMENT = 'PAYMENT',
  VERIFICATION = 'VERIFICATION',
  REVIEW = 'REVIEW'
}

export enum PlanType {
  CHALLENGE = 'CHALLENGE',
  INSTANT = 'INSTANT'
}

export enum CryptoNetwork {
  TRC20 = 'TRC20',
  BEP20 = 'BEP20'
}

export interface PlanDetails {
  id: PlanType;
  name: string;
  fee: number;
  target: string;
  dailyLoss: string;
  totalLoss: string;
  description: string;
}

export interface BillingData {
  fullName: string;
  email: string;
  country: string;
  address: string;
}

export interface EnrollmentState {
  step: AppStep;
  selectedPlan: PlanType | null;
  selectedBroker: string | null;
  selectedNetwork: CryptoNetwork | null;
  billing: BillingData | null;
  enrollmentId: string | null;
  submissionTime: string | null;
}
