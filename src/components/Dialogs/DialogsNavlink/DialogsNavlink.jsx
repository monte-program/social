import style from './DialogsNavlink.module.css';
import { NavLink } from 'react-router-dom';







function DialogsNavlink ({text, id}) {
    return(
        <NavLink to={`/${id}`} className={style.cont}> {text} </NavLink>
    )
}




















export default DialogsNavlink






