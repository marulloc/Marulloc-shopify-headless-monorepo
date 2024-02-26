import { ToolkitSortKey } from '@/@marulloc-shopify-nextapi/v24.01/services/@toolkit-types/toolkit-search';
import { localTheme } from '@/theme/local-theme';
import { splitLocale } from '@/utils/locale';
import { classNames } from '@marulloc/components-library/utils';
import SearchFakeInputTrigger from '@/components/search/SearchModal/triggers/SearchInputTrigger';
import { Suspense } from 'react';
import SearchResult, { SearchResultSkeleton } from '@/components/search/SearchResult';
import { ServerRuntime } from 'next';

type TParams = { locale: string };
type TSearchParams = { [key: string]: string | string[] | undefined };

export const runtime: ServerRuntime = 'edge';

const SearchPage = async ({ params, searchParams }: { params: TParams; searchParams?: TSearchParams }) => {
  const { sort, query, filter } = searchParams as { [key: string]: string };
  const { countryCode, languageCode } = splitLocale(params.locale);

  return (
    <div>
      <div
        className={classNames(
          localTheme.spacing.padding.x.medium,
          localTheme.spacing.padding.y.small,
          localTheme.fill.base.main,
          localTheme.border.base.main,
          'border-b',
          'sticky top-16 z-20',
          'bg-opacity-40 backdrop-blur-sm',
        )}
      >
        <div className="w-full rounded-xl bg-gray-50 bg-opacity-80">
          <SearchFakeInputTrigger />
        </div>
      </div>

      <section className={classNames(localTheme.spacing.padding.x.medium, localTheme.spacing.padding.y.small)}>
        <Suspense
          fallback={<SearchResultSkeleton />}
          key={`${query}-${sort}-${filter}`} // for remount (making suspense)
        >
          <SearchResult
            query={query}
            sort={sort as ToolkitSortKey}
            locale={{ country: countryCode, language: languageCode }}
          />
        </Suspense>
      </section>
    </div>
  );
};

export default SearchPage;
