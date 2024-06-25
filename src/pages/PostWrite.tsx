import { ChangeEvent, useEffect, useRef, useState } from 'react';

type PostType = {
  id: number;
  img: File | string;
  title: string;
  content: string;
  cost: number;
};

const PostWrite = () => {
  const [title, setTitle] = useState('');
  const [previewImg, setPreviewImg] = useState<string[]>([]);
  const [posts, setPosts] = useState<PostType[]>([
    {
      id: new Date().getTime(),
      img: '',
      title: '',
      content: '',
      cost: 0,
    },
  ]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleBoxClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files ? event.target.files : null;
    if (files) {
      const fileArray = Array.from(files);
      const newPosts = fileArray?.map(file => ({
        id: 0,
        img: file,
        title: '',
        content: '',
        cost: 0,
      }));
      if (!posts[0].img) {
        setPosts(newPosts);
      }
      setPosts([...posts, ...newPosts]);

      if (files.length > 5) return;

      const imgFiles = previewImg;
      for (let i = 0; i < files.length; i++) {
        imgFiles.push(URL.createObjectURL(files[i]));
      }
      setPreviewImg(imgFiles);
    }
  };

  useEffect(() => {}, []);

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
        <div className="flex justify-end">
          <div className="border-b h-16 flex mb-8 w-[91%]">
            <input
              className="rounded-lg flex-auto text-slate-400 text-2xl font-bold placeholder:text-slate-300"
              placeholder="질문을 입력하세요."
              onChange={onChangeInput}
            />
            <button
              className="w-[10%] bg-accent-300 text-white rounded-lg font-bold text-lg"
              type="submit"
              onClick={onSubmit}
            >
              등 록
            </button>
          </div>
        </div>

        <div className="flex">
          {/* 이미지 목록 */}
          <div className="w-[10%]">
            <ul>
              {previewImg.map((img, i) => (
                // <li key={img.id} className="bg-slate-100 rounded-md w-[50px] h-[50px] mb-3">
                <img
                  key={i}
                  src={img}
                  alt="post-img"
                  className="bg-slate-100 rounded-md w-[50px] h-[50px] mb-3 object-cover"
                />
                // </li>
              ))}
            </ul>
            {previewImg.length <= 5 && previewImg.length >= 1 ? (
              <button
                type="button"
                className="bg-slate-100 border-slate-400 border border-dashed rounded-md w-[50px] h-[50px]"
                onClick={handleBoxClick}
              >
                {' '}
                +{' '}
                <input
                  type="file"
                  accept="image/jpg,impge/png,image/jpeg,image/gif"
                  name="post_img"
                  ref={fileInputRef}
                  className="hidden"
                  multiple
                  onChange={handleFileChange}
                />
              </button>
            ) : null}
          </div>
          {/* 제품 목록 */}
          <ul className="w-full flex flex-col">
            {posts?.map((post, i) => (
              <div className="flex justify-between mb-8" key={post?.id + i}>
                {posts?.length <= 1 ? (
                  <div className="w-[40%]">
                    <div
                      className="bg-slate-100 h-[300px] w-full flex flex-col justify-center items-center cursor-pointer hover:bg-[#edf0f3]"
                      onClick={handleBoxClick}
                    >
                      <input
                        type="file"
                        accept="image/jpg,impge/png,image/jpeg,image/gif"
                        name="post_img"
                        ref={fileInputRef}
                        className="hidden"
                        multiple
                        onChange={handleFileChange}
                      />
                      <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M34.125 30.875V8.125C34.125 6.3375 32.6625 4.875 30.875 4.875H8.125C6.3375 4.875 4.875 6.3375 4.875 8.125V30.875C4.875 32.6625 6.3375 34.125 8.125 34.125H30.875C32.6625 34.125 34.125 32.6625 34.125 30.875ZM14.4625 22.7175L17.875 26.8288L22.9125 20.345C23.2375 19.9225 23.8875 19.9225 24.2125 20.3612L29.9162 27.9662C30.0068 28.087 30.0619 28.2305 30.0755 28.3808C30.089 28.5311 30.0605 28.6821 29.993 28.8171C29.9255 28.9521 29.8218 29.0656 29.6934 29.1449C29.5651 29.2242 29.4171 29.2663 29.2663 29.2663H9.7825C9.1 29.2663 8.72625 28.4863 9.14875 27.95L13.195 22.75C13.5037 22.3275 14.1212 22.3112 14.4625 22.7175Z"
                          fill="#c6ccd3"
                        />
                      </svg>

                      <span className="text-slate-400 text-sm mt-3">사진은 최대 5장까지 올릴 수 있어요 :)</span>
                    </div>
                  </div>
                ) : (
                  <div className="w-[40%]">
                    <img src={previewImg[i]} alt="post-img" className="h-[300px] w-full bg-slate-100 object-contain" />
                  </div>
                )}
                <div className="w-[55%]">
                  <input
                    className="w-full flex-auto text-slate-500 text-md font-bold placeholder:text-slate-500 text-lg"
                    placeholder="제품명 입력"
                    defaultValue={post?.title}
                  />
                  <textarea
                    className="w-full h-[120px] mt-3 text-sm flex-auto text-slate-600 text-md placeholder:text-slate-500"
                    placeholder="내용 입력"
                    defaultValue={post?.content}
                  />
                  <div className="mt-4 flex justify-between">
                    <div className="text-slate-600 font-bold">금액대 선택</div>
                    <div className="text-blue-500 font-bold">{post?.cost}만원</div>
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
