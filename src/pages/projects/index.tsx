import React from "react";
import axios from "axios";
import { DATABASE_ID, TOKEN } from "../../config";

interface projectProps {
  object: string;
  id: string;
  created_item: string;
  last_edited_time: string;
  created_by: createdByProps;
  last_edited_by: lastEditedByProps;
  cover: coverProps;
  icon: string;
  parent: parentProps;
  archived: string;
  properties: propertiesProps;
  url: string;
}

interface createdByProps {
  object: string;
  id: string;
}
interface lastEditedByProps {
  object: string;
  id: string;
}
interface coverProps {
  type: string;
  file: coverUrlProps;
}

interface coverUrlProps {
  url: string;
  expiry_time: string;
}

interface parentProps {
  type: string;
  database_id: string;
}

interface propertiesProps {
  Team: dataProps;
  Introduce: dataProps;
  Dates: dateProps;
  Github: commonProps;
  Skills: skillProps;
  Video: commonProps;
  SiteUrl: commonProps;
  Group: dataProps;
  Name: nameProps;
}

interface dataProps {
  id: string;
  type: string;
  rich_text: [
    textProps &
      annotationsProps & {
        plain_text: string;
        href: string | null;
      }
  ];
}

interface textProps {
  type: string;
  text: {
    content: string;
    link: string | null;
  };
}
interface annotationsProps {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

interface dateProps {
  id: string;
  type: string;
  date: {
    start: string;
    end: string;
    time_zone: string | null;
  };
}

interface commonProps {
  id: string;
  type: string;
  url: string | null;
}

interface skillProps {
  id: string;
  type: string;
  multi_select: [{ id: string; name: string; color: string }];
}

interface nameProps {
  id: string;
  type: string;
  title: [
    textProps &
      annotationsProps & {
        plain_text: string;
        href: string | null;
      }
  ];
}

const Projects = ({ projects }) => {
  console.log(projects);
  return (
    <div>
      <h1>총 프로젝트</h1>

      {projects.results.map((project: projectProps, index) => (
        <h1 key={index}>{project.properties.Name.title[0].plain_text}</h1>
      ))}
    </div>
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

  const projectNames = projects.results.map(
    (project: projectProps) => project.properties.Name.title[0].plain_text
  );

  return {
    props: { projects },
  };
}
