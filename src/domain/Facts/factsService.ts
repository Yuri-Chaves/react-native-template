import { factsAdapter } from './factsAdapter'
import { factsApi } from './factsApi'

async function getFact(params?: {
  /**
   * @description maximum length of returned fact
   */
  max_length: number
}) {
  try {
    const catFact = await factsApi.getFact(params)
    console.log('service', catFact)
    return catFact
  } catch (error) {
    throw new Error('Failed to get fact')
  }
}

async function getFactsList(page: number) {
  try {
    const catFactsList = await factsApi.getFactsList({ limit: 10 })
    return factsAdapter.toInfraPageModel(catFactsList)
  } catch (error) {
    throw new Error('Failed to get facts list')
  }
}

export const factsService = {
  getFact,
  getFactsList,
}
