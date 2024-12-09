import style from './Navbar.module.css';
import {NavLink} from 'react-router-dom';




function Navbar(){
    return(
      <div className={style.navbar}>
        <NavLink  to="/profile" className={style.prof}>Профиль</NavLink>
        <NavLink  to="/message" className={style.list}>Сообщения</NavLink>
        <NavLink to="/users" className={style.person}>Пользователи</NavLink >
     </div>
    );
  }







  export default Navbar


















