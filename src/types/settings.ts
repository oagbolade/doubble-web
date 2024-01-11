export interface IForgotPwd {
  old: string;
  new: string;
  confirm: string;
  userId: string;
  username: string;
  emaillAddress: string;
  firstName: string;
}

export interface ITransactionPIN {
  ques: string;
  ans:string;
  new: string;
  confirm: string;
  userId: string;
}
