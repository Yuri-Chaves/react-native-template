import { Box, Icon, Text } from '@components'
import { FactItem } from '@domain'
import React from 'react'
import { ScrollView } from 'react-native'

interface Props {
  item: FactItem
}

export function FactItemBox({ item }: Props) {
  return (
    <Box
      borderColor="backgroundContrast"
      borderWidth={1}
      borderRadius="br4"
      height={55}
      gap="s4"
      paddingRight="s8"
      alignItems="center"
      marginVertical="s4"
      flexDirection="row">
      <Box
        width={50}
        backgroundColor="backgroundContrast"
        alignItems="center"
        height="100%"
        justifyContent="center">
        <Icon name="formatLetterSpacing" color="backgroundColor" />
        <Text color="backgroundColor">{item.length}</Text>
      </Box>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Text>{item.fact}</Text>
      </ScrollView>
    </Box>
  )
}
