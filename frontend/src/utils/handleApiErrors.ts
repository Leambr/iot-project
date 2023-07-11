import { UnauthorizedResponse } from './types';

type NextFn<U> = (arg: Response) => Promise<U>;

export function handleApiErrors<T>(
    response: Response,
    nextFunction: NextFn<T>
): Promise<T> | UnauthorizedResponse {
    if (response.status === 401) {
        return { success: false, error: 'UNAUTHORIZED' };
    }
    if (!response.ok) {
        throw Error(
            `Upstream HTTP Error : ${response.url} ${response.status} ${response.statusText}`
        );
    }
    return nextFunction(response);
}
