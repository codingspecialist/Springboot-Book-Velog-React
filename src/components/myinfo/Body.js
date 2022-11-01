
import { Link } from "react-router-dom";
const Body = ({userImg, loginMember,imgDel, imgChange}) => {
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
                    <li><span>유저네임</span>  {loginMember.userId} </li>
                    <li><span>비밀번호 </span> {loginMember.userPass}</li>
                    <li><span>이메일</span>  {loginMember.userEmail}</li>
                    <li><span>이름</span>  {loginMember.userName}</li>
                </ul>
                <Link to="/useredit"><span className="edit">수정하기</span></Link>
            </div>
        </div>
    )
}
export default Body;