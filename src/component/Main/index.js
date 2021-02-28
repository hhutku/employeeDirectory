import React, {useState,useEffect} from 'react'
import useAPI from '../../utils/useAPI'
import Search from '../Search'
import Jumbo from '../Jumbo'


const Main = () => {

    const [search, setSearch] = useState("");
    const [result, setResult] = useState([]);
    const [filteredResult, setFilteredResult] = useState([]);

    useAPI(setResult)

    useEffect(() => {
        const filteredEmployees = result.filter(employee => employee.name.last
            .toLowerCase().indexOf(search.toLowerCase()) !== -1)
               setFilteredResult(filteredEmployees)

    }, [search, result])

    console.log(result)
    console.log(filteredResult)
  

    return (
        <div>
            <Jumbo />
            <Search setSearch={setSearch} />
       <h1>{search}</h1>
            
        </div>
    )
}

export default Main
