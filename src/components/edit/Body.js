
const Body = ({userImg, loginMember,imgDel, imgChange, onSubmit, userForm,onChange}) => {
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
export default Body;