import React from "react";
import style from './MyPosts.module.css';
import Posts from "./Post/Post";
// import {addPostActionCreator, updateNewTextPostActionCreator} from '../../../Redux/ProfileReducer';

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Posts messege={p.message} likes={p.likesCount} />)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
            Введите комментарий:
            <div className={style.main}>
                <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement} className={style.textarea}></textarea>
                <button onClick={onAddPost} className={style.add_post_btn}>Add post</button>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;