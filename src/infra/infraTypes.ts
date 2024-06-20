export interface MutationOptions<TData> {
  onSuccess?: (data: TData) => void
  onError?: (message: string) => void
  errorMessage?: string
}

export interface UsePaginatedListResult<TData> {
  list: TData[]
  isError: boolean | null
  isLoading: boolean
  refresh: () => void
  fetchNextPage: () => void
  hasNextPage: boolean
}

export enum QueryKeys {
  example = 'example', // !This one is used by plop generators
  breeds = 'breeds',
  facts = 'facts',
}
