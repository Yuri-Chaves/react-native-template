import { catApi } from '@instances'
import { FactListType, FactType } from './factsTypes'

async function getFact(params?: {
  /**
   * @description maximum length of returned fact
   */
  max_length: number
}): Promise<string> {
  const response = await catApi.get<FactType>('/fact', {
    params,
  })
  return response.data.fact
}

async function getFactsList(params?: {
  /**
   * @description maximum length of returned fact
   */
  max_length?: number
  /**
   * @description limit the amount of results returned
   */
  limit?: number
}): Promise<FactListType> {
  const response = await catApi.get<FactListType>('/facts', { params })
  return response.data
}

export const factsApi = {
  getFact,
  getFactsList,
}
