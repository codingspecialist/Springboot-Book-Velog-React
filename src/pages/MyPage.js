import { useSelector,useDispatch } from "react-redux";
import { isMenuCheck } from '../modules/members';
import { useState } from "react";
import Body from "../components/my/Body";
const MyPage = ({memberLists}) => {
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
        <Body loginMember={loginMember} onSubList={onSubList} onAllList={onAllList} lists={lists} />
    )
}
export default MyPage;