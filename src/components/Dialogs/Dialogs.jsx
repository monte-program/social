import style from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import Message from './Message/Message';


function Dialogs(){
    return(
        <div className={style.dialogs}>

            <div className={style.contact}>

            <NavLink to="/1" className={style.cont}> Билл Гейтс </NavLink>
            <NavLink to="/2" className={`${style.cont} +" " +${style.front}` }> Илон Маск </NavLink>
            <NavLink to="/3" className={style.cont}> Иван Иванович </NavLink>

            </div>


            <div className={style.chat}>

            <div className={style.chatic}>
                        <Message text={"Что нового?"} />
                        <Message text={"Как жизнь?"} />
                        <Message text={"Кнопка не надоела?"} />
            </div>

            <div className={style.input}>
            <textarea  id="" placeholder='Текст' className={style.inp}>

            </textarea>
            <button className={style.but}>
                Отправить
            </button>
            </div>



            </div>

        </div>

    )
}


















export default Dialogs