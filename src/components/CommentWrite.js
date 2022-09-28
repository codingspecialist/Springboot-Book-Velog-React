import { useState } from "react";

const CommentWrite = ({addList}) => {
    const [commentText, setCommentText] = useState("");
    const onChange = (e) => {
        setCommentText(e.target.value);
    }    
    const onSubmit = (e) => {
        e.preventDefault();
        addList(commentText);
        setCommentText('');
    }
    return (
        <div className="commentWrite">
            <form onSubmit={onSubmit}>
                <textarea name="text" value={commentText} onChange={onChange} placeholder="댓글을 작성하세요"></textarea>
                <button type="submit">댓글 작성</button>
            </form>
        </div>
    )
}
export default CommentWrite;