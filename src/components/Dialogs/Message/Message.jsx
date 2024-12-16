import style from './Message.module.css';




function Message({text, id}){
    return(
        <div className={style.message}>
                <p className={style.p}> 
                {text}
                </p>
         </div>
    )
}






export default Message





















