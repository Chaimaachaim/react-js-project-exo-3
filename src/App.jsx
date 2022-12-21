 import React from 'react';
import { useSelector } from 'react-redux/es/exports';


 import './App.css'

const App=()=> {
  const name = useSelector((state)=>state.user.name );
  const age=useSelector ((state)=>state.user.age);
 return (
  <div className='App'>
<p>{name}</p>
<p>{age}</p>
</div>
)
}

export default App
