import React from 'react'

const Tbody = ({ result}) => {
    return (
        <tbody>
            {result ? result.map(result => (
                <tr key={result.email}>
                    <td data-th="Image" className="align-middle">
                        <img
                            src={result.picture.medium}
                            alt="employee"
                            className="img-responsive"
                        />
                    </td>
                    <td data-th="Name" className="name-cell align-middle">
                        {result.name.first} {result.name.last}
                    </td>
                    <td data-th="Phone" className="align-middle">
                        {result.phone}
                    </td>
                    <td data-th="Email" className="align-middle">
                        <a href={"mailto:" + result.email} target="__blank">
                            {result.email}
                        </a>
                    </td>
                    <td data-th="DOB" className="align-middle">
                        {result.dob.date.slice(0, 10)}
                    </td>
                </tr>

            )) : ""}
        </tbody>
    );
}

export default Tbody