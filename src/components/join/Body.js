import { Link } from "react-router-dom";

const Body = ({onSubmitjoin,joinForm,onChangeJoin}) => {
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
                      <h2 data-testid="title">회원가입</h2>
                      <h4>이메일로 회원가입</h4>
                  </div>
                  <section>
                    <form className="loginForm" onSubmit={onSubmitjoin}>
                      <input type="text" name="userId"  placeholder="유저네임을 입력하세요." value={joinForm.userId} onChange={onChangeJoin} />
                      <input type="password" name="userPass"  placeholder="비밀번호를 입력하세요." value={joinForm.userPass} onChange={onChangeJoin} />
                      <input type="text" name="userEmail"  placeholder="이메일을 입력하세요." value={joinForm.userEmail} onChange={onChangeJoin} />
                      <input type="text" name="userName" placeholder="이름를 입력하세요." value={joinForm.userName} onChange={onChangeJoin} />
                      <button type="submit">회원가입</button>
                    </form>
                  </section>
                  <div className="footer">계정이 이미 있으신가요? <Link to="/login"><span>로그인</span></Link></div>
              </div>
          </div>
      </div>
  </div>
    )
}
export default Body;