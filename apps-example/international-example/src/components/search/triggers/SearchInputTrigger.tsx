'use client';

import { classNames } from '@marulloc/components-library/utils';
import SearchModal from '../SearchModal';
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import { useSearchParams } from 'next/navigation';
import { localTheme } from '@/theme/local-theme';

const SearchFakeInputTrigger = () => {
  const searchParams = useSearchParams();

  return (
    <SearchModal
      Trigger={
        <div className={classNames('isolate relative group')}>
          <div className="absolute inset-y-0 left-0 flex items-center pl-3">
            <HiOutlineMagnifyingGlass
              className={classNames('h-5 w-5', 'group-hover:scale-110', localTheme.text.color.base.muted)}
              aria-hidden="true"
            />
          </div>
          <input
            id="fake-search"
            name="search"
            placeholder="Search ..."
            defaultValue={searchParams.get('query') || ''}
            type="search"
            className={classNames(
              'block w-full',
              'rounded-lg bg-transparent',
              'text-xs ',
              'pl-10 pr-3 py-2',
              'border',
              localTheme.border.base.main,
            )}
          />
          <span className="sr-only">Search Items & Collections </span>
          <div className=" cursor-text absolute inset-0 z-10"></div>
        </div>
      }
    />
  );
};

export default SearchFakeInputTrigger;
