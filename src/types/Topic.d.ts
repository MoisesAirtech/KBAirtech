export type HowImageType = {
  id: number;
  name: string;
  url: string;
};

export type TalkingPointType = {
  question: {
    id: number;
    text: string;
    confirmed: boolean;
  }[];
  answer: {
    id: number;
    text: string;
  }[];
};

export type SubTopicType = {
  id: number;
  title: string;
  subtitle: string;
  how: HowImageType[];
  talkingPoints: TalkingPointType;
};

export type TopicType = {
  id: number;
  name: string;
  subTopics: SubTopicType[];
};
