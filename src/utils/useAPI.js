import {useEffect} from 'react'
import API from './API'

const useAPI = (setResult) => {

 

    useEffect(()=>{
        API.search().then((res) => {
              console.log(res)
            setResult(res.data.results)
       });

    },[setResult])
}

export default useAPI