import React from "react";
import styles from './Users.module.css'
import userPhoto from '../../Image/Asset6.jpg'

//ЧИСТАЯ КОМПОНЕНТА, ВСЁ ЧТО ТРЕБУЕТСЯ ПОЛУЧАЕТ ЧЕРЕЗ PROPS.

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize); //получили количество страниц пользователей, Math.ceil - округл. в больш.сторону до целого.
    let pages = []; //сюда собираем кол-вл страниц(1, 2, ..., 10)
    for (let i = 1; i <= pagesCount; i++) {
        if (pages.length < 10) {
            pages.push(i);
        }

    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage} onClick={() => { props.onPageChanged(p) }}>{p}</span>
            })}
        </div>
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