import { configure, addDecorator } from '@kadira/storybook';
import React from 'react';
import styled from 'styled-components';

const req = require.context('../src/stories', true, /.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
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
