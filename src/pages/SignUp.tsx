import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { signUp } from '@/api/member';
import { ROUTE_PATH } from '@/constants/path';

type SignUpInputType = {
  email: string;
  nickname: string;
  password: string;
  passwordConfirm: string;
};

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<SignUpInputType>();

  const onValidPwd = (data: SignUpInputType) => {
    if (data.password !== data.passwordConfirm) {
      setError('passwordConfirm', { message: '비밀번호가 다릅니다' }, { shouldFocus: true });
    }
  };
  const onSubmit: SubmitHandler<SignUpInputType> = async data => {
    const { email, nickname, password } = data;
    onValidPwd(data);
    const signData = { email, nickname, password };
    console.log('전송할 데이터', signData);
    const res = await signUp(signData);
    console.log('응답 결과', res);
  };

  return (
    <main className="flex justify-center">
      <div className="w-[400px]">
        <div className="text-accent-300 text-2xl font-bold flex justify-center font-gmarket py-4 mb-10">회원가입</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="font-bold text-sm">이메일</div>
          <input
            className="w-full input-default"
            placeholder="이메일를 입력해주세요."
            type="email"
            {...register('email', {
              required: true,
              pattern: {
                value: /^[a-z0-9_+.-]+@([a-z0-9-]+\.)+[a-z0-9]{2,4}$/,
                message: '이메일 형식을 맞춰주세요 예) test@email.com',
              },
            })}
          />
          {errors.email && !errors.email.message && (
            <span className="text-xs text-red-500 pl-2">이메일을 입력해주세요</span>
          )}
          {errors.email?.message && <span className="text-xs text-red-500 pl-2">{errors.email.message}</span>}

          <div className="font-bold text-sm mt-2">닉네임</div>
          <input
            className="w-full input-default"
            placeholder="닉네임을 입력해주세요."
            {...register('nickname', {
              required: true,
              minLength: {
                value: 3,
                message: '닉네임을 3자 이상 입력해주세요',
              },
            })}
          />
          {errors.nickname && !errors.nickname?.message && (
            <span className="text-xs text-red-500 pl-2">닉네임을 입력해주세요</span>
          )}
          {errors.nickname?.message && <span className="text-xs text-red-500 pl-2">{errors.nickname.message}</span>}

          <div className="font-bold text-sm mt-2">비밀번호</div>
          <input
            className="w-full input-default"
            placeholder="비밀번호를 입력해주세요."
            type="password"
            {...register('password', {
              required: true,
              minLength: {
                value: 6,
                message: '6자 이상 18자 이하의 비밀번호를 입력해주세요.',
              },
              maxLength: {
                value: 18,
                message: '18자 이하의 비밀번호를 입력해주세요',
              },
            })}
          />
          {errors.password && !errors.password && (
            <span className="text-xs text-red-500 pl-2">비밀번호를 입력해주세요</span>
          )}
          {errors.password?.message && <span className="text-xs text-red-500 pl-2">{errors.password.message}</span>}

          <div className="font-bold text-sm mt-2">비밀번호 확인</div>
          <input
            className="w-full input-default"
            placeholder="재확인할 비밀번호를 입력해주세요."
            type="password"
            {...register('passwordConfirm', {
              required: true,
              minLength: {
                value: 6,
                message: '6자 이상 18자 이하의 비밀번호를 입력해주세요.',
              },
              maxLength: {
                value: 18,
                message: '18자 이하의 비밀번호를 입력해주세요',
              },
            })}
          />
          {errors.passwordConfirm && !errors.passwordConfirm?.message && (
            <span className="text-xs text-red-500 pl-2">확인용 비밀번호를 입력해주세요</span>
          )}
          {errors.passwordConfirm?.message && (
            <span className="text-xs text-red-500 pl-2">{errors.passwordConfirm.message}</span>
          )}

          <button
            type="submit"
            className="w-full px-4 py-2 bg-accent-300 text-white rounded my-10 font-bold"
            onClick={handleSubmit(onSubmit)}
          >
            회원가입
          </button>
        </form>

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
