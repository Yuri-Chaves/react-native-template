export interface MetaDataPage {
  total: number
  perPage: number
  currentPage: number
  lastPage: number
  hasNextPage: boolean
  hasPreviousPage: boolean
}

export interface Page<Data> {
  meta: MetaDataPage
  data: Data[]
}
