import style from './Dialogs.module.css';
import Message from './Message/Message';
import DialogsNavlink from './DialogsNavlink/DialogsNavlink.jsx';
let dialogNames = [{name: 'Иван', id:0}
    ,{name: 'Петрович', id:1}
    ,{name: 'Петя', id:2}
]



let messagesItemps = [{message: 'Hello' , id:0}
        ,{message: 'Hello World' , id:1}
        ,{message: 'Привет мир' , id:2}
]





function Dialogs(){
    return(
        <div className={style.dialogs}>

            <div className={style.contact}>

            <DialogsNavlink text={dialogNames[0].name} id={dialogNames[0].id}></DialogsNavlink>
            <DialogsNavlink text={dialogNames[1].name} id={dialogNames[1].id}></DialogsNavlink>
            <DialogsNavlink text={dialogNames[2].name} id={dialogNames[2].id}></DialogsNavlink>

            </div>


            <div className={style.chat}>

            <div className={style.chatic}>
                        <Message text={messagesItemps[0].message} id={messagesItemps[0].id} />
                        <Message text={messagesItemps[1].message} id={messagesItemps[1].id} />
                        <Message text={messagesItemps[2].message} id={messagesItemps[2].id} />
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