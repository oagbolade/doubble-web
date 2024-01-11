export interface IUser {
    bvn: string;
    dob: string;
    emailAddress: string;
    firstName: string;
    gender: string;
    isEmailAddressConfirmed: boolean
    isMobileNumberConfirmed: boolean
    isPINConfirmed: boolean
    isSecurityQuestionConfirmed: boolean
    isUserMigrated: boolean
    lastLogin: any
    lastName: string;
    mobileNumber: string;
    refCode: string;
    userId: string;
    username: string;
}

export type AuthAction = {
    type: string;
    payload?: any;
}