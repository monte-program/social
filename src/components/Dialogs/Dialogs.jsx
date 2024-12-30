import style from './Dialogs.module.css';
import Message from './Message/Message';
import DialogsNavlink from './DialogsNavlink/DialogsNavlink.jsx';
let dialogNames = [{name: 'Иван', id:0}
    ,{name: 'Петрович', id:1}
    ,{name: 'Петя', id:2}
    ,{name: 'Светлана', id:3}
]



let messagesItemps = [{message: 'Hello' , id:0}
        ,{message: 'Hello World' , id:1}
        ,{message: 'Привет мир' , id:2}
        ,{message: 'Как дела?' , id:3}
]






function Dialogs(){
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