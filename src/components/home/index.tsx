import Link from "next/link";
import Animation from "./animation";
import data from "../../constant/db.json";
import { useEffect, useState } from "react";
// import dynamic from "next/dynamic";

// const Pagination = dynamic(() => import("@components/Pagination"), {
//   ssr: false,
// });
interface quoteProps {
  author: string;
  message: string;
}
const Hero = () => {
  const [quoteData, setQuoteData] = useState<quoteProps>();
  const quoteIndex = Math.floor(Math.random() * data.length);

  useEffect(() => {
    setQuoteData(data[quoteIndex]);
  }, []);

  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          안녕하세요 항해하는 개발자 Voyage입니다!
          <br className="hidden lg:inline-block" />
          오늘도 화이팅!
        </h1>
        <p className="mb-8 leading-relaxed">
          {quoteData?.message} - {quoteData?.author}
        </p>
        <div className="flex justify-center">
          <Link href="/projects" className="btn-project">
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
