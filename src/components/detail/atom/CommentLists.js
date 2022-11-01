const CommentLists = ({ lists }) => {
    return (
        <ul className="commentLists">
            { lists.map(list=>(
            <li>
                <div className="commentProfiles">
                    <div className="img">
                        <img src={list.imgurl} alt="" />
                    </div>
                    <div>
                        {list.userId}<br/>
                        <span>{list.date}</span>
                    </div>
                </div>
                <div className="comment">{list.comment}</div>   
            </li>
            ))}
        </ul>
        
    )
}
export default CommentLists;