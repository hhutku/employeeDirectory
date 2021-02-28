import React, {useState,useEffect} from 'react'
import useAPI from '../../utils/useAPI'

const Main = () => {

   
    const [result, setResult] = useState([]);

    useAPI(setResult)

    console.log(result)

    return (
        <div>
            helllooo
        </div>
    )
}

export default Main
