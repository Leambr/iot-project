import { PropsWithChildren } from 'react';
import s from './BackgroundWrapper.module.css';



export const BackgroundWrapper = ({ children }: PropsWithChildren) => {
    return <div className={s.backgroundWrapper}>{children}</div>;
};


