import React from 'react';
import {shallow} from 'enzyme';

import Letter from '../../../src/components/GuessWord/Letter';

describe('GuessWord/Letter', () => {
  it('renders', () => {
    const result = shallow(<Letter letter='f' correct={true} />);
    expect(result).to.exist;
  });
});
