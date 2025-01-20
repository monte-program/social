import style from './Post.module.css'
import img from '../../../img/dino-one.png'
import heart from '../../../img/heart_16x9.png';











function Post ({postText, namber, }){
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
         <img src={heart} alt="" className={style.heart}/>
         <span>  {namber}  </span>
      </div>
    )
}









export default Post