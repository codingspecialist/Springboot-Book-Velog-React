import CommentWrite from './CommentWrite';
import { useState, useRef } from 'react';
import CommentLists from './CommentLists';
const Comment = () => {
    const idNum = useRef(4);
    const [commentLists, setCommentLists] = useState([
        { 
            id: 1, 
            userId: "kig",
            imgurl: "/images/photo1.png",
            date: "2022-09-24",
            comment: "좋은정보 감사합니다."
        },
        { 
            id: 2, 
            userId: "lge",
            imgurl: "/images/photo2.png",
            date: "2022-09-23",
            comment: "재미있는정보 감사합니다."
        },
        { 
            id: 3, 
            userId: "pak",
            imgurl: "/images/photo3.png",
            date: "2022-09-22",
            comment: "도움되는정보 감사합니다."
        }
    ])
    const addList = (text) => {
        setCommentLists([...commentLists, {
            id: idNum.current,
            userId: "pak",
            imgurl: "/images/photo3.png",
            date: "2022-09-25",
            comment: text
        }])
        idNum.current = idNum.current+1
    }
    return (
        <div>
            <CommentWrite addList={addList}/>
            <CommentLists lists={commentLists}/>
        </div>
    )
}
export default Comment;