import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Placeload from '../index';

const containerStyle = {
  width: 200,
  height: 200,
  border: '1px dashed cornflowerblue',
};

const Hello = () => <div style={containerStyle}>Hello Placeload</div>;

storiesOf('Square Placeload', module)
  .addDecorator(story => (
    <div
      style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
    >
      {story()}
    </div>
  ))
  .add('with loading', () => <Placeload loading><Hello /></Placeload>)
  .add('without loading', () => <Placeload><Hello /></Placeload>);
