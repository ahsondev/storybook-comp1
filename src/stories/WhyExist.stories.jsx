import React from 'react';

import { WhyExist } from './WhyExist';

export default {
  title: 'Example/WhyExist',
  component: WhyExist,
};

const Template = (args) => <WhyExist {...args} />;

export const Normal = Template.bind({});
Normal.args = {
};

