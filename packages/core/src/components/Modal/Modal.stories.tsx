import React from 'react';
import { useArgs } from '@storybook/client-api';
import { Text } from '../Text';
import BedrockModal from './Modal';

import type { Props } from './Modal.types';

export default {
  title: 'Modal',
  component: BedrockModal,
  argTypes: {
    open: {
      control: { type: 'boolean' },
    },
  },
  args: {
    open: false,
    noPadding: false,
  },
};

export const Modal = (props: Props) => {
  const [args, updateArgs] = useArgs();

  return (
    <BedrockModal {...props} onClose={() => updateArgs({ open: false })}>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>
    </BedrockModal>
  );
};
