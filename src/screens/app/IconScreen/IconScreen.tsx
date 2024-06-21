import React from 'react'

import { Box, Icon, Screen, Text } from '@components'

export function IconScreen() {
  return (
    <Screen
      boxProps={{ alignItems: 'flex-start', justifyContent: 'flex-start' }}>
      <Box alignSelf="center">
        <Text preset="BodyLarge" weight="600">
          Icons already installed:
        </Text>
        <Box
          flexWrap="wrap"
          width={120}
          alignSelf="center"
          flexDirection="row"
          gap="s8">
          <Icon name="accountCircle" />
          <Icon name="accountCircleOutline" />
          <Icon name="alert" />
          <Icon name="alertCircle" />
          <Icon name="alertOctagon" />
          <Icon name="checkCircle" />
          <Icon name="chevronDown" />
          <Icon name="chevronUp" />
          <Icon name="delete" />
          <Icon name="eye" />
          <Icon name="eyeOff" />
          <Icon name="eyeOffOutline" />
          <Icon name="eyeOutline" />
          <Icon name="formTextbox" />
          <Icon name="formTextboxPassword" />
          <Icon name="formatLetterSpacing" />
          <Icon name="help" />
          <Icon name="informationVariant" />
          <Icon name="login" />
        </Box>
      </Box>
      <Text preset="TitleLarge" weight="700" color="primary">
        How to add more icons?
      </Text>
      <Text preset="BodyMedium" weight="600">
        Use plop to add new icons with the command.
      </Text>
      <Text preset="BodyLarge" color="secondary">
        yarn plop
      </Text>
      <Text preset="BodyMedium" weight="600">
        If you have already installed the CLI globally:
      </Text>
      <Text preset="BodyLarge" color="secondary">
        plop
      </Text>
      <Text preset="BodyMedium" weight="600">
        The generator will create the icon file in the{' '}
        <Text color="androidBlue">'src/assets/icons/tsx' </Text>
        folder, just replace it with the desired icon's SVG.
      </Text>
      <Text preset="BodyMedium" weight="600">
        For reference purposes, each icon has its corresponding .svg file.
      </Text>
      <Text>
        <Text color="errorM">Tip:</Text> Install the{' '}
        <Text color="androidBlue">Svg Preview</Text> extension to visualize the
        icon.
      </Text>
    </Screen>
  )
}
