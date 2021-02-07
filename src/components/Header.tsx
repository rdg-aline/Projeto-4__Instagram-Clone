import logo from '../images/logo-instagram.png';
import { FiUser } from "react-icons/fi";
import { useSelector } from 'react-redux'
import { InterfaceUserState } from '../store/ducks/Usuario/types';

function Header() {


const { name } = useSelector((state: InterfaceUserState) => state.user)

    return (
        <div className="header">
            <header>
                <img src={logo} alt="Logo Instagram" />
                <div className="top-info">
                    <span>
                        <FiUser />
                        {name}
                    </span>
                </div>
            </header>
        </div>
    )
}
export default Header