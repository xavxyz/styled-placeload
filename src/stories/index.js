import React from 'react';
import { storiesOf } from '@kadira/storybook';
import styled from 'styled-components';
import Placeload from '../index';

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Hello = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border: 1px dashed cornflowerblue;
  color: sienna;
  font-size: 20px;
  font-family: Open Sans, sans-serif;
`;

storiesOf('Square Placeload', module)
  .addDecorator(story => (
    <Wrapper>
      {story()}
    </Wrapper>
  ))
  .add('with loading', () => (
    <Placeload loading square={200}><Hello>Hello Placeload</Hello></Placeload>
  ))
  .add('without loading', () => <Placeload><Hello>Hello Placeload</Hello></Placeload>);
