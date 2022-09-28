const MyVelogList = ({ list }) => {
    return (
        <div className="myVelogList">
            <h3>{list.title}</h3>
            { list.src && <img src={list.src} alt=""/> }
            <p>{list.desc.substr(0,200)}</p>
            <p>{list.registdate} · {list.commentCount}개의 댓글 </p>
        </div>
    )
}
export default MyVelogList;