export type LoginAPIResponse = AuthentificationFailedError | LoginSuccess;

export type AuthentificationFailedError = {
    success: false;
    error: 'AUTHENTIFICATION_FAILED';
};

export interface LoginSuccess {
    success: true;
    response: {
        token: string | undefined;
        id: number;
    };
}

export type AuthentificationFailed = { success: false; error: 'AUTHENTIFICATION_FAILED' };
