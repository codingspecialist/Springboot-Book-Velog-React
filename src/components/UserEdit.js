import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editMember, isLoginCheck, isMenuCheck } from '../modules/members';
const UserEdit = () => {
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
        <div className="setting subpage">
            <div className="userImage">
                <div className="userPhoto">
                    {userImg? <img src={userImg} alt="" /> : loginMember.userId }
                </div>
                <div className="userButton">
                    <button className="imgupBtn">이미지 업로드</button>
                    <button className="imgdelBtn" onClick={imgDel}>이미지 제거</button>
                    <input type="file" onChange={imgChange}/>
                </div>
            </div>
            <div className="userInfo">
                <ul>
                    <li><span>유저네임</span><input type="text" name="userId" value={userForm.userId} onChange={onChange}/></li>
                    <li><span>비밀번호 </span><input type="text" name="userPass" value={userForm.userPass} onChange={onChange}/> </li>
                    <li><span>이메일</span><input type="text" name="userEmail" value={userForm.userEmail} onChange={onChange}/></li>
                    <li><span>이름</span><input type="text" name="userName" value={userForm.userName} onChange={onChange}/> </li>
                </ul>
                <span className="edit" onClick={onSubmit}>수정하기</span>
            </div>
        </div>
    )
}
export default UserEdit;