import { FC, useState } from 'react'
import ThumbsUp from '../assets/img/thumbs-up.svg';
import ThumbsDown from '../assets/img/thumbs-down.svg';
import { Button } from './';

interface VolationList {
  title: string;
}

const options = [
  {
    label: 'List',
    value: 'list',
  },
  {
    label: 'Grid',
    value: 'grid',
  }
]

const VotationList: FC<VolationList> = ({ title }) => {
  const [listView, setListView] = useState<string>('list');

  const onSelectListView = (type: string) => {
    setListView(type);
  };

  return (
    <section className="w-full mt-2">
      <div className="votation__list__header flex justify-between items-center px-4 lg:px-0">
        <h4 className="text-2xl">{title}</h4>
        <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="w-48 text-black bg-white hover:bg-gray-300 border-2 border-black focus:ring-2 focus:outline-none focus:ring-black font-medium text-sm px-4 py-2 flex justify-center items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
          {(listView === 'list') ? 'List' : 'Grid'}
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
        </button>
        <div id="dropdown" className="w-48 z-10 hidden bg-white divide-y divide-gray-100 shadow dark:bg-gray-700">
          <ul className="py-1 text-sm  dark:text-gray-700" aria-labelledby="dropdownDefault">
            {options.map(({ label, value }) => (
              <li onClick={() => onSelectListView(value)}>
                <span className={`block px-4 py-2 hover:bg-gray-100 text-black visited:text-black ${value === listView && 'bg-gray-400 hover:bg-gray-600'}`}>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={`votation__list my-4 px-4 md:px-0 grid ${listView === 'list' ? 'grid-cols-1' : 'grid-cols-2'}`}>
        <article className={`votation__item mb-2 h-[400px] ${listView === 'list' && 'md:h-[180px]'} relative`}>
          <div className="votation__container w-full h-full flex justify-between">
            <div className={`votation__picture w-full ${listView === 'list' && 'md:w-[30%]'} shrink-0 `}>
              <div className={`votation_winning bg-dark-teal w-16 h-16 flex justify-center items-center absolute top-[25%] sm:top-[30%] ${listView === 'list' && 'md:w-12 md:h-12 md:top-0'}`}>
                <img src={ThumbsUp} alt="votation_winning" className="w-8 h-8 md:w-6 md:h-6" />
              </div>
              <img
                src="https://www.eluniverso.com/resizer/orjI5eE1aU5XW2DkJz9ooh8j5GM=/670x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/QTR5SSNQWJGXDCRF7HOJXPDUPM.jpg"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div
              className={`votation__info w-full md:w-[80%] h-full px-4 py-3 
                flex flex-col justify-center  items-center absolute right-0 
                votation-card-gradient text-white 
                ${listView === 'list' && 'md:flex-row md:justify-between md:items-start'}`}
            >
              <div className={`votation__data w-[75%] ${listView === 'list' ? 'md:w-[70%]' : 'md:w-full'}`}>
                <h6 className="votation__name text-5xl md:text-3xl pb-2">Elon Musk</h6>
                <p className="votation__description text-[16px] md:text-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis eaque atque reiciendis enim.</p>
              </div>
              <div className={`votation__actions w-[90%] mt-3 ${listView === 'list' ? 'md:w-[30%] md:mt-0' : 'md:w-full'}`}>
                <div className="votation__date text-[14px] text-right font-bold">1 month ago in Entertainment</div>
                <div className="votation_buttons mt-3 flex justify-end items-center">
                  <Button
                    type="button"
                    color="hover:bg-main-teal bg-dark-teal"
                    icon={ThumbsUp}
                    classes="w-16 h-16 md:w-10 md:h-10 mr-5 md:mr-2"
                    iconClasses="w-8 h-8 md:w-5 md:h-5"
                  />
                  <Button
                    type="button"
                    color="hover:bg-main-yellow bg-dark-yellow"
                    icon={ThumbsDown}
                    classes="w-16 h-16 md:w-10 md:h-10 mr-5 md:mr-2"
                    iconClasses="w-8 h-8 md:w-5 md:h-5"
                  />
                  <Button
                    type="button"
                    color="bg-black-transparent-dark border-2 border-white text-white"
                    text="Vote now"
                    classes="h-20 w-48 md:h-10 md:w-auto px-5 md:px-2 lg:px-5"
                  // iconClasses="w-5 h-5"
                  />
                </div>
              </div>
            </div>
            <div className="votation__bar absolute bottom-0 flex justify-between w-full h-20 md:h-12">
              <div className="votation__possitive w-[50%] h-full bg-dark-teal flex items-center justify-start px-6 md:px-4">
                <div className="votation__thumb">
                  <img src={ThumbsUp} alt="thumbs_up" className="w-10 h-10 md:w-6 md:h-6" />
                </div>
                <div className="votation__value text-4xl pl-4 md:text-2xl md:pl-2 text-white">25.5%</div>
              </div>
              <div className="votation__negative  w-[50%] h-full bg-dark-yellow flex items-center justify-end px-6 md:px-4">
                <div className="votation__value text-4xl pr-4 md:text-2xl md:pr-2 text-white">25.5%</div>
                <div className="votation__thumb">
                  <img src={ThumbsDown} alt="thumbs_down" className="w-10 h-10 md:w-6 md:h-6" />
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default VotationList;