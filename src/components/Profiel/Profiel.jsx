import style from './Profiel.module.css';
import Post from './Post/Post.jsx';
import img from '../../img/dino-one.png';

let heartIcon = [{heart: '1', text:'Всем привет' , id:0}
  ,{heart: '2', text:'Привет', id:1}
  ,{heart: '3', text:'Hello', id:2}
  ,{heart: '4', text:'hi', id:3}
]



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
      

      {heartIcon.map(icon => <Post postText={icon.text} namber={icon.heart} id={icon.id}></Post>)}   



     </div>
    );
  }









export default Profiel










