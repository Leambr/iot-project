import { IconProps } from './iconTypes';

export const Luminosity = ({ color, ...props }: IconProps): JSX.Element => (
    <svg width="38" height="38" viewBox="0 0 38 38" fill="none" {...props}>
        <path
            d="M33.2501 3.16663L31.6667 4.74996"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M4.75 3.16663L6.33333 4.74996"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M33.2501 25.3333L31.6667 23.75"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M4.75 25.3333L6.33333 23.75"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M14.25 28.5H23.75"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M15.8333 33.25H22.1666"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
        <path
            d="M18.9998 4.75C12.6663 4.75 9.42386 7.83796 9.49984 12.6667C9.53687 15.0209 10.2913 16.625 11.8748 18.2083C13.4584 19.7917 14.2501 20.5833 14.2498 23.75H23.7498C23.7501 20.5835 24.5417 19.7917 26.1246 18.2085C27.7078 16.6252 28.4629 15.0209 28.4998 12.6667C28.5758 7.83796 25.3334 4.75 18.9998 4.75Z"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
);
