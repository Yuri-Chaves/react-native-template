import {
  Box,
  BoxProps,
  Button,
  PasswordInput,
  TextInput,
  TextInputRef,
} from '@components'
import React, { useRef } from 'react'
import { Controller, useForm } from 'react-hook-form'

interface AuthFormProps {
  boxProps?: BoxProps
  inError?: boolean
  onSubmit: ({ password, user }: AuthFormFields) => void
}

type AuthFormFields = {
  user: string
  password: string
}

export function AuthForm({
  boxProps,
  inError = false,
  onSubmit,
}: AuthFormProps) {
  const userRef = useRef<TextInputRef>(null)
  const passwordRef = useRef<TextInputRef>(null)

  const { control, formState, handleSubmit } = useForm<AuthFormFields>({
    defaultValues: {
      user: '',
      password: '',
    },
    mode: 'onChange',
  })
  return (
    <Box flexDirection="row">
      <Box flex={1} gap="s8" {...boxProps}>
        <Controller
          name="user"
          control={control}
          rules={{
            required: 'Username is required',
          }}
          render={({ field, fieldState }) => (
            <TextInput
              forwardRef={userRef}
              label="User"
              autoFocus
              autoCapitalize="none"
              placeholder="Type any username"
              value={field.value}
              onChangeText={field.onChange}
              onError={inError || !fieldState.error?.message}
              errorMessage={fieldState.error?.message}
              leftIcon="accountCircleOutline"
              onSubmitEditing={() => passwordRef.current?.focus()}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={{
            required: 'Password is required',
          }}
          render={({ field, fieldState }) => (
            <PasswordInput
              forwardRef={passwordRef}
              label="Password"
              autoCapitalize="none"
              placeholder="Type something"
              value={field.value}
              onChangeText={field.onChange}
              onError={inError}
              errorMessage={fieldState.error?.message}
              onSubmitEditing={handleSubmit(onSubmit)}
              eyeOutlined
            />
          )}
        />
        <Button
          title="Login"
          leftIcon="login"
          marginTop="s8"
          disabled={!formState.isValid}
          alignSelf="flex-end"
          onPress={handleSubmit(onSubmit)}
        />
      </Box>
    </Box>
  )
}
