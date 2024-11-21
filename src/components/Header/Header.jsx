import style from './Header.module.css';
import img from '../../img/dino-one.png';
import icon from '../../img/orig.webp';



function Header(){
    return(

      <div className={style.header}>
        <div>
          <img src={icon} alt="" className={style.icon}/>
        <p className={style.p}>program <span className={style.span}>m.city</span></p>
        </div>
        <div className={style.icon}>
          <img src={img} alt="" className={style.img}/>
          <h2>Валерий</h2>
        </div>
     </div>
    );
  }







  export default Header














