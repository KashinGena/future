import React from 'react'


const Table = ({rows}) => {
    return (
        <table class="table table-hover">
            <thead>
                <tr>
                <th scope="col">id</th>
                <th scope="col">FirstName</th>
                <th scope="col">LastName</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                </tr>
            </thead>
            <tbody>
                {rows && rows.map((row,index) => {
                    return (
                        <tr key={row.id}>
                            <th scope="row">{row.id}</th>
                            <td>{row.firstName}</td>
                            <td>{row.lastName}</td>
                            <td>{row.email}</td>
                            <td>{row.phone}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}


export default Table