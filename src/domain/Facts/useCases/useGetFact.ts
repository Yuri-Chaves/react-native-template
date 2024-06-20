import { QueryKeys } from '@infra'
import { useQuery } from '@tanstack/react-query'
import { factsService } from '../factsService'

export function useGetFact(params?: {
  /**
   * @description maximum length of returned fact
   */
  max_length: number
}) {
  const { data, isLoading, isError, refetch, isFetching } = useQuery({
    queryKey: [QueryKeys.facts],
    queryFn: () => factsService.getFact(params),
    staleTime: 1000 * 10, // 10 seconds,
  })

  return {
    fact: data,
    isLoading,
    isError,
    refetch,
    isFetching,
  }
}
