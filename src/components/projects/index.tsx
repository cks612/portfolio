import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";
import { projectProps } from "../../type";

const ProjectItem = ({ data }: { data: projectProps }) => {
  const title = data.properties.Name.title[0].plain_text;
  const githubLink = data.properties.Github.url;
  const videoLink = data.properties.Video.url;
  const description = data.properties.Introduce.rich_text[0].plain_text;
  const imgSrc = data.cover.file?.url || data.cover.external.url;
  const tags = data.properties.Skills.multi_select;
  const start = data.properties.Dates.date.start;
  const end = data.properties.Dates.date.end;
  const notionUrl = data.url;

  const calculatedPeriod = (start: any, end: any) => {
    const startDateStringArray = start.split("-");
    const endDateStringArray = end.split("-");

    let startDate: any = new Date(
      startDateStringArray[0],
      startDateStringArray[1],
      startDateStringArray[2]
    );
    let endDate: any = new Date(
      endDateStringArray[0],
      endDateStringArray[1],
      endDateStringArray[2]
    );

    // 지나간 시간 - 시작된 시간
    const diffInMs = Math.abs(endDate - startDate);
    const result = diffInMs / (1000 * 60 * 60 * 24);

    return result;
  };

  return (
    <div className="project-card ">
      <Link href={notionUrl}>
        <Image
          className="rounded-t-xl"
          src={imgSrc}
          width={100}
          height={50}
          objectFit="cover"
          layout="responsive"
          quality={100}
          alt="coverImg"
          priority
        />
      </Link>

      <div className="p-4 flex flex-col">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h3 className="mt-4 text-xl">{description}</h3>
        <Link href={githubLink ? githubLink : ""}>깃허브 바로가기</Link>
        <Link href={videoLink ? videoLink : ""}>시연영상 보러가기</Link>
        <p className="my-1">
          작업기간 : {start} ~ {end} ({calculatedPeriod(start, end)}일)
        </p>

        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag) => (
            <h1
              key={tag.id}
              className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 "
            >
              {tag.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
