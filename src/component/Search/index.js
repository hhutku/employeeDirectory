import React,{useContext} from "react";
import ButtonContext from '../../utils/ButtonContext'

const Search = ({setSearch}) => {
    const  handleSortByName  = useContext(ButtonContext);
    
    return (

        <div style={{marginLeft: 40}} className="searchbox">
            <div className="d-flex flex-row">
                <input
                    className=" mr-sm-2 "
                    type="text"
                    placeholder="Search by Last Name"
                   
                    onChange={(e)=>setSearch(e.target.value)}
                />
             <button  className="btn btn-secondary " 
                  onClick={handleSortByName} >Sort by Name</button>
               
            </div>
        </div>

    )
}

export default Search
