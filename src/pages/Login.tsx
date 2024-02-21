import { ROUTE_PATH } from '@/constants/path';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [errMsg, setErrMsg] = useState('');

  const handleLogin = () => {
    setErrMsg('에러 테스트');
  };

  return (
    <main className="flex justify-center">
      <div className="w-[400px]">
        <div className="text-accent-300 text-2xl font-bold flex justify-center font-gmarket py-4 mb-10">로그인</div>
        <div className="font-bold text-sm">아이디</div>
        <input className="w-full input-default" placeholder="아이디를 입력해주세요." />
        <div className="input-default-err-msg">{errMsg}</div>
        <div className="font-bold text-sm mt-2">비밀번호</div>
        <input className="w-full input-default" placeholder="비밀번호를 입력해주세요." />
        <div className="input-default-err-msg">{errMsg}</div>
        <button className="w-full px-4 py-2 bg-accent-300 text-white rounded my-10 font-bold" onClick={handleLogin}>
          로그인
        </button>

        <div className="flex justify-between">
          <span className="text-slate-400">아직 회원이 아니신가요?</span>
          <Link to={ROUTE_PATH.SIGNUP} className="text-accent-300">
            회원가입
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Login;
