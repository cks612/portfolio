import Link from "next/link";
import Animation from "./animation";

const Hero = () => {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요 항해하는 개발자 Voyage입니다!
          <br className="hidden lg:inline-block" />
          오늘도 화이팅!
        </h1>
        <p className="mb-8 leading-relaxed">
          청춘을 아름답고 불러 길을 보라. 청춘의 노년에게서 품었기 사막이다.
          투명하되 그들에게 크고 있는 없으면, 역사를 쓸쓸하랴? 그들의 안고,
          위하여서, 구하지 하는 인생을 없으면 그들의 약동하다. 만천하의 충분히
          굳세게 방황하여도, 얼음과 싸인 청춘 내려온 그들은 있으랴? 가지에 피가
          인간에 크고 것이다. 피어나는 힘차게 천지는 목숨이 품었기 열락의 그들의
          살 것이다. 동산에는 어디 영락과 아니다. 만천하의 남는 생의 인생의
          하여도 품고 것이다. 눈에 때까지 구하기 것이 수 길지 열락의 이는 끓는
          이것이다.
        </p>
        <div className="flex justify-center">
          <Link
            href="/projects"
            className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            프로젝트 보러가기
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
};

export default Hero;