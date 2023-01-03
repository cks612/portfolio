export interface projectResultProps {
  results: projectProps[];
}

export interface projectProps {
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

export interface createdByProps {
  object: string;
  id: string;
}
export interface lastEditedByProps {
  object: string;
  id: string;
}
export interface coverProps {
  type: string;
  file: coverUrlProps;
  external: coverUrlProps;
}

export interface coverUrlProps {
  url: string;
  expiry_time: string;
}

export interface parentProps {
  type: string;
  database_id: string;
}

export interface propertiesProps {
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

export interface dataProps {
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

export interface textProps {
  type: string;
  text: {
    content: string;
    link: string | null;
  };
}
export interface annotationsProps {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

export interface dateProps {
  id: string;
  type: string;
  date: {
    start: string;
    end: string;
    time_zone: string | null;
  };
}

export interface commonProps {
  id: string;
  type: string;
  url: string | null;
}

export interface skillProps {
  id: string;
  type: string;
  multi_select: [{ id: string; name: string; color: string }];
}

export interface nameProps {
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
