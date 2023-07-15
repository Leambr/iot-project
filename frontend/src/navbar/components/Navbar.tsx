import { Calendar } from '../../common/Icons/Calendar';
import { DashboardIcon } from '../../common/Icons/DashboardIcon';
import { Logo } from '../../common/Icons/Logo';
import { Logout } from '../../common/Icons/Logout';
import { PieChart } from '../../common/Icons/PieChart';
import s from './Navbar.module.css';

export const Navbar = () => {
    return (
        <div className={s.navbarWrapper}>
            <div className={s.navbarFirstContainer}>
                <div>
                    <Logo />
                </div>
                <div>
                    <DashboardIcon />
                    <Calendar />
                    <PieChart />
                </div>
            </div>
            <div className={s.navbarSecondContainer}>
                <Logout />
            </div>
        </div>
    );
};
