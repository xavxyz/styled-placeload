import { storiesOf } from '@kadira/storybook';
import React from 'react';
import styled from 'styled-components';
import { withLoader } from '../index';

const Demo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border: 4px dashed steelblue;
  color: cornflowerblue;
  font-size: 20px;
  font-weight: bold;
`;

const EnhancedDemo = withLoader(Demo);

storiesOf('👋 Demo Placeload', module)
  .add('loading ', () => <EnhancedDemo loading>Hello Placeload</EnhancedDemo>)
  .add('not loading', () => <EnhancedDemo>Hello Placeload</EnhancedDemo>);
