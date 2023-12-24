import { AccountCredential } from "./account.credential"

export interface AuthResponse{
    authToken: string
    user : AccountCredential
}