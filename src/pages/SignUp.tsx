// import { signUp } from '@/api/member';
import { ROUTE_PATH } from '@/constants/path';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  // const [memberId, setMemberId] = useState('');
  // const [nickname, setNickname] = useState('');
  // const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const handleSignUp = async () => {
    setErrMsg('에러 테스트');
    // const signPayload = {
    //   memberId,
    //   nickname,
    //   password,
    // };
    // const res = await signUp(signPayload);
    // console.log('회원가입 :', res);
  };

  return (
    <main className="flex justify-center">
      <div className="w-[400px]">
        <div className="text-accent-300 text-2xl font-bold flex justify-center font-gmarket py-4 mb-10">회원가입</div>
        <div className="font-bold text-sm">아이디</div>
        <input className="w-full input-default" placeholder="아이디를 입력해주세요." />
        <div className="input-default-err-msg">{errMsg}</div>
        <div className="font-bold text-sm mt-2">닉네임</div>
        <input className="w-full input-default" placeholder="닉네임을 입력해주세요." />
        <div className="input-default-err-msg">{errMsg}</div>
        <div className="font-bold text-sm mt-2">비밀번호</div>
        <input className="w-full input-default" placeholder="비밀번호를 입력해주세요." />
        <div className="input-default-err-msg">{errMsg}</div>
        <div className="font-bold text-sm mt-2">비밀번호 확인</div>
        <input className="w-full input-default" placeholder="재확인할 비밀번호를 입력해주세요." />
        <div className="input-default-err-msg">{errMsg}</div>
        <button className="w-full px-4 py-2 bg-accent-300 text-white rounded my-10 font-bold" onClick={handleSignUp}>
          회원가입
        </button>

        <div className="flex justify-between">
          <span className="text-slate-400">이미 아이디가 있으신가요?</span>
          <Link to={ROUTE_PATH.LOGIN} className="text-accent-300">
            로그인
          </Link>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
