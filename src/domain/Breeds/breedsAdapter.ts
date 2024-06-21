import { Page } from '@types'
import { BreedItem, BreedListType, BreedType } from './breedsTypes'

function addIdOnItem(item: BreedType): BreedItem {
  return {
    breed: item.breed,
    coat: item.coat,
    country: item.country,
    origin: item.origin,
    pattern: item.pattern,
    id: Math.random(),
  }
}

function toInfraPageModel(data: BreedListType): Page<BreedItem> {
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

export const breedsAdapter = {
  toInfraPageModel,
}
