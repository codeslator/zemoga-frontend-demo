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
      <div className="votation__list my-4">
        <article className="votation__item mb-2 h-[180px] relative">
          <div className="votation__container w-full h-full flex justify-between">
            <div className="votation__picture w-full md:w-[30%] shrink-0 ">
              <div className="votation_winning bg-dark-teal w-12 h-12 flex justify-center items-center absolute">
                <img src={ThumbsUp} alt="votation_winning" className="w-6 h-6" />
              </div>
              <img
                src="https://www.eluniverso.com/resizer/orjI5eE1aU5XW2DkJz9ooh8j5GM=/670x670/smart/filters:quality(70)/cloudfront-us-east-1.images.arcpublishing.com/eluniverso/QTR5SSNQWJGXDCRF7HOJXPDUPM.jpg"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="votation__info w-full md:w-[78%] h-full px-4 py-3 flex justify-between absolute right-0 votation-card-gradient text-white">
              <div className="votation__data w-[70%]">
                <h6 className="votation__name text-lg lg:text-3xl pb-2">Elon Musk</h6>
                <p className="votation__description text-base lg:text-md">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis eaque atque reiciendis enim.</p>
              </div>
              <div className="votation__actions w-[30%]">
                <div className="votation__date text-[14px] text-right">1 month ago in Entertainment</div>
                <div className="votation_buttons mt-3 flex justify-end">
                  <Button
                    type="button"
                    color="hover:bg-main-teal bg-dark-teal"
                    icon={ThumbsUp}
                    classes="w-10 h-10 mr-2"
                    iconClasses="w-5 h-5"
                  />
                  <Button
                    type="button"
                    color="hover:bg-main-yellow bg-dark-yellow"
                    icon={ThumbsDown}
                    classes="w-10 h-10 mr-2"
                    iconClasses="w-5 h-5"
                  />
                  <Button
                    type="button"
                    color="bg-black-transparent-dark border-2 border-white text-white"
                    text="Vote now"
                    classes="h-10 px-5"
                  // iconClasses="w-5 h-5"
                  />
                </div>
              </div>
            </div>
            <div className="votation__bar absolute bottom-0 flex justify-between w-full h-12">
              <div className="votation__possitive w-[50%] h-full bg-dark-teal flex items-center justify-start px-4">
                <div className="votation__thumb">
                  <img src={ThumbsUp} alt="thumbs_up" className="w-6 h-6" />
                </div>
                <div className="votation__value text-2xl pl-2 text-white">25.5%</div>
              </div>
              <div className="votation__negative  w-[50%] h-full bg-dark-yellow flex items-center justify-end px-4">
                <div className="votation__value text-2xl pr-2 text-white">25.5%</div>
                <div className="votation__thumb">
                  <img src={ThumbsDown} alt="thumbs_down" className="w-6 h-6" />
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