import { jwtDecode } from "jwt-decode";

export interface User {
    id: number
    email: string
    roles: Array<string>
    stakeholder: {
        id: number
    }
}

export interface DecodedToken {
    user: User
    exp: number
    iat: number
}

interface AuthProviderInterface {
    isAuthenticated: boolean;
    user: User | null;
    signin(t: string): void;
    signout(): void;
}

export const AuthProvider: AuthProviderInterface = {
    isAuthenticated: false,
    user: null,
    signin(token: string) {
        try {
            localStorage.setItem('scToken', token);
            let decodedToken = jwtDecode(token) as DecodedToken;

            if(Date.now() >= decodedToken.exp * 1000) return this.signout();
            
            this.user = decodedToken.user
            this.isAuthenticated = true;
        } catch (error) {
            console.log(error);
            return this.signout();
        }
    },
    signout() {
        localStorage.removeItem('ogaToken');
        this.user = null;
        this.isAuthenticated = false;
    },
};