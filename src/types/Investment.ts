export interface InvestmentState {
  loading?: boolean;
  error?: string;
  selectedinvestType?: string;
  isFromSettingsPage: boolean;
  tableData: {
    title: string;
    type: string;
    investmentAmount: string;
    intrest: string;
    timeline: { start: number; end: number };
    status: string;
  }[];
  showOverview?: { show: boolean; fromOverview: boolean; details: any };
  createInvestment: { success?: boolean; message?: string };
}

export interface InvestmentDetail {
  title?: string;
  type?: string;
  investmentAmount?: string;
  intrest?: string;
  timeline?: { start: number; end: number };
  status?: string;
}
export interface IInvestData {
  arrangement_ID: string;
  branch: string;
  effectiveDate: string;
  futureValue: string;
  id: number;
  interestEarned: string;
  investmentID: string;
  investmentLetterLink: string;
  investmentValue: string;
  maturityDate: string;
  payInAccount: string;
  payInAmount: string;
  purpose: string;
  rate: string;
  rollOver: number;
  term: number;
  totalContributions: string;
}
[];

export type ITarget = {
  contributionPerFrequency: string;
  currency: string;
  frequency: string;
  months: number;
  totalContribution: string;
  totalInterest: string;
}[];

export interface IFixed {
  currency?: string;
  fixedAmount?: string;
  interest?: string;
  term?: number;
  totalIncome?: string;
}

export interface INewUserInfo {
  userId: string;
  bvn: string;
  emailAddress: string;
  firstName: string;
  lastName?: string;
}
