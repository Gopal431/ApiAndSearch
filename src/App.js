
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
function App() {
  const [post , setPost]=useState(null)
  const [inpuData , setInputData]=useState('')
  const url ='https://jsonplaceholder.typicode.com/posts'
  useEffect(()=>{
    axios.get(url).then((res)=>{
      setPost(res.data)
    })
  },[])
  console.log(post)
  const updatae = (e) =>
  {
    setInputData(e.target.value)
  }
  console.log(inpuData)
  return (
    <div className=" bg-black w-full h-screencflxed">
        <h className="text-white font-semibold flex justify-center">{inpuData}</h>
      <div className='flex justify-center'>
        <input type='text' value={inpuData} onChange={(e)=>updatae(e)}  className='bg-yellow-300 w-48 h-8 my-5 mx-2 text-center border-white border-2 text-white' placeholder='search...'/>
        <button className='bg-indigo-700 w-20 h-8 text-white font-semibold rounded-sm my-5 hover:shadow-xl shadow-red-600'>Click me</button>
    
      </div>
      {
  post.map((item ,i )=><h className='text-white text-left flex justify-center   flex-col px-5'><span className='text-teal-400 flex flex-col text-xl'>Title:-{i +1}</span>{item.title}<span className='text-red-500 text-xl'>Body:-{i+1} </span>{item.body} </h>)
}
{/* {
  post.filter((name)=>name.includes(inpuData))
} */}
 
    </div>
  );
}

export default App;
