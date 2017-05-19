import React from 'react';
import {shallow} from 'enzyme';

import Players from '../../../src/components/websocket/Players';

describe('Websocket playerlist', () => {
  it('renders no players when no players', () => {
    const result = shallow(<Players playerInfo={{playersList: []}} />);
    expect(result).not.to.have.descendants;
  });

  it('renders players when there are some', () => {
    const result = shallow(
      <Players playerInfo={{playerId: '1234', playersList: [
        {name: 'asdf', id: '12345'},
        {name: 'asf', id: '125'}
      ]}}
    />);
    expect(result).to.have.exactly(2).descendants('h3');
  });
  it('renders text (you) next to own name', () => {
    const result = shallow(
      <Players playerInfo={{playerId: '1234', playersList: [
        {name: 'asdf', id: '12345'},
        {name: 'asf', id: '1234'}
      ]}}
    />);
    expect(result).to.have.exactly(2).descendants('h3');
    expect(result.node.props.children[1].props.children.length).to.equal(2);
    expect(result.node.props.children[1].props.children.indexOf('asf')).to.not.equal(-1);
    expect(result.node.props.children[1].props.children.indexOf(' (you)')).to.not.equal(-1);
  });
});
