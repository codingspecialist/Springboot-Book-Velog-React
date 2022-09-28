/* 액션 타입 선언 */
const ADD_MEMBER = 'members/ADD_MEMBER';
const EDIT_MEMBER = 'members/EDIT_MEMBER';
const DEL_MEMBER = 'members/DEL_MEMBER';
const ISLOGIN = 'members/ISLOGIN';
const ISMENU = 'members/ISMENU';

/* 액션 생성함수 선언 */
export const addMember = member => ({
  type: ADD_MEMBER,
  member
});
export const editMember = (userId,member) => ({
    type: EDIT_MEMBER,
    member,
    userId
  });
  export const delMember = userId => ({
    type: DEL_MEMBER,
    userId
  });
  export const isLoginCheck = (isLoginChange,loginMember) => ({
    type: ISLOGIN,
    isLoginChange,
    loginMember
  })
  export const isMenuCheck = isMenu => ({
    type: ISMENU,
    isMenu
  })

  /* 초기 상태 선언 */
const initialState = {
    members: [
        {
          userId: "kig",
          userName: "김그린",
          imgsrc: "images/photo1.png",
          title: "it공부중",
          desc: "열심히 노력하는 신입 프론트엔트 개발자 문건우입니다.",
          userPass: "1234",
          userEmail: "kig@naver.com",
          series: [
            "자바","파이썬","html"
          ]
        },
        {
          userId: "lge",
          userName: "심아진",
          imgsrc: "images/photo2.png",
          title: "스맨파 잼있다",
          desc: "져스트절크 화이팅",
          userPass: "1234",
          userEmail: "lge@naver.com",
          series: [
            "자바","파이썬","html"
          ]
        },
        {
          userId: "pak",
          userName: "강동원",
          imgsrc: "images/photo3.png",
          title: "도사",
          desc: "바람을 가르고 하늘을 날수 있음",
          userPass: "1234",
          userEmail: "pak@naver.com",
          series: [
            "자바","파이썬"
          ]
        },
        {
          userId: "kbu",
          userName: "원빈",
          imgsrc: "images/photo4.png",
          title: "멍때리기",
          desc: "얼굴만 열일중...",
          userPass: "1234",
          userEmail: "kbu@naver.com",
          series: [
            "자바","파이썬","html"
          ]
        },
        {
          userId: "lim",
          userName: "최강두",
          imgsrc: "images/photo5.png",
          title: "자바스크립트 공부중",
          desc: "취미가 공부입니다.",
          userPass: "1234",
          userEmail: "lim@naver.com",
          series: [
            "자바","파이썬","html"
          ]
        },
        {
          userId: "yak",
          userName: "강소라",
          imgsrc: "images/photo6.png",
          title: "비누만들기",
          desc: "비누비누비누",
          userPass: "1234",
          userEmail: "yak@naver.com",
          series: [
            "자바","파이썬","html"
          ]
        },
        {
          userId: "lin",
          userName: "정효원",
          imgsrc: "images/photo7.png",
          title: "식물을 사랑하는 사람",
          desc: "절벽에서도 자라면서 왜 우리집에선 ㅠㅠ",
          userPass: "1234",
          userEmail: "lin@naver.com",
          series: [
            "자바","파이썬","html"
          ]
        },
        {
          userId: "bak",
          userName: "김하늘",
          imgsrc: "images/photo8.png",
          title: "하늘만 멍하니",
          desc: "반갑습니다.",
          userPass: "1234",
          userEmail: "bak@naver.com",
          series: [
            "자바","파이썬","html"
          ]
        },
        {
          userId: "jay",
          userName: "홍승민",
          imgsrc: "images/photo9.png",
          title: "코레오 댄서",
          desc: "안녕하세요",
          userPass: "1234",
          userEmail: "jay@naver.com",
          series: [
            "자바","파이썬","html"
          ]
        },
        {
          userId: "bim",
          userName: "박찬성",
          imgsrc: "images/photo10.png",
          title: "react공부중",
          desc: "하루하루 성장하는 신입 백엔트 개발자 입니다.",
          userPass: "1234",
          userEmail: "bim@naver.com",
          series: [
            "자바","파이썬","html"
          ]
        }
      ],
    isLogin: false,
    isMenu: false,
    loginMember : {}
}

export default function members(state = initialState, action) {
    switch (action.type) {
      case ADD_MEMBER:
        return {
          ...state,
          members: state.members.concat({
            ...action.member,
            imgsrc: "images/photo10.png",
            title: "react공부중",
            desc: "하루하루 성장하는 신입 백엔트 개발자 입니다.",
            series: []
          })
        }
      case EDIT_MEMBER: 
        return {
          ...state,
          members: state.members.map(member=> member.userId === action.userId ? {...member, ...action.member } : member ),
          loginMember: {...state.loginMember, ...action.member}
        }
      case DEL_MEMBER: 
        return {
          ...state,
          members: state.members.filter(member=> member.userId !== action.userId)
        }
      case ISLOGIN: 
        return {
          ...state,
          isLogin: action.isLoginChange,
          loginMember: action.loginMember
        }
      case ISMENU: 
        return {
          ...state,
          isMenu: action.isMenu
        }
      default:
        return state;
    }
  }