import React from 'react';
import { IconProps } from './iconTypes';

export const DashboardIcon = ({ color, ...props }: IconProps): JSX.Element => (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" {...props}>
        <path
            id="Vector"
            d="M12.2222 1H3C1.89543 1 1 1.89543 1 3V12.2222C1 13.3268 1.89543 14.2222 3 14.2222H12.2222C13.3268 14.2222 14.2222 13.3268 14.2222 12.2222V3C14.2222 1.89543 13.3268 1 12.2222 1Z"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            id="Vector_2"
            d="M33.0001 1H23.7778C22.6733 1 21.7778 1.89543 21.7778 3V12.2222C21.7778 13.3268 22.6733 14.2222 23.7778 14.2222H33.0001C34.1046 14.2222 35.0001 13.3268 35.0001 12.2222V3C35.0001 1.89543 34.1046 1 33.0001 1Z"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            id="Vector_3"
            d="M33.0001 21.7778H23.7778C22.6733 21.7778 21.7778 22.6733 21.7778 23.7778V33.0001C21.7778 34.1046 22.6733 35.0001 23.7778 35.0001H33.0001C34.1046 35.0001 35.0001 34.1046 35.0001 33.0001V23.7778C35.0001 22.6733 34.1046 21.7778 33.0001 21.7778Z"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            id="Vector_4"
            d="M12.2222 21.7778H3C1.89543 21.7778 1 22.6733 1 23.7778V33.0001C1 34.1046 1.89543 35.0001 3 35.0001H12.2222C13.3268 35.0001 14.2222 34.1046 14.2222 33.0001V23.7778C14.2222 22.6733 13.3268 21.7778 12.2222 21.7778Z"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
);
