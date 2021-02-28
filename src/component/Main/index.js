import React, {useState,useEffect} from 'react'
import useAPI from '../../utils/useAPI'
import Search from '../Search'


const Main = () => {

    const [search, setSearch] = useState("");
    const [result, setResult] = useState([]);

    useAPI(setResult)

    console.log(result)
  

    return (
        <div>
           
            <Search setSearch={setSearch} />
       <h1>{search}</h1>
            
        </div>
    )
}

export default Main
