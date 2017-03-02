import { storiesOf } from '@kadira/storybook';
import React from 'react';
import styled from 'styled-components';
import { withLoader } from '../index';

const LoremParagraph = styled.p`
  color: rgb(290,190,209);
`;

const EnhancedParagraph = withLoader(LoremParagraph);

storiesOf('✍️ Paragraph Placeload', module)
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
