import React from 'react'

import { Box, Icon, Screen, Text, iconNames } from '@components'

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
          width={152}
          alignSelf="center"
          flexDirection="row"
          gap="s8">
          {iconNames.map(name => (
            <Icon name={name} size={32} color="backgroundContrast" key={name} />
          ))}
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
