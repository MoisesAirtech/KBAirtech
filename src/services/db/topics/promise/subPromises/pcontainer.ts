import { SubTopicType } from "../../../../../types/index";
import { HowImageType, TalkingPointType } from "../../../../../types/Topic";

export const how: HowImageType[] = [
  {
    id: 0,
    name: "Clicking on RMA",
    url: "",
  },
];

export const talkingPoints: TalkingPointType = {
    question: [{
        id: 0,
        text: 'Customer is verified?',
        confirmed: false
    }, {
        id: 1,
        text: "Have we already sent a container for the same EQ?",
        confirmed: false
    }],
    answer: [{
        id: 0,
        text: 'In order to provide you with more information about the equipment, could you please confirm to me the city, state and zipcode of the address mentioned, please.'
    } , {
        id: 1,
        text: "Thanks for providing that information, as you requested I sent a box to the address (CUSTOMER ADDRESS) you'll receive it on the next 3-5 days, and you'll have up to 7 days to return it."
    } , {
        id: 2,
        text: "Remember to follow the shipping label instructions, in case you don't return it, this could generate charges and fees up to $250 USD.",
    } , {
        id: 3,
        text: "Thanks for taking my call and for being part of xFinity these (CUSTOMER YEARS ON XFINITY), Have a great day."
    }]
};

export const promiseToContainer: SubTopicType = {
  id: 0,
  title: "P - Container (Comcast)",
  subtitle:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  how,
  talkingPoints,
};
