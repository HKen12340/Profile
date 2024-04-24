import logo from './logo.svg';
import './App.css';

function Content(props) {
  return (
    <div className="content">      
      <div className="imgContent">
      {
          

         (() => {
          if(props.img != null){
            if(props.img.length <= 1){
              return <div>
                      <img src={props.img} className="imgStyle"></img>
                      <h3>{props.title}</h3>
                    </div>
            }else{
              let imgCont = Object.values(props.img).map(item => {
                return <img src={item} className="imgMul"></img>
              })
              return <div><h3>{props.title}</h3>{imgCont}</div>
            }
          }else{
            return <h3>{props.title}</h3>
          }  
        })()  
   }
      </div>
        <p>{props.txt}</p>
    </div>
  );
}

export default Content;
