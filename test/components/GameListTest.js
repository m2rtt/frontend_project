import React from 'react';
import {shallow} from 'enzyme';

import CreateGame from '../../src/components/CreateGame';

describe('CreateGame', () => {
  it('has buttons to create games', () => {
    const result = shallow(<CreateGame onCreateGame={sinon.stub()} />);
    expect(result).to.have.exactly(2).descendants('button');
  });

  it('calls props.onCreateGame when create number game button clicked', () => {
    const onCreateGame = sinon.stub();
    const result = shallow(<CreateGame onCreateGame={onCreateGame} />);
    const createNumberButton = result.find('button[data-game-type=\'guess_number\']');
    createNumberButton.simulate('click');
    expect(onCreateGame).to.have.been.calledWith({type: 'guess_number'});
  });

  it('calls props.onCreateGame when create word game button clicked', () => {
    const onCreateGame = sinon.stub();
    const result = shallow(<CreateGame onCreateGame={onCreateGame} />);
    const createNumberButton = result.find('button[data-game-type=\'guess_word\']');
    createNumberButton.simulate('click');
    expect(onCreateGame).to.have.been.calledWith({type: 'guess_word'});
  });
});
