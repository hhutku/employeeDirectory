import React from "react";


const Search = ({setSearch}) => {
   
    
    return (

        <div style={{marginLeft: 40}} className="searchbox">
            <div className="d-flex flex-row">
                <input
                    className=" mr-sm-2 "
                    type="text"
                    placeholder="Search by Last Name"
                   
                    onChange={(e)=>setSearch(e.target.value)}
                />
          
               
            </div>
        </div>

    )
}

export default Search
