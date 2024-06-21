import { breedsAdapter } from './breedsAdapter'
import { breedsApi } from './breedsApi'

/**
 * @description Returns the breeds in infra page model
 */
async function getBreeds(page: number) {
  try {
    const catBreadsList = await breedsApi.exampleBreeds({ limit: 10 })
    return breedsAdapter.toInfraPageModel(catBreadsList)
  } catch (error) {
    throw new Error('Failed to get facts list')
  }
}

/**
 * @description Returns the breeds in pure model
 * @type { breed: string; country: string; origin: string; coat: string; pattern: string; }
 */
async function getSomeBreeds(limit: number) {
  try {
    const catBreadsList = await breedsApi.exampleBreeds({ limit })
    return catBreadsList.data
  } catch (error) {
    throw new Error('Failed to get facts list')
  }
}

export const breedsService = {
  getBreeds,
  getSomeBreeds,
}
