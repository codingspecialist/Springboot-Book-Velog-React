import PostBtn from './atom/PostBtn';
import Profile from '../common/Profile';
import Comment from './atom/Comment';
const Body = ({list}) => {
    return(
        <div className='detailView subpage'>
            <h2>{list.title}</h2>
            <p>{list.userId} · {list.registdate}</p>
            <div className='img'>
                <img src={`/${list.src}`} alt="dd" width="100%" height="auto" />
            </div>
            <div className='contents'>
                {list.desc}
            </div>
            <Profile userId={list.userId}/>
            <div className='postBtnDiv'>
                <PostBtn isLeft={true}/>
                <PostBtn isLeft={false}/>
            </div>
            <Comment />
        </div>
    )
}
export default Body;