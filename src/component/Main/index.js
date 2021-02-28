import React, { useState, useEffect } from 'react'
import useAPI from '../../utils/useAPI'
import Search from '../Search'
import Jumbo from '../Jumbo'
import ButtonContext from '../../utils/ButtonContext'
import Table from '../Table'

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
                <Table result={ search  ? filteredResult : result} />
                </ButtonContext.Provider>
        </div>
    )
}

export default Main
