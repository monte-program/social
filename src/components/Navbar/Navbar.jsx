import style from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import PostFriends from '../PostFriends/PostFriends';  



function Navbar({friend}){
    return(
      <div className={style.navbar}>
        <NavLink  to="/profile" className={style.prof}>Профиль</NavLink>
        <NavLink  to="/message" className={style.list}>Сообщения</NavLink>
        <NavLink to="/users" className={style.person}>Пользователи</NavLink >

        {friend.slice(0, 2).map(icon => <PostFriends img={icon.img} name={icon.name}></PostFriends>)}   

     </div>
    );
  }







  export default Navbar


















