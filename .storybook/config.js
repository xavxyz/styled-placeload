import { configure, addDecorator } from '@kadira/storybook';
import React from 'react';
import styled from 'styled-components';

function loadStories() {
  require('../src/stories');
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

addDecorator(story => (
  <Wrapper>
    {story()}
  </Wrapper>
));

configure(loadStories, module);
