import { catApi } from '@instances'

import { BreedListType } from './breedsTypes'

async function exampleBreeds(params?: {
  /**
   * @description limit the amount of results returned
   */
  limit?: number
}): Promise<BreedListType> {
  const response = await catApi.get<BreedListType>('/breeds', { params })

  return response.data
}

export const breedsApi = {
  exampleBreeds,
}
