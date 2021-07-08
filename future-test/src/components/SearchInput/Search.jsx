import React from 'react'

const Search = ({value,onChange}) => {
    return (
        <div className="input-group mb-3">
            <input  type="text" 
                    className="form-control"
                    placeholder="Поиск"
                    aria-label="Поиск"
                    aria-describedby="button-addon2"
                    value={value}
                    onChange={onChange}
            />
        </div>
    )
}

export default Search