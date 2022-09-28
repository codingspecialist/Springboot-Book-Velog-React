import {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addMember, isLoginCheck } from "../modules/members";
import { isMenuCheck } from '../modules/members';
const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    dispatch(isMenuCheck(false));
    const [isLoginPage, setIsLoginPage] = useState(true);
    const [loginForm, setLoginForm] = useState({
        userEmail:"",
        userPass:""
    })
    const [joinForm, setJoinForm] = useState({
        userId:"",
        ueerName:"",
        userEmail:"",
        userPass:""
    })
    const members = useSelector(state=>state.members.members)
    const onChange = (e) => {
        const { name, value } = e.target;
        setLoginForm({
            ...loginForm,
            [name]: value
        })
    }
    const onChangeJoin = (e) => {
        const { name, value } = e.target;
        setJoinForm({
            ...joinForm,
            [name]: value
        })
    }
    // 로그인폼 실행
    const onSubmit = (e) => {
        e.preventDefault();
        const loginMember = members.find(list=> list.userEmail === loginForm.userEmail && list.userPass === loginForm.userPass);
         if( loginMember ) {
             console.log('로그인');
             dispatch(isLoginCheck(true,loginMember))
             navigate('/')
         } else {
             alert('이메일과 비밀번호를 확인하세요');
             console.log('실패');
         }
    }
    // 회원가입 폼 실행
    const onSubmitjoin = (e) => {
        e.preventDefault();
        dispatch(addMember(joinForm))
        navigate('/')
    }
    return (
        <div className="bg">
            <div className="box on">
                <div className="memberImg">
                    <div>
                        <img src="https://static.velog.io/static/media/undraw_joyride_hnno.fae6b95e.svg" alt="welcome" />
                        <div>환영합니다.</div>
                    </div>
                </div>
                <div className="memberform">
                    <div className="block-content">
                        <div className="upper-wrapper">
                            <h2 data-testid="title">{ isLoginPage ? "로그인" : "회원가입" }</h2>
                            <h4>{ isLoginPage ? "이메일로 로그인" : "이메일로 회원가입" }</h4>
                        </div>
                        <section>
                                { isLoginPage && ( 
                                <form className="loginForm" onSubmit={onSubmit}>
                                    <input type="text" name="userEmail"  placeholder="이메일을 입력하세요." value={loginForm.userEmail} onChange={onChange} />
                                    <input type="password" name="userPass" placeholder="비밀번호를 입력하세요." value={loginForm.userPass} onChange={onChange} />
                                    <button type="submit">로그인</button>
                                </form>) }
                                { isLoginPage || ( 
                                <form className="loginForm" onSubmit={onSubmitjoin}>
                                    <input type="text" name="userId"  placeholder="유저네임을 입력하세요." value={joinForm.userId} onChange={onChangeJoin} />
                                    <input type="password" name="userPass"  placeholder="비밀번호를 입력하세요." value={joinForm.userPass} onChange={onChangeJoin} />
                                    <input type="text" name="userEmail"  placeholder="이메일을 입력하세요." value={joinForm.userEmail} onChange={onChangeJoin} />
                                    <input type="text" name="userName" placeholder="이름를 입력하세요." value={joinForm.userName} onChange={onChangeJoin} />
                                    <button type="submit">회원가입</button>
                                </form>) }
                               
                            </section>
                        { isLoginPage && (<div className="footer">아직 회원이 아니신가요? <span onClick={()=>setIsLoginPage(false)}>회원가입</span></div>)}
                        { isLoginPage || (<div className="footer">계정이 이미 있으신가요? <span onClick={()=>setIsLoginPage(true)}>로그인</span></div>)}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;