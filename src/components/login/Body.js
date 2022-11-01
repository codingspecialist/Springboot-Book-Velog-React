import { Link } from "react-router-dom";

const Body = ({onChange, onSubmit, loginForm}) => {
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
                      <h2 data-testid="title">로그인</h2>
                      <h4>이메일로 로그인</h4>
                  </div>
                  <section>
                    <form className="loginForm" onSubmit={onSubmit}>
                      <input type="text" name="userEmail"  placeholder="이메일을 입력하세요." value={loginForm.userEmail} onChange={onChange} />
                      <input type="password" name="userPass" placeholder="비밀번호를 입력하세요." value={loginForm.userPass} onChange={onChange} />
                      <button type="submit">로그인</button>
                    </form>
                  </section>
                  <div className="footer">아직 회원이 아니신가요? <Link to="/join"><span>회원가입</span></Link></div>
              </div>
          </div>
      </div>
  </div>
    )
}
export default Body;