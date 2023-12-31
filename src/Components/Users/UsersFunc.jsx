import React from "react";
import styles from './Users.module.css';
import axios from "axios";
import userPhoto from '../../Image/Asset6.jpg'

let Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {//делаем запрос на url (get-получить данные), когда они придут(.then) в response(ответ) возьмём из ответа .data.items(там массив объектов пользователей)
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                debugger
                props.setUsers(response.data.items)
            })
        }
    }

    // { id: 1, photoUrl: av1, followed: false, fullName: 'Дмитрий', status: 'I am a boss', location: { city: 'Ярославль', country: 'Россия' } },
    // { id: 2, photoUrl: av2, followed: true, fullName: 'Александр', status: 'I am a boss too', location: { city: 'Москва', country: 'Россия' } },
    // { id: 3, photoUrl: av3, followed: false, fullName: 'Андрей', status: 'I am a boss too', location: { city: 'Воронеж', country: 'Россия' } },


    return <div>
        <button onClick={getUsers}>Get Users</button>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.usersPhoto} alt="/"></img>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => (props.unfollow(u.id))}>Unfollow</button>
                            : <button onClick={() => (props.follow(u.id))}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;