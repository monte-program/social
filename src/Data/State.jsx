import Cat from '../img/cat.jpeg';
import Apple from '../img/apple.jpeg';
import Dad from '../img/dad.jpeg';
import Sky from '../img/sky.jpeg';
import Lake from '../img/lake.jpeg';



let state = {
     friend : [{name:'Иван', img: Apple ,id:0}
        ,{name:'Леша', img: Cat ,id:1}
        ,{name:'Игнат', img: Sky ,id:2}
        ,{name:'Хабан', img: Dad ,id:3}
        ,{name:'Буржуй', img: Lake ,id:4}
      
      ],
     heart : [{heart: '1', text:'Всем привет' , id:0}
        ,{heart: '2', text:'Привет', id:1}
        ,{heart: '3', text:'Hello', id:2}
        ,{heart: '4', text:'hi', id:3}
      ],
       dialogNames : [{name: 'Иван', id:0}
        ,{name: 'Петрович', id:1}
        ,{name: 'Петя', id:2}
        ,{name: 'Светлана', id:3}
      ],
       messagesItemps : [{message: 'Hello' , id:0}
            ,{message: 'Hello World' , id:1}
            ,{message: 'Привет мир' , id:2}
            ,{message: 'Как дела?' , id:3}
      ]
      
}

export let addPost = (postText) => {
  let newPost = {
    heart: '',
    text: postText,
    id: '',
    
  }
  state.heart.push(newPost)
  console.log(state.heart);
  
}

  

export default state



