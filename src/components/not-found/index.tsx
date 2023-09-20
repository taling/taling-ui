export default function NotFoundComponent() {
  return (
    <div className="flex flex-col gap-2 items-center justify-center py-12 sm:py-24 text-sm min-h-screen -mt-16">
      <h2 className="text-2xl font-extralight py-4">
        페이지를 찾을 수 없습니다
      </h2>
      <p>요청하신 페이지를 찾을 수 없습니다.</p>
      <p>입력하신 주소가 정확한지 다시 한번 확인해 주세요.</p>
      <p>
        <a href="/" className="text-taling-pink-400 underline">
          홈으로 돌아가기
        </a>
      </p>
    </div>
  );
}
