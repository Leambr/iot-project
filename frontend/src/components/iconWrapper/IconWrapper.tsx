import { PropsWithChildren } from 'react';
import s from './IconWrapper.module.css';

export const IconWrapper = ({ children }: PropsWithChildren) => {
    return <div className={s.iconWrapper}>{children}</div>;
};
