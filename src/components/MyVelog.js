import { useSelector,useDispatch } from "react-redux";
import MyVelogMenu from "./MyVelogMenu";
import { isMenuCheck } from '../modules/members';
import Profile from "./Profile";
import MyVelogList from "./MyVelogList";
import { useState } from "react";
const MyVelog = ({memberLists}) => {
    const loginMember = useSelector(state=> state.members.loginMember);
    const dispatch = useDispatch();
    const [lists, setLists] = useState(memberLists);
    dispatch(isMenuCheck(false));
    const onSubList = (text) => {
        setLists(memberLists.filter(list => list.series.includes(text)))
    }
    const onAllList = () => {
        setLists(memberLists)
    }
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
export default MyVelog;
