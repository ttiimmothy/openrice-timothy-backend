export declare class RegisterResponse {
    message?: string;
    token?: string;
}
export declare class LoginResponse {
    user?: {
        user_id: string;
        email: string;
        username: string;
        role: string;
    };
    message?: string;
    token?: string;
}
