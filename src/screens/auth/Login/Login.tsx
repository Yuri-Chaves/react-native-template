import { AuthForm, Screen } from '@components'
import { useAuthCredentialsManager } from '@services'
import React from 'react'

export function Login() {
  const { saveCredentials } = useAuthCredentialsManager()
  return (
    <Screen>
      <AuthForm
        onSubmit={({ password, user }) => saveCredentials({ username: user })}
      />
    </Screen>
  )
}
