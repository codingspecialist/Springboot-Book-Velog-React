import MyVelogMenu from "./atom/MyVelogMenu";
import Profile from "../common/Profile";
import MyVelogList from "./atom/MyVelogList";
const Body = ({loginMember,onSubList,onAllList,lists}) => {
    return (
        <div className="myvelog subpage">
            <MyVelogMenu loginMember={loginMember} onSubList={onSubList} onAllList={onAllList}/>
            <div className="myvelogContents">
                <Profile userId={loginMember.userId}/>
                <div>
                    {lists.map(list=>(<MyVelogList list={list} />))}
                </div>
            </div>
        </div>
    )
}
export default Body;
