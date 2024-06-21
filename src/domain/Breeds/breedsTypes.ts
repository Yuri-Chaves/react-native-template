type LinkType = {
  url: string | null //+ "https://catfact.ninja/breeds?page=2"
  label: string //+ "Next"
  active: boolean //+ false
}

export type BreedType = {
  breed: string //+ Abyssinian
  country: string //+ Ethiopia
  origin: string //+ Natural/Standard
  coat: string //+ Short
  pattern: string //+ Ticked
}

export interface BreedItem extends BreedType {
  id: number
}

export type BreedListType = {
  current_page: number //+ 1
  data: Array<BreedType>
  from: number //+ 1
  to: number //+ 5
  last_page: number //+ 20
  path: string //+ "https://catfact.ninja/breeds"
  first_page_url: string //+ "https://catfact.ninja/breeds?page=1"
  last_page_url: string //+ "https://catfact.ninja/breeds?page=67"
  next_page_url: string | null //+ "https://catfact.ninja/breeds?page=2"
  prev_page_url: string | null //+ null
  per_page: number //+ 5
  links: Array<LinkType>
  total: number //+ 98
}
