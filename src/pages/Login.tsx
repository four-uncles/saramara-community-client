import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { login } from '@/api/member';
import { ROUTE_PATH } from '@/constants/path';

type LoginType = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginType>();

  const onSubmit: SubmitHandler<LoginType> = async data => {
    console.log('로그인 데이터', data);
    const res = await login(data);
    console.log('응답 결과', res);
  };

  return (
    <main className="flex justify-center">
      <form className="w-[400px]" onSubmit={handleSubmit(onSubmit)}>
        <div className="text-accent-300 text-2xl font-bold flex justify-center font-gmarket py-4 mb-10">로그인</div>
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

        <button
          className="w-full px-4 py-2 bg-accent-300 text-white rounded my-10 font-bold"
          type="submit"
          onClick={handleSubmit(onSubmit)}
        >
          로그인
        </button>

        <div className="flex justify-between">
          <span className="text-slate-400">아직 회원이 아니신가요?</span>
          <Link to={ROUTE_PATH.SIGNUP} className="text-accent-300">
            회원가입
          </Link>
        </div>
      </form>
    </main>
  );
};

export default Login;
