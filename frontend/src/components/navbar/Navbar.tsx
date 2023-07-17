import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar } from '../../common/Icons/Calendar';
import { DashboardIcon } from '../../common/Icons/DashboardIcon';
import { Logo } from '../../common/Icons/Logo';
import { Logout } from '../../common/Icons/Logout';
import { PieChart } from '../../common/Icons/PieChart';
import { IconWrapper } from '../iconWrapper/IconWrapper';

import s from './Navbar.module.css';

type Navigation = {
    iconName: string;
    path: string;
};

export const Navbar = () => {
    const [activeIcon, setActiveIcon] = useState('');
    const navigate = useNavigate();

    const handleNavigation = ({ iconName, path }: Navigation) => {
        setActiveIcon(iconName);
        navigate(path);
    };
    console.log(activeIcon);
    return (
        <>
            <div className={s.navbarWrapper}>
                <div className={s.navbarFirstContainer}>
                    <div>
                        <IconWrapper>
                            <Logo />
                        </IconWrapper>
                    </div>
                    <div className={s.menuIcons}>
                        <div
                            className={s.dashboardIcon}
                            onClick={() => handleNavigation({ iconName: 'dashboard', path: '/' })}
                        >
                            <IconWrapper>
                                <DashboardIcon
                                    color={activeIcon === 'dashboard' ? '#fed703' : '#3B444B'}
                                />
                            </IconWrapper>
                        </div>
                        <div
                            className={s.calendar}
                            onClick={() =>
                                handleNavigation({ iconName: 'calendar', path: '/calendar' })
                            }
                        >
                            <IconWrapper>
                                <Calendar
                                    color={activeIcon === 'calendar' ? '#fed703' : '#3B444B'}
                                />
                            </IconWrapper>
                        </div>

                        <div
                            className={s.pieChart}
                            onClick={() =>
                                handleNavigation({ iconName: 'pieChard', path: '/pieChart' })
                            }
                        >
                            <IconWrapper>
                                <PieChart
                                    color={activeIcon === 'pieChart' ? '#fed703' : '#3B444B'}
                                />
                            </IconWrapper>
                        </div>
                    </div>
                </div>
                <div className={s.navbarSecondContainer}>
                    <IconWrapper>
                        <Logout color="#be133c" />
                    </IconWrapper>
                </div>
            </div>
        </>
    );
};
