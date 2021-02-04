import './App.css';
import User from './User';

const styleObj = {
  backgroundColor : 'red'
}

function App(props) {
  return (
    <div>
       <h1 className='name-style' style={styleObj}>
       {props.name}
         </h1>
       {props.age}
       <User age={props.age}/>
       <AppOne props/>
    </div>
  );
}

function AppOne(props) {
  return (
<div>
       <h1 className='name-style' style={styleObj}>
       {props.name}
         </h1>
       {props.age}
       <User age={props.age}/>
    </div>
  )
}

export default App;
