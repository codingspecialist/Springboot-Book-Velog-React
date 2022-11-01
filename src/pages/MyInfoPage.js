import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import Body from "../components/myinfo/Body";
import { isMenuCheck,editMember } from '../modules/members';
const MyInfoPage = () => {
    const loginMember = useSelector(state => state.members.loginMember)
    const [userImg, setUserImg] = useState(loginMember.imgsrc)
    const dispatch = useDispatch();
    dispatch(isMenuCheck(false));
    const imgChange = (e) => {
        const imgurl = e.target.value;
        const imgstr = "images/"+imgurl.substr(imgurl.lastIndexOf('\\')+1)
        setUserImg(imgstr)
        dispatch(editMember(loginMember.userId, { imgsrc:imgstr }))
    }
    const imgDel = () => {
        setUserImg("")
        dispatch(editMember(loginMember.userId, { imgsrc:"" }))
    }
    return (
        <Body imgChange={imgChange} imgDel={imgDel} userImg={userImg} loginMember={loginMember} />
    )
}
export default MyInfoPage;