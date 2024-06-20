import { Page } from '@types'
import { FactItem, FactListType, FactType } from './factsTypes'

function addIdOnItem(item: FactType): FactItem {
  return {
    fact: item.fact,
    length: item.length,
    id: Math.random(),
  }
}

function toInfraPageModel(data: FactListType): Page<FactItem> {
  return {
    data: data.data.map(item => addIdOnItem(item)),
    meta: {
      total: data.total,
      perPage: data.per_page,
      currentPage: data.current_page,
      lastPage: data.last_page,
      hasNextPage: !!data.next_page_url,
      hasPreviousPage: !!data.prev_page_url,
    },
  }
}

export const factsAdapter = {
  toInfraPageModel,
}
