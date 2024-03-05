export interface ResetPasswordRequest {
    email: string;
  }
  
  export interface ResetPasswordConfirmation {
    code: string;
    email: string;
    newPassword: string;
  }