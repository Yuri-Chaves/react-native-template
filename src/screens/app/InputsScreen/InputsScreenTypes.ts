import { Dispatch, SetStateAction } from 'react'

export interface InputsScreenContextProps {
  value: string
  setValue: Dispatch<SetStateAction<string>>
}
