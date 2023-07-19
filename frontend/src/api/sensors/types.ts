import { UnauthorizedResponse } from '../../utils/types';

export type Sensor = {
    id: number;
    type: string;
    room_id: number;
};

export type FetchAllSensorsSuccess = {
    success: true;
    response: Sensor[];
};

export type SensorsAPIResponse = UnauthorizedResponse | FetchAllSensorsSuccess;
