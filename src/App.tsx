import { useEffect, useState } from 'react'
import Routes from './router'
import Loading from './components/fiture/loading'

const App=()=>{
    let [isLoading,setIsloading]=useState(true);
 useEffect(()=>{
    setTimeout(()=>{
        setIsloading(false);
    },5000)
},[])

return isLoading? <Loading time={1000}/>: <Routes/>
}
export default App
