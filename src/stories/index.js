import { storiesOf } from '@kadira/storybook';
import React from 'react';
import styled from 'styled-components';
import { withLoader } from '../index';

const Hello = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border: 4px dashed steelblue;
  color: cornflowerblue;
  font-size: 20px;
  font-weight: bold;
  font-family: Open Sans, sans-serif;
`;

const LoremParagraph = styled.p`
  color: blue;
`;

const EnhancedHello = withLoader(Hello);
const EnhancedParagraph = withLoader(LoremParagraph);

storiesOf('Square Placeload', module)
  .add('loading ', () => <EnhancedHello loading>Hello Placeload</EnhancedHello>)
  .add('not loading', () => <EnhancedHello>Hello Placeload</EnhancedHello>);

storiesOf('Paragraph Placeload', module)
  .add('with loading', () => (
    <EnhancedParagraph loading>
      Cupcake ipsum dolor sit amet macaroon cookie. Topping pastry carrot cake tart jujubes cheesecake jelly-o. Danish icing cheesecake cake chocolate bar bear claw cake cookie sweet. Jujubes cake sweet lemon drops jujubes bear claw. Gummi bears pastry jelly beans dessert ice cream chocolate bar. Pudding chocolate cake tootsie roll sugar plum cake chocolate cake bonbon.
    </EnhancedParagraph>
  ))
  .add('without loading', () => (
    <EnhancedParagraph>
      Cupcake ipsum dolor sit amet macaroon cookie. Topping pastry carrot cake tart jujubes cheesecake jelly-o. Danish icing cheesecake cake chocolate bar bear claw cake cookie sweet. Jujubes cake sweet lemon drops jujubes bear claw. Gummi bears pastry jelly beans dessert ice cream chocolate bar. Pudding chocolate cake tootsie roll sugar plum cake chocolate cake bonbon.
    </EnhancedParagraph>
  ));
