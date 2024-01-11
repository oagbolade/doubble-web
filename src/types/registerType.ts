export interface IRegister {
  bvn?: string;
  channel?: string;
  dateOfBirth?: string;
  deviceIP?: string;
  deviceManufacturer?: string;
  deviceModel?: string;
  deviceName?: string;
  deviceType?: string;
  emailAddress?: string;
  firstName?: string;
  gender?: number | string;
  imei?: string;
  lastName?: string;
  mobilePhoneNumber?: string;
  password?: string;
  platform?: number;
  refCode?: string;
  transactionPIN?: string;
  username?: string;
}

export interface ISterling {
  data?: {
    firstName?: string;
    lastName?: string;
    emailAddress?: string;
    phoneNumber?: string;
    bvn?: string;
    isRegistered?: boolean;
  };
  message: string;
  status: boolean;
}
