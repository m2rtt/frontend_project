import React from 'react';
import {shallow} from 'enzyme';

import InputChangesOnSubmit from '../../src/components/InputChangesOnSubmit';

describe('InputChangesOnSubmit', () => {
  it('calls onSubmit and clears input when enter hit', () => {
    const onSubmit = sinon.stub();
    const result = shallow(<InputChangesOnSubmit onSubmit={onSubmit} type='text' />);
    const input = result.find('input');
    input.simulate('change', {target: {value: 'foo'}});
    input.simulate('keyup', {keyCode: 13});
    expect(onSubmit).to.have.been.calledWith('foo');
    expect(result.state()).to.eql({value: ''});
  });

  it('does not call onSubmit when no input', () => {
    const onSubmit = sinon.stub();
    const result = shallow(<InputChangesOnSubmit onSubmit={onSubmit} type='text' />);
    const input = result.find('input');
    input.simulate('keyup', {keyCode: 13});
    expect(onSubmit).not.to.have.been.called;
  });
});
