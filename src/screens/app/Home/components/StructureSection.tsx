import { Text } from '@components'
import React from 'react'

export function StructureSection() {
  return (
    <>
      <Text preset="BodyLarge">
        🔹 Understand the project{' '}
        <Text preset="BodyLarge" color="androidGreen" weight="700">
          Structure
        </Text>
        :
      </Text>
      <Text>
        🔹 The <Text color="androidBlue">assets</Text> folder contains{' '}
        <Text color="errorM">font files</Text> and{' '}
        <Text color="errorM">icons</Text> used by the project.
      </Text>
      <Text>
        🔹 The <Text color="androidBlue">components</Text> folder contains some
        basic <Text color="errorM">components</Text>, you can view them in the{' '}
        <Text color="successM">"see the project components"</Text> section.
      </Text>
      <Text>
        🔹 The <Text color="androidBlue">domain</Text> folder contains the
        entire <Text color="warningM">communication structure</Text> with the
        API, processing the received data (if necessary) before sending it to
        the
        <Text color="infoD" weight="700">
          {' '}
          application layer
        </Text>
        .
      </Text>
      <Text>
        🔹 The <Text color="androidBlue">hooks</Text> folder contains some{' '}
        <Text color="warningM">custom hooks</Text>, namely{' '}
        <Text color="errorM">useAppSafeArea</Text> and{' '}
        <Text color="errorM">useAppTheme</Text>.
      </Text>
      <Text>
        🔹 The <Text color="androidBlue">infra</Text> folder contains the{' '}
        <Text color="errorM">usePaginatedList</Text> hook and{' '}
        <Text color="errorM">typings</Text> to use with{' '}
        <Text color="infoD" weight="700">
          react query
        </Text>
        .
      </Text>
      <Text>
        🔹 The <Text color="androidBlue">instances</Text> folder contains the{' '}
        <Text color="infoD" weight="700">
          axios
        </Text>{' '}
        instances for the <Text color="errorM">APIs</Text>.
      </Text>
      <Text>
        🔹 The <Text color="androidBlue">routes</Text> folder contains the
        application's routes, separated into{' '}
        <Text color="errorM">app routes</Text> and{' '}
        <Text color="errorM">auth routes</Text>, along with their{' '}
        <Text color="errorM">typings</Text>.
      </Text>
      <Text>
        🔹 The <Text color="androidBlue">screens</Text> folder contains the
        screens for both the <Text color="errorM">app stack</Text> and the{' '}
        <Text color="errorM">auth stack</Text>.
      </Text>
      <Text>
        🔹 The <Text color="androidBlue">services</Text> folder is responsible
        for storing the project's services,{' '}
        <Text color="warningM">separate from the application layer</Text>. It
        contains the <Text color="errorM">authCredentials service</Text> and the{' '}
        <Text color="errorM">storage service</Text>.
      </Text>
      <Text>
        🔹 The <Text color="androidBlue">test</Text> folder contains the{' '}
        <Text color="warningM">configurations</Text> for the project's testing
        libraries (
        <Text color="infoD" weight="700">
          Jest
        </Text>
        ,{' '}
        <Text color="infoD" weight="700">
          React Native Testing Library
        </Text>
        , and{' '}
        <Text color="infoD" weight="700">
          MSW
        </Text>
        ).
      </Text>
      <Text>
        🔹 The <Text color="androidBlue">theme</Text> folder contains the
        application's <Text color="warningM">theme definitions</Text>. You can
        find <Text color="errorM">spacing</Text> and{' '}
        <Text color="errorM">border radius</Text> sizes in the{' '}
        <Text color="primary">theme.ts</Text> file, and{' '}
        <Text color="errorM">colors</Text> for both{' '}
        <Text color="infoD" weight="700">
          light
        </Text>{' '}
        and{' '}
        <Text color="infoD" weight="700">
          dark
        </Text>{' '}
        themes in the <Text color="primary">colors.ts</Text> file.
      </Text>
      <Text>
        🔹 The <Text color="androidBlue">types</Text> folder contains type
        definition files.
      </Text>
      <Text>
        🔹 The <Text color="androidBlue">utils</Text> folder contains utility{' '}
        <Text color="warningM">functions</Text>, such as{' '}
        <Text color="errorM">masks</Text> for the TextInput component.
      </Text>
    </>
  )
}
