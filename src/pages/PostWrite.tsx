import { ChangeEvent, useEffect, useState } from 'react';

type ImgType = {
  id: number;
  img: string;
};

type PostType = {
  id: number;
  img: string;
  title: string;
  content: string;
  cost: number;
};

const PostWrite = () => {
  const [title, setTitle] = useState('');
  const [img, setImg] = useState<ImgType[]>();
  const [post, setPost] = useState<PostType[]>();

  useEffect(() => {
    const testImg = [
      { id: 0, img: '사진1' },
      { id: 1, img: '사진2' },
    ];
    const testPost = [
      { id: 0, img: '사진1', title: '111', content: '123123', cost: 12 },
      { id: 0, img: '사진2', title: '222', content: '456456', cost: 77 },
    ];
    setImg(testImg);
    setPost(testPost);
  }, []);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setTitle(target.value);
    console.log(title);
  };

  const onSubmit = () => {
    // console.log('응답 결과', res);
  };

  return (
    <div className="w-full flex justify-center">
      <form className="w-[80%] mt-6">
        <div className="border rounded-lg h-16 w-full flex mb-8">
          <input
            className="rounded-lg flex-auto pl-3 text-slate-400 text-lg font-bold placeholder:text-slate-300"
            placeholder="질문을 입력하세요."
            onChange={onChangeInput}
          />
          <button className="w-[10%] bg-accent-300 text-white rounded-r-lg font-bold" type="submit" onClick={onSubmit}>
            등 록
          </button>
        </div>

        <div className="flex">
          <div className="w-[10%]">
            <ul>{img?.map(img => <li className="bg-slate-100 rounded-md w-[50px] h-[50px] mb-3">{img.img}</li>)}</ul>
            <button
              type="button"
              className="bg-slate-100 border-slate-400 border border-dashed rounded-md w-[50px] h-[50px]"
            >
              {' '}
              +{' '}
            </button>
          </div>
          <ul className="w-full flex flex-col">
            {post?.map(el => (
              <div className="flex justify-between mb-8">
                <div className="w-[40%]">
                  <div className="bg-slate-100 h-[300px] w-full">{el.img}</div>
                </div>
                <div className="w-[55%]">
                  <input
                    className="w-full py-2 px-4 text-sm border rounded-lg flex-auto pl-3 text-slate-600 text-md placeholder:text-slate-500 mb-4"
                    placeholder="제품명 입력"
                    defaultValue={el.title}
                  />
                  <textarea
                    className="w-full h-[120px] py-2 px-4 text-sm border rounded-lg flex-auto pl-3 text-slate-600 text-md placeholder:text-slate-500"
                    placeholder="내용 입력"
                    defaultValue={el.content}
                  />
                  <div className="mt-4 flex justify-between">
                    <div className=" text-slate-400 font-bold">금액대 선택</div>
                    <div className="text-blue-500 font-bold">{el.cost}만원</div>
                  </div>
                  <div className="flex justify-between text-slate-400 text-xs mt-2">
                    <div>만원</div>
                    <div>백만원</div>
                  </div>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </form>
    </div>
  );
};

export default PostWrite;
