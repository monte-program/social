import style from './PostFriends.module.css';







function PostFriends ({name, img}){
        return(
            <div className={style.psImg}>
                <img src={img}  className={style.img}/>
                <h3 className={style.h3}>{name}</h3>
            </div>
        )
}




export default PostFriends