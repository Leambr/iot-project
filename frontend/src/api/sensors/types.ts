import { UnauthorizedResponse } from '../../utils/types';

export type Sensor = {
    id: number;
    type: string;
    // sensorDataArray: [];
    room_id: string;
};

export type FetchAllSensorsSuccess = {
    success: true;
    response: Sensor[];
};

export type SensorsAPIResponse = UnauthorizedResponse | FetchAllSensorsSuccess;
