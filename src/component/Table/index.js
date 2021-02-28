import React from 'react'
import Tbody from '../Tbody'
const Table = ({result}) => {
    return (

        <div className="datatable mt-5">
            <table
                id="table"
                className="table table-striped table-hover table-condensed"
            >
                <thead>
               <tr>
                   <th  className="col" style={{width:"10%"}}>image</th>
                   <th  className="col" style={{width:"10%"}}>name</th>
                   <th  className="col" style={{width:"20%"}}>phone</th>
                   <th  className="col" style={{width:"20%"}}>e-mail</th>
                   <th  className="col" style={{width:"10%"}}>D.O.B.</th>
               </tr>
                </thead>

               <Tbody result={result} />
            </table>
        </div>
    );
}

export default Table
