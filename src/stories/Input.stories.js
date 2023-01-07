import React from 'react';
import Input from '../components/Input.jsx';

export default {
  title: 'Input',
  component: Input,
};

export const Primary = () => <Input label={'First Name*'} type='text' />;
