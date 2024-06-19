import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { AppStackParamList } from './app.routes'
import { AuthStackParamList } from './auth.routes'

export type AppScreenProps<RouteName extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, RouteName>

export type AuthScreensProps<Screen extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, Screen>
