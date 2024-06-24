import { AuthForm, Screen, Text } from '@components'
import { useAuthCredentialsManager } from '@services'
import React from 'react'

export function Login() {
  const { saveCredentials } = useAuthCredentialsManager()
  return (
    <Screen>
      <Text>The application doesn't have an authentication system</Text>
      <AuthForm
        onSubmit={({ password, user }) => saveCredentials({ username: user })}
      />
    </Screen>
  )
}
