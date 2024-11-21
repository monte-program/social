import style from './Profiel.module.css';
import Post from './Post/Post.jsx';
import img from '../../img/dino-one.png';





  function Profiel(){
    return(
     <div className={style.profiel}>
      <h2>Мои посты</h2>
      <div className={style.header}>
        <img src={img} alt="" className={style.img}/>
        <h3>Валерий</h3>
      </div>
      <div>
        <input type="text" />
        <button>Опубликовать</button>
      </div>
      <Post postText={'Привет всем!'}/>
      <Post postText={'Всем привет!'}/>
      <Post postText={'Всем Hello!'}/>
     </div>
    );
  }









export default Profiel










