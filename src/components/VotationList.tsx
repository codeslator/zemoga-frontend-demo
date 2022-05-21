import { FC, useState } from 'react'

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
      <div className="votation__list">
        
      </div>
    </section>
  );
};

export default VotationList;