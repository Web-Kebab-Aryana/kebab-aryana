export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
    position: string;
    is_verified: boolean;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
    recaptcha_site_key: string;
};
