export type LoginAPIResponse = BadCredentialsError | LoginSuccess;

export type BadCredentialsError = {
    success: false;
    error: 'BAD_CREDENTIALS';
};

export interface LoginSuccess {
    success: true;
    response: {
        token: string | undefined;
        id: number;
    };
}

export type BadCredentialResult = { success: false; error: 'BAD_CREDENTIALS' };
