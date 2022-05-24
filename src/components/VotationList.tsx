import { FC } from 'react';
import { useUI, useVotations } from '../hooks';
import VotationItem from './VotationItem';

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
  const { layoutType, handleLayoutType } = useUI();
  const { candidates } = useVotations();

  return (
    <section className="w-full mt-2">
      <div className="votation__list__header flex justify-between items-center px-4 lg:px-0">
        <h4 className="text-2xl">{title}</h4>
        <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="hidden w-48 text-black bg-white hover:bg-gray-300 border-2 border-black focus:ring-2 focus:outline-none focus:ring-black font-medium text-sm px-4 py-2 md:flex justify-center items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
          {(layoutType === 'list') ? 'List' : 'Grid'}
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </button>
        <div id="dropdown" className="w-48 z-10 hidden bg-white shadow dark:bg-gray-700">
          <ul className="text-sm border-2 border-black dark:text-gray-700" aria-labelledby="dropdownDefault">
            {options.map(({ label, value }) => (
              <li onClick={() => handleLayoutType(value)} key={value}>
                <span className={`block px-4 py-2 hover:bg-gray-100 text-black visited:text-black ${value === layoutType && 'bg-gray-400 hover:bg-gray-600'}`}>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={`votation__list my-4 px-4 md:px-0 grid ${layoutType === 'list' ? 'grid-cols-1' : 'grid-cols-2'}`}>
        {candidates.map((candidate, i) => (
          <VotationItem candidate={candidate} type={layoutType} key={i} />
        ))}
      </div>
    </section>
  );
};

export default VotationList;