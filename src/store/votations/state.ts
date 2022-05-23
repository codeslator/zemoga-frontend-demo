import { CandidateData } from '../../global/interfaces';

export interface VotationsState {
  candidates: Array<CandidateData>;
}

export const votationsState: VotationsState = {
  candidates: [
    {
      name: "Kanye West",
      description: "Born in Atlanta and raised in Chicago, West was first known as a producer for Roc-A-Fella Records in the early 2000s, producing singles for several mainstream artists.",
      category: "entertainment",
      picture: "https://www.eluniverso.com/resizer/orjI5eE1aU5XW2DkJz9ooh8j5GM=/670x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/QTR5SSNQWJGXDCRF7HOJXPDUPM.jpg",
      lastUpdated: "2020-03-10T23:08:57.892Z",
      votes: {
        positive: 23,
        negative: 36
      },
      hasVoted: true,
    },
    {
      name: "Mark Zuckerberg",
      description: "Born in White Plains, New York, Zuckerberg attended Harvard University, where he launched the Facebook social networking service from his dormitory room on February 4, 2004.",
      category: "business",
      picture: "https://www.eluniverso.com/resizer/orjI5eE1aU5XW2DkJz9ooh8j5GM=/670x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/QTR5SSNQWJGXDCRF7HOJXPDUPM.jpg",
      lastUpdated: "2021-02-14T23:10:19.134Z",
      votes: {
        positive: 418,
        negative: 324
      },
      hasVoted: true,

    },
    {
      name: "Cristina Fernández de Kirchner",
      description: "Her first term of office started with a conflict with the agricultural sector, and her proposed taxation system was rejected.",
      category: "politics",
      picture: "https://www.eluniverso.com/resizer/orjI5eE1aU5XW2DkJz9ooh8j5GM=/670x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/QTR5SSNQWJGXDCRF7HOJXPDUPM.jpg",
      lastUpdated: "2020-12-10T23:41:07.120Z",
      votes: {
        positive: 45,
        negative: 97
      },
      hasVoted: false,
    },
    {
      name: "Malala Yousafzai",
      description: "The daughter of educational activist Ziauddin, Yousafzai was born to a Pashtun family in Mingora, Khyber Pakhtunkhwa, Pakistan. Her family came to run a chain of schools in the region.",
      category: "politics",
      picture: "https://www.eluniverso.com/resizer/orjI5eE1aU5XW2DkJz9ooh8j5GM=/670x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/QTR5SSNQWJGXDCRF7HOJXPDUPM.jpg",
      lastUpdated: "2020-12-10T23:41:07.120Z",
      votes: {
        positive: 18,
        negative: 3
      },
      hasVoted: true,
    },
    {
      name: "Elon Musk",
      description: "In 2002, Musk founded SpaceX, an aerospace manufacturer and space transport services company, of which he is CEO, CTO, and lead designer.",
      category: "business",
      picture: "https://www.eluniverso.com/resizer/orjI5eE1aU5XW2DkJz9ooh8j5GM=/670x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/QTR5SSNQWJGXDCRF7HOJXPDUPM.jpg",
      lastUpdated: "2020-12-20T23:43:38.041Z",
      votes: {
        positive: 1237,
        negative: 894
      },
      hasVoted: true,
    },
    {
      name: "Greta Thumberg",
      description: "Thunberg's activism started after convincing her parents to adopt several lifestyle choices to reduce their own carbon footprint.",
      category: "environment",
      picture: "https://www.eluniverso.com/resizer/orjI5eE1aU5XW2DkJz9ooh8j5GM=/670x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/QTR5SSNQWJGXDCRF7HOJXPDUPM.jpg",
      lastUpdated: "2021-02-26T23:44:50.326Z",
      votes: {
        positive: 118,
        negative: 45
      },
      hasVoted: true,
    }
  ],
};