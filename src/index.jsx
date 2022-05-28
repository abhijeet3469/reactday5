import React from 'react'; // Here it means, Function React is exported by default.
import ReactDOM from 'react-dom/client';
import './index.css'; // External CSS
import Appbar from './components/Appbar';    // component from outside
import Bar from './components/Bar';
import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
// Rules🔥: const✅, let✅, var❌ || for loops❌: for each, for in, for of, for range
// map✅, filter✅


const Time=()=>{                       // component from inside 
    const time = new Date().toLocaleTimeString()
    return <h1 className='time'>Time: {time}</h1>
}

const value = true;

const arr1  = ['abhijeet', 'amit', 'vicky']

root.render(<>
{value ? <Appbar/> : <Bar name='abhijeet'/>}     
<h1>Our First React Time App❤️</h1>
<Time/>
<Bar name='abhijeet'/>
{arr1[2]}          
<ul>
    <li>{arr1[1]}</li>
    <li>{arr1[2]}</li>
    <li>{arr1[0]}</li>
</ul>
<ul>
{arr1.map((val)=>{
    return <li><h1>{val}</h1></li>                   // conditional rendering
})}
</ul>
</>)