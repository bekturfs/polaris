import React from 'react';
import {AlphaStack, Badge, Box, Inline, Text} from '@shopify/polaris';

import {withPolarisExample} from '../../src/components/PolarisExampleWrapper';

function AlphaStackWithSpacingExample() {
  return (
    <div
      style={{
        background:
          'repeating-linear-gradient(-45deg, var(--p-action-primary), var(--p-action-primary) 1px, var(--p-surface-primary-selected-hovered) 1px, var(--p-surface-primary-selected-hovered) 10px)',
      }}
    >
      <AlphaStack spacing="5">
        <Box background="action-primary" padding="4" paddingLeft="2">
          <Box
            background="surface-primary-selected-pressed"
            color="text-on-interactive"
          >
            <Text as="h2" variant="bodyMd" fontWeight="medium">
              Stack child
            </Text>
          </Box>
        </Box>
        <Box background="action-primary" padding="4" paddingLeft="2">
          <Box
            background="surface-primary-selected-pressed"
            color="text-on-interactive"
          >
            <Text as="h2" variant="bodyMd" fontWeight="medium">
              Stack child
            </Text>
          </Box>
        </Box>
        <Box background="action-primary" padding="4" paddingLeft="2">
          <Box
            background="surface-primary-selected-pressed"
            color="text-on-interactive"
          >
            <Text as="h2" variant="bodyMd" fontWeight="medium">
              Stack child
            </Text>
          </Box>
        </Box>
      </AlphaStack>
    </div>
  );
}

export default withPolarisExample(AlphaStackWithSpacingExample);
