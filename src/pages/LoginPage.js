import {  useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Body from "../components/login/Body";
import { isLoginCheck } from "../modules/members";
import { isMenuCheck } from '../modules/members';
const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    dispatch(isMenuCheck(false));
    const [loginForm, setLoginForm] = useState({
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
    return (
        <Body onChange={onChange} onSubmit={onSubmit} loginForm={loginForm}/>
    )
}
export default LoginPage;