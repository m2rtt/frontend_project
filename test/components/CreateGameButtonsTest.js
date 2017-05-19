import React from 'react';
import {shallow} from 'enzyme';

import CreateGameButtons from '../../src/components/CreateGameButtons';

describe('CreateGameButtons', () => {
  it('contains two buttons', () => {
    const result = shallow(<CreateGameButtons />);
    expect(result).to.have.exactly(2).descendants('button');
  });
});
