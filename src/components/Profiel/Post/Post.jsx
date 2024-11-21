import style from './Post.module.css'
import img from '../../../img/dino-one.png'
function Post ({postText}){
    return(


      <div className={style.post}>
        <div>
        <img src={img} alt="" className={style.img}/>
        <h3>
          Валерий
        </h3>
        </div>
        <p>
        {postText}
        </p>
      </div>
    )
}









export default Post