import React from 'react';
import style from './Users.module.css';
import userPhoto from '../../assets/images/person-icon.png';
import { NavLink } from 'react-router-dom';

let User = ({user, followingInProgress, unfollow, follow, ...props}) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];

    for( let i = 1; i <= pagesCount; i++ ){
        pages.push(i);
    }

    return (
        <div>
            <span>

                <div className={style.avatar}>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} />
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            unfollow(user.id);
                        }}>Unfollow</button>
                        
                        : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            follow(user.id) 
                        }}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>
                        {user.name}
                    </div>
                    <div>
                        {user.status}
                    </div>
                </span>
                <span>
                    <div>
                        {"user.location.country"}
                    </div>
                    <div>
                        {"user.location.city"}
                    </div>
                </span>
            </span>
        </div>
    );
}

export default User;