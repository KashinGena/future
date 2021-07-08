import React from 'react'

const DetailInfo = ({user}) => {
    return (
        <div>
            <p>Выбран пользователь <b>{user.firstName} {user.lastName}</b></p>
            <p>Описание:</p>
            <textarea readOnly value={user.description}></textarea>
            <p>Адрес проживания: <b>{user.address.streetAddress}</b></p>
            <p>Город: <b>{user.address.city}</b></p>
            <p>Провинция/штат: <b>{user.address.state}</b></p>
            <p>Индекс: <b>{user.address.zip}</b></p>
        </div>
    )
}
export default DetailInfo