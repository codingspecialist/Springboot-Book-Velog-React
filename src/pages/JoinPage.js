import {  useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Body from "../components/join/Body";
import { addMember } from "../modules/members";
import { isMenuCheck } from '../modules/members';
const JoinPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    dispatch(isMenuCheck(false));
    const [joinForm, setJoinForm] = useState({
        userId:"",
        ueerName:"",
        userEmail:"",
        userPass:""
    })
    const onChangeJoin = (e) => {
        const { name, value } = e.target;
        setJoinForm({
            ...joinForm,
            [name]: value
        })
    }
    // 회원가입 폼 실행
    const onSubmitjoin = (e) => {
        e.preventDefault();
        dispatch(addMember(joinForm))
        navigate('/')
    }
    return (
       <Body onSubmitjoin={onSubmitjoin} joinForm={joinForm} onChangeJoin={onChangeJoin}/>
    )
}
export default JoinPage;