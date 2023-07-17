import { useNavigate } from 'react-router-dom';
import { Calendar } from '../../common/Icons/Calendar';
import { DashboardIcon } from '../../common/Icons/DashboardIcon';
import { Logo } from '../../common/Icons/Logo';
import { Logout } from '../../common/Icons/Logout';
import { PieChart } from '../../common/Icons/PieChart';

import s from './Navbar.module.css';

export const Navbar = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className={s.navbarWrapper}>
                <div className={s.navbarFirstContainer}>
                    <div>
                        <Logo />
                    </div>
                    <div className={s.menuIcons}>
                        <div className={s.dashboardIcon} onClick={() => navigate('/')}>
                            <DashboardIcon color="#3B444B" />
                        </div>
                        <div className={s.calendar} onClick={() => navigate('/calendar')}>
                            <Calendar color="#3B444B" />
                        </div>

                        <div className={s.pieChart} onClick={() => navigate('/pieChart')}>
                            <PieChart color="#3B444B" />
                        </div>
                    </div>
                </div>
                <div className={s.navbarSecondContainer}>
                    <Logout color="#3B444B" />
                </div>
            </div>
        </>
    );
};
