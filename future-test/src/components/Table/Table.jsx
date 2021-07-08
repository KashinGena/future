import React from 'react'



const Table = ({rows, onClickDetail,onSort, sortType, sortField}) => {
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th onClick={onSort.bind(null,'id')} scope="col">
                        <small>{sortField==='id'?sortType:null}</small> id
                    </th>
                    <th onClick={onSort.bind(null,'firstName')} scope="col">
                        <small>{sortField==='firstName'?sortType:null}</small>
                        FirstName
                    </th>
                    <th onClick={onSort.bind(null,'lastName')} scope="col">
                        <small>{sortField==='lastName'?sortType:null}</small>
                        LastName
                    </th>
                    <th onClick={onSort.bind(null,'email')} scope="col">
                        <small>{sortField==='email'?sortType:null}</small>
                        Email
                    </th>
                    <th onClick={onSort.bind(null,'phone')} scope="col">
                        <small>{sortField==='phone'?sortType:null}</small>
                        Phone
                    </th>
                </tr>
            </thead>
           <tbody>
                {rows && rows.map((row,index) => {
                    return (
                        <tr key={row.id+row.phone} onClick={onClickDetail.bind(row)}>
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