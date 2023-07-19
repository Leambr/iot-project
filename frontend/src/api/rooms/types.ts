import { UnauthorizedResponse } from '../../utils/types';

export type Room = {
    id: number;
    name: string;
};

export type FetchAllRoomsSuccess = {
    success: true;
    response: Room[];
};

export type RoomsAPIResponse = UnauthorizedResponse | FetchAllRoomsSuccess;
