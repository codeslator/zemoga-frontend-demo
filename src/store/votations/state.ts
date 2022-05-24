import { v4 as uuidv4 } from 'uuid';
import { CandidateData } from '../../global/interfaces';

export interface VotationsState {
  candidates: Array<CandidateData>;
}

export const votationsState: VotationsState = {
  candidates: [
    {
      id: uuidv4(),
      name: "Kanye West",
      description: "Born in Atlanta and raised in Chicago, West was first known as a producer for Roc-A-Fella Records in the early 2000s, producing singles for several mainstream artists.",
      category: "entertainment",
      picture: "https://rollingstoneindia.com/wp-content/uploads/2011/12/Kanye-West-Square.jpg",
      lastUpdated: "2020-03-10T23:08:57.892Z",
      votes: {
        positive: 23,
        negative: 36
      },
      hasVoted: false,
    },
    {
      id: uuidv4(),
      name: "Mark Zuckerberg",
      description: "Born in White Plains, New York, Zuckerberg attended Harvard University, where he launched the Facebook social networking service from his dormitory room on February 4, 2004.",
      category: "business",
      picture: "https://dircomfidencial.com/wp-content/uploads/2021/10/mark.jpg",
      lastUpdated: "2021-02-14T23:10:19.134Z",
      votes: {
        positive: 418,
        negative: 324
      },
      hasVoted: false,

    },
    {
      id: uuidv4(),
      name: "Cristina Fernández de Kirchner",
      description: "Her first term of office started with a conflict with the agricultural sector, and her proposed taxation system was rejected.",
      category: "politics",
      picture: "https://static.treslineas.com.ar/foto/pers_Cristina_Fernandez_de_Kirchner16121514060.jpg?imgres=500x500x80",
      lastUpdated: "2020-12-10T23:41:07.120Z",
      votes: {
        positive: 45,
        negative: 97
      },
      hasVoted: true,
    },
    {
      id: uuidv4(),
      name: "Malala Yousafzai",
      description: "The daughter of educational activist Ziauddin, Yousafzai was born to a Pashtun family in Mingora, Khyber Pakhtunkhwa, Pakistan. Her family came to run a chain of schools in the region.",
      category: "politics",
      picture: "https://i1.sndcdn.com/artworks-000394079556-9hg1jr-t500x500.jpg",
      lastUpdated: "2020-12-10T23:41:07.120Z",
      votes: {
        positive: 18,
        negative: 3
      },
      hasVoted: false,
    },
    {
      id: uuidv4(),
      name: "Elon Musk",
      description: "In 2002, Musk founded SpaceX, an aerospace manufacturer and space transport services company, of which he is CEO, CTO, and lead designer.",
      category: "business",
      picture: "https://gestion.pe/resizer/q0raUgQOgwcyOcHNu52kDQk77cM=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/SMTXVEJFZRHNZDPDBI4SWLFM24.jpg",
      lastUpdated: "2020-12-20T23:43:38.041Z",
      votes: {
        positive: 1237,
        negative: 894
      },
      hasVoted: false,
    },
    {
      id: uuidv4(),
      name: "Greta Thumberg",
      description: "Thunberg's activism started after convincing her parents to adopt several lifestyle choices to reduce their own carbon footprint.",
      category: "environment",
      picture: "https://daijiworld.ap-south-1.linodeobjects.com/iWeb/daijiworld/images3/greta_140221-1.jpg",
      lastUpdated: "2021-02-26T23:44:50.326Z",
      votes: {
        positive: 118,
        negative: 45
      },
      hasVoted: false,
    }
  ],
};