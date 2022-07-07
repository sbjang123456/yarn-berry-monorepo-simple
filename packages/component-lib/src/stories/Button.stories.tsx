import type { ComponentStory, ComponentMeta } from '@storybook/react';
import type { ButtonProps } from '../base/button/Button';
import { Button } from '../base/button/Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  parameters: {
    notes: 'some documentation here',
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <Button {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button1',
};
Primary.parameters = {
  notes: 'Primary notes text',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button2',
};
Secondary.parameters = {
  notes: 'Secondary notes text',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button3',
};
Large.parameters = {
  notes: 'Large notes text',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  label: 'Button4',
};
Medium.parameters = {
  notes: 'Medium notes text',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button5',
};
Small.parameters = {
  notes: 'Small notes text',
};
