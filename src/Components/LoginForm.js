import React, {useState} from 'react';
import './css/login.css';

function Login(props) {

    //state관리하기
    const [inputs, setinputs] = useState({
      username:'',
      userid:''
    });
  
    //비구조화 할당 방식을 통해 값을 추출한다.
    const {username, userid} = inputs;
  
    //값이 변경되는 함수 - 타겟대상은 2개
    const onDataChange = (e) => {
      const{value, name} = e.target;
      setinputs({
        ...inputs, //기존 inputs 객체를 복사한다.
        [name]:value //name 키를 가진 값을 value로 설정한다.
      });
    }
    
    //값을 초기화
    const onDataReset=()=>{
      setinputs({
        username:'',
        userid:''
      });
    }

  return (
    <>
      <article className='login'>
        <h2>로그인</h2>
        <div>
          <input type="text" placeholder='이름입력' name='username' value={username} onChange={onDataChange}/>
          <input type="text" placeholder='아이디입력' name='userid' value={userid} onChange={onDataChange} />

          <p>
            <a href="#none" title='아이디 찾기'>아이디 찾기 </a>
            <a href="#none" title='비밀번호 찾기'>| 비밀번호 찾기</a>
          </p>

          <input type="submit" value='로그인' />
          <input type="button" value='회원가입' />

          <button onClick={onDataReset}>데이터 리셋</button>
          <p>값 : {username}({userid})</p>
        </div>
      </article>
    </>
  );
}

export default Login;