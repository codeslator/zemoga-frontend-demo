import { HeroData, BannerData } from '../../global/interfaces';

export interface WebsiteState {
  title: string;
  heroCard: HeroData;
  bannerTop: BannerData;
  bannerBottom: BannerData;
}

export const websiteState: WebsiteState = {
  title: 'Rule of thumb.',
  heroCard: {
    hairline: 'What\'s your opinion on',
    title: 'Pope Francis?',
    description: 'He’s talking tough on clergy sexual abuse, or is he just another pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)',
    callToAction: 'What’s Your Veredict?',
  },
  bannerTop: {
    title: 'Be counted',
    hairline: 'Speak out. Be heard.',
    text: 'Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.'
  },
  bannerBottom: {
    title: 'Is there anyone else you would want us to add?',
    callToAction: 'Submit a name',
  }
};