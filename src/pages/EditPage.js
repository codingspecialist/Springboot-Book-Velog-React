import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Body from "../components/edit/Body";
import { editMember, isMenuCheck } from '../modules/members';
const EditPage = () => {
    const loginMember = useSelector(state => state.members.loginMember);
    const [userImg, setUserImg] = useState(loginMember.imgsrc);
    const [userForm, setUserForm] = useState({
        userId:loginMember.userId,
        userName:loginMember.userName,
        userEmail:loginMember.userEmail,
        userPass:loginMember.userPass
    })
    const dispatch = useDispatch();
    const navigate = useNavigate();
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
    const onChange = (e) => {
        const { name, value } = e.target;
        setUserForm({
            ...userForm,
            [name]: value
        })
    }
    const onSubmit = () => {
        dispatch(editMember(loginMember.userId, userForm))
        navigate('/');
    }
    return (
       <Body 
       onSubmit={onSubmit} 
       onChange={onChange} 
       userImg={userImg} 
       imgChange={imgChange} 
       mgDel={imgDel} 
       userForm={userForm}
       loginMember={loginMember}
       />
    )
}
export default EditPage;