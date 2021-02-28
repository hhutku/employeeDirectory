import React, {useState,useEffect} from 'react'
import useAPI from '../../utils/useAPI'
import Search from '../Search'
import Jumbo from '../Jumbo'
import ButtonContext from '../../utils/ButtonContext'
import Tbody from '../Tbody'

const Main = () => {

    const [search, setSearch] = useState("");
    const [result, setResult] = useState([]);
    const [filteredResult, setFilteredResult] = useState([]);
    const [sorted, setSorted] = useState(false);

    useAPI(setResult)

    useEffect(() => {
        const filteredEmployees = result.filter(employee => employee.name.last
            .toLowerCase().indexOf(search.toLowerCase()) !== -1)
               setFilteredResult(filteredEmployees)

    }, [search, result])

    console.log(result)
    console.log(filteredResult)
    console.log(sorted)

    const handleSortByName = () => {

        if (!sorted) {
            setFilteredResult(result.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1));
            setSorted(true);
        } else {
            setFilteredResult(result.sort((a, b) => (a.name.first > b.name.first) ? -1 : 1));
            setSorted(false);
        }
    }
  

    return (
        <div>
            <ButtonContext.Provider value={handleSortByName}>
            <Jumbo />
            <Search setSearch={setSearch} />
       <h1>{search}</h1>
       <Tbody  result={filteredResult.length > 0 ? filteredResult : result}/>
           </ButtonContext.Provider>
        </div>
    )
}

export default Main
