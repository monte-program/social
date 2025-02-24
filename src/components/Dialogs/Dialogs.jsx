import style from './Dialogs.module.css';
import Message from './Message/Message';
import DialogsNavlink from './DialogsNavlink/DialogsNavlink.jsx';





function Dialogs({dialogNames, messagesItemps}){
    return(
        <div className={style.dialogs}>

            <div className={style.contact}>

            {dialogNames.map(dialogName => <DialogsNavlink text={dialogName.name} id={dialogName.id}></DialogsNavlink>)}           


            </div>


            <div className={style.chat}>

            <div className={style.chatic}>


            {messagesItemps.map(messageName => <Message text={messageName.message} id={messageName.id} />)}

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