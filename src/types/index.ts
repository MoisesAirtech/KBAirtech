type HowImageType = {
  id: number;
  name: string;
  url: string;
};

type TalkingPointType = {
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

export type TopicType = {
  id: number;
  title: string;
  subtitle: string;
  how: HowImageType[];
  talkingPoints: TalkingPointType;
};
