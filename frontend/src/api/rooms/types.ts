import { UnauthorizedResponse } from '../../utils/types';

export type Room = {
    room_name: string;
    id: string;
    name: string;
};

export type FetchAllRoomsSuccess = {
    success: true;
    response: Room[];
};

export type RoomsAPIResponse = UnauthorizedResponse | FetchAllRoomsSuccess;
