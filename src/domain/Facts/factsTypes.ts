type LinkType = {
  url: string | null //+ "https://catfact.ninja/facts?page=2"
  label: string //+ "Next"
  active: boolean //+ false
}

export type FactType = {
  fact: string //+ "A cat can’t climb head first down a tree because every claw on a cat’s paw points the same way. To get down from a tree, a cat must back down."
  length: number //+ 142
}

export interface FactItem extends FactType {
  id: number
}

export type FactListType = {
  current_page: number //+ 1
  data: Array<FactType>
  from: number //+ 1
  to: number //+ 5
  last_page: number //+ 67
  path: string //+ "https://catfact.ninja/facts"
  first_page_url: string //+ "https://catfact.ninja/facts?page=1"
  last_page_url: string //+ "https://catfact.ninja/facts?page=67"
  next_page_url: string | null //+ "https://catfact.ninja/facts?page=2"
  prev_page_url: string | null //+ null
  per_page: number //+ 5
  links: Array<LinkType>
  total: number //+ 332
}
