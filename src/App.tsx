import { useEffect, useState } from 'react'
import Routes from './router'
import LoadingFirst from './components/fiture/loadingFirst'

const App=()=>{
    let [isLoading,setIsloading]=useState(true);
 useEffect(()=>{
    setTimeout(()=>{
        setIsloading(false);
    },5000)
},[])

return isLoading? <LoadingFirst time={1000}/>: <Routes/>
// return <LoadingFirst time={1000}/>
}
export default App
