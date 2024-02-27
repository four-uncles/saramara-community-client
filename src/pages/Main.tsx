import { useEffect, useState } from 'react';
// import VoteIcon from '../assets/svg/VoteIcon.svg?react'; // 안됨

type PostType = {
  id: number;
  title: string;
  votes: number;
};
const Main = () => {
  const [monthyPost, setMonthyPost] = useState<PostType[]>();
  useEffect(() => {
    const test = [
      { id: 0, title: '샤넬 조공용 어떤가요', votes: 140 },
      { id: 1, title: '오라리 데님...', votes: 140 },
      { id: 2, title: '꼼데가르송 가방 리본 vs  아오야마', votes: 139 },
      { id: 3, title: '마르지엘라  신발 고민중입니다!', votes: 120 },
      { id: 4, title: '프로듀스 101 블랙 니트티', votes: 100 },
      { id: 5, title: '노트북 가방 제발 골라주세요', votes: 40 },
    ];
    setMonthyPost(test);
  }, []);
  return (
    <main className="px-48 pb-10">
      <div className="font-black font-gmarket pt-10 pb-4">월간 인기글 🔥</div>
      <div className="flex">
        <div className="flex-1 grid grid-rows-5 gap-2 h-[230px]">
          <div className="row-span-4 bg-slate-100 rounded-xl">사진</div>
          <div className="row-span-1 flex rounded-lg border border-slate-200 items-center px-4">
            <div className="font-bold text-sm mr-4 text-[#656565]">1</div>
            <div className="flex-1 text-sm font-bold">{monthyPost && monthyPost[0].title}</div>
            <div className="text-[#919191] text-xs">
              {/* <VoteIcon /> */}
              {monthyPost && monthyPost[0].votes}
            </div>
          </div>
        </div>
        <div className="flex-1 grid grid-rows-5 gap-2 h-[230px] pl-4">
          {monthyPost?.map((post, i) =>
            i === 0 ? null : (
              <div className="flex rounded-lg border border-slate-200 items-center px-4" key={post?.id}>
                <div className="font-bold text-sm mr-4 text-[#656565]">{i + 1}</div>
                <div className="flex-1 text-sm font-bold">{post.title}</div>
                <div className="text-[#919191] text-xs">
                  {/* <VoteIcon /> */}
                  {post.votes}
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <div className="font-black font-gmarket pt-10 pb-4">댓글 TOP 10 </div>
      <div className="font-black font-gmarket pt-10 pb-4">전체 게시글</div>
    </main>
  );
};
export default Main;
