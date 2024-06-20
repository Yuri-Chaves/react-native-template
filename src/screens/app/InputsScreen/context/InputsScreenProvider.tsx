import React, { createContext, useState } from 'react'

import { InputsScreenContextProps } from '../InputsScreenTypes'

export const InputsScreenContext = createContext<InputsScreenContextProps>(
  {} as InputsScreenContextProps,
)

export function InputsScreenProvider({ children }: React.PropsWithChildren) {
  const [value, setValue] = useState('Input Data')

  const values: InputsScreenContextProps = {
    value,
    setValue,
  }

  return (
    <InputsScreenContext.Provider value={values}>
      {children}
    </InputsScreenContext.Provider>
  )
}
