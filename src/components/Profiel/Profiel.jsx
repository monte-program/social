import style from './Profiel.module.css';
import Post from './Post/Post.jsx';
import img from '../../img/dino-one.png';
import React from 'react';
let postText = React.createRef()


  function Profiel({heart, addPost}){
    let addPost1 = ()=>{
      addPost(postText.current.value);
  }   
    return(
     <div className={style.profiel}>
      <h2>Мои посты</h2>
      <div className={style.header}>
        <img src={img} alt="" className={style.img}/>
        <h3>Валерий</h3>
      </div>
      <div>
        <input type="text" ref={postText}/>
        <button onClick={addPost1}>Опубликовать</button>
      </div>
      

      {heart.map(icon => <Post postText={icon.text} namber={icon.heart} id={icon.id}></Post>)}   



     </div>
    );
  }









export default Profiel










