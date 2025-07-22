import { FormControl } from '@angular/forms';

export interface LogInForm {
  email: FormControl<null | string>;
  password: FormControl<null | string>;
}

export interface AuthCredentials {
  email: string;
  password: string;
}

export interface ResutlLogin {
  success: boolean;
  message: string;
}


export interface User {
  statusCode: number,
  success: boolean,
  currentPage: number,
  users: UsersData[],
  next?: string

}
export interface UsersData {
  uid: string,
  email: string,
  emailVerified: false,
  displayName: string,
  photoURL: string,
  phoneNumber: string,
  disabled: boolean,
  metadata: UserMetadata
  passwordHash?: string;
  passwordSalt?: string;
  customClaims?: CustomClaims;
  tokensValidAfterTime: string;
  providerData: ProviderInfo[];
}
export interface UserMetadata {
  lastSignInTime: string;
  creationTime: string;
  lastRefreshTime?: string;
}
export interface CustomClaims {
  role: string;
  username: string;
}
export interface ProviderInfo {
  uid: string;
  email?: string;
  displayName?: string;
  photoURL?: string;
  providerId: string;
  phoneNumber?: string;
}