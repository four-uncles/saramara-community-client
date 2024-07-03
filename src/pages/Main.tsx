import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import VoteIcon from '../assets/svg/VoteIcon.svg?react'; // 안됨

type PostType = {
  id: number;
  title: string;
  votes: number;
};
type CommentsPostType = {
  img: string;
  title: string;
  comments: number;
};
type TotalPostType = {
  userId: string;
  userImg: string;
  title: string;
  votes: number;
};
const Main = () => {
  const [monthyPost, setMonthyPost] = useState<PostType[]>();
  const [totalPost, setTotalPost] = useState<TotalPostType[]>();
  const [commentsPost, setCommentsPost] = useState<CommentsPostType[]>();
  useEffect(() => {
    const test = [
      { id: 0, title: '샤넬 조공용 어떤가요', votes: 140 },
      { id: 1, title: '오라리 데님...', votes: 140 },
      { id: 2, title: '꼼데가르송 가방 리본 vs  아오야마', votes: 139 },
      { id: 3, title: '마르지엘라  신발 고민중입니다!', votes: 120 },
      { id: 4, title: '프로듀스 101 블랙 니트티', votes: 100 },
      { id: 5, title: '노트북 가방 제발 골라주세요', votes: 40 },
    ];
    const totalTest = [
      { userId: 'user10', userImg: '', title: '1샤넬 조공용 어떤가요', votes: 140 },
      { userId: 'user11', userImg: '', title: '2오라리 데님...', votes: 140 },
      { userId: 'user12', userImg: '', title: '3꼼데가르송 가방 리본 vs  아오야마', votes: 139 },
      { userId: 'user13', userImg: '', title: '4마르지엘라  신발 고민중입니다!', votes: 120 },
    ];
    const totalTest3 = [...totalTest, ...totalTest, ...totalTest, ...totalTest];
    const commentBests = [
      {
        img: '',
        title: '조공용1',
        comments: 50,
      },
      {
        img: '',
        title: '조공용2',
        comments: 40,
      },
      {
        img: '',
        title: '조공용3',
        comments: 30,
      },
      {
        img: '',
        title: '조공용4',
        comments: 20,
      },
      {
        img: '',
        title: '조공용5',
        comments: 10,
      },
      {
        img: '',
        title: '조공용6',
        comments: 5,
      },
    ];
    setMonthyPost(test);
    setTotalPost(totalTest3);
    setCommentsPost(commentBests);
  }, []);
  return (
    <main className="px-48 pb-10 w-full">
      <div className="font-black font-gmarket pt-10 pb-4">월간 인기글 🔥</div>
      <div className="flex">
        <div className="flex-1 grid grid-rows-5 gap-2 h-[230px]">
          <div className="row-span-4 bg-slate-100 rounded-xl">사진</div>
          <Link
            to={'/'}
            className="row-span-1 flex rounded-lg border border-slate-200 items-center px-4 hover:bg-slate-50"
          >
            <div className="font-bold text-sm mr-4 text-[#656565]">1</div>
            <div className="flex-1 text-sm font-bold">{monthyPost && monthyPost[0].title}</div>
            <div className="text-[#919191] text-xs">
              {/* <VoteIcon /> */}
              {monthyPost && monthyPost[0].votes}
            </div>
          </Link>
        </div>
        <div className="flex-1 grid grid-rows-5 gap-2 h-[230px] pl-4">
          {monthyPost?.map((post, i) =>
            i === 0 ? null : (
              <Link
                to={'/'}
                className="flex rounded-lg border border-slate-200 items-center px-4 hover:bg-slate-50"
                key={post?.id}
              >
                <div className="font-bold text-sm mr-4 text-[#656565]">{i + 1}</div>
                <div className="flex-1 text-sm font-bold">{post.title}</div>
                <div className="text-[#919191] text-xs">
                  {/* <VoteIcon /> */}
                  {post.votes}
                </div>
              </Link>
            )
          )}
        </div>
      </div>

      <div className="font-black font-gmarket pt-10 pb-4 mt-20">댓글 TOP 10 </div>
      <div className="flex w-full overflow-x-scroll no-scrollbar">
        {commentsPost?.map((bestComment, i) => (
          <Link to={'/'} key={bestComment.title + i} className="mr-2">
            <div className="w-[271px] h-[200px] bg-slate-200 rounded-2xl"></div>

            <div className="mt-2 flex justify-between items-center">
              <div className="font-bold text-sm">{bestComment.title}</div>
              <div className="text-slate-400 text-xs">{bestComment.comments}</div>
            </div>
          </Link>
        ))}
      </div>

      <div className="font-black font-gmarket pt-10 pb-4 mt-20">전체 게시글</div>

      <div className="grid grid-cols-4 gap-x-1 gap-y-9">
        {totalPost?.map((totalPost, idx) => (
          <Link to={'/'} key={totalPost.userId + idx} className="mr-2">
            <div className="w-[271px] h-[200px] bg-slate-200 rounded-2xl"></div>

            <h3 className="font-bold mt-2">{totalPost.title}</h3>
            <div className="mt-2 flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-[20px] h-[20px] bg-slate-200 rounded-full mr-2">{totalPost.userImg}</div>
                <div className="text-sm text-slate-500 font-normal">{totalPost.userId}</div>
              </div>
              <div className="text-slate-400 text-xs">{totalPost.votes}</div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};
export default Main;
