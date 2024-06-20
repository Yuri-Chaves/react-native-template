import { useEffect, useState } from 'react'

import { useInfiniteQuery } from '@tanstack/react-query'
import { Page } from '@types'
import { UsePaginatedListResult } from '..'

interface PaginatedListOptions {
  /**
   * @description Set this to `false` to disable automatic refetching when the query mounts or changes query keys. To `refetch` the query, use the refetch method returned from the `useQuery` instance. Defaults to `true`.
   */
  enabled?: boolean
  /**
   * @description The time in milliseconds after data is considered stale. If set to ``Infinity``, the data will never be considered stale.
   */
  staleTime?: number
}

export function usePaginatedList<Data>(
  queryKey: readonly unknown[],
  getList: (page: number) => Promise<Page<Data>>,
  options?: PaginatedListOptions,
): UsePaginatedListResult<Data> {
  const [list, setList] = useState<Data[]>([])

  const query = useInfiniteQuery({
    queryKey,
    initialPageParam: 1,
    queryFn: ({ pageParam }) => getList(pageParam),
    getNextPageParam: ({ meta }) =>
      meta.hasNextPage ? meta.currentPage + 1 : undefined,
    enabled: options?.enabled,
    staleTime: options?.staleTime,
  })

  useEffect(() => {
    if (query.data) {
      const newList = query.data.pages.reduce<Data[]>((prev, curr) => {
        return [...prev, ...curr.data]
      }, [])
      setList(newList)
    }
  }, [query.data])

  return {
    list,
    isError: query.isError,
    isLoading: query.isLoading,
    refresh: query.refetch,
    fetchNextPage: query.fetchNextPage,
    hasNextPage: !!query.hasNextPage,
  }
}
