import React from "react";
import axios from "axios";
import { DATABASE_ID, TOKEN } from "../../config";
import ProjectItem from "../../components/projects";
import { projectProps, projectResultProps } from "../../type";

const Projects = ({ projects }: { projects: projectResultProps }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen px-3 mb-10 ">
        <h1 className="text-4xl font-bold sm:text-6xl">
          총 프로젝트:
          <span className="pl-4 text-blue-500">{projects.results.length}</span>
        </h1>
        <div className="grid grid-col-1 gap-8 p-12 m-4 md:grid-cols-2">
          {projects.results.map((project: projectProps) => (
            <ProjectItem key={project.id} data={project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;

// 빌드 타임에 호출
export async function getStaticProps() {
  const options = {
    method: "POST",
    url: `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    data: {
      sorts: [
        {
          property: "Dates",
          direction: "descending",
        },
      ],
      page_size: 100,
    },
  };

  const res = await axios.request(options);
  const projects = await res.data;

  return {
    props: { projects },
  };
}
