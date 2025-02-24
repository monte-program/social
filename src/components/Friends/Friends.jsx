import style from './Friends.module.css'
import PostFriends from '../PostFriends/PostFriends';  



function Friends({friend}){
    return(
        <div className={style.friend}>

    {friend.map(icon => <PostFriends img={icon.img} name={icon.name}></PostFriends>)}  


        </div>
    )
}
















export default Friends

