import React from "react";
import "../styles/buttonStyle.css"
class LifeCycle extends React.Component {
    
    constructor(props)
     {
       super(props);
       this.state = {class:"off",label:"Нажми для обновления",s1:0};
       this.press=this.press.bind(this)
       console.log("constructor")
       
      }
      componentWillMount() {
       console.log('Компонент будет монтироваться');    
      }
      componentDidMount() {
       console.log('Компонент завершил монтирование');
            }
      shouldComponentUpdate() {
        console.log('Компонент должен монтироваться');
        return true;
       }
      componentWillUpdate() {
       console.log('Компонент будет обновлятся');
      }
      componentDidUpdate() {
       console.log('Компонент сделал обновление');
      }
      press(){
          var className=(this.state.class==="off")?"on":"off";
          this.setState({class:className});
          fetch('https://jsonplaceholder.typicode.com/todos/1')
          .then(response => response.json())
          .then((data) => console.log(data))
      }
      buttonHandler=()=>{
          let val= this.state.s1
          val++;
          this.setState({s1:val})
      }
      render() {
          console.log("render()")
       return (
        <div>
            <h3>Привет методам жизненного цикла</h3>
             <button onClick={this.press} className={this.state.class}>{this.state.label}</button>
            <div><button onClick={this.buttonHandler}>Push</button>
                {this.state.s1}
             </div>
         
        </div>
       );
      }
     }
     export default LifeCycle;