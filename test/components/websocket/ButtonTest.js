import React from 'react';
import {shallow} from 'enzyme';

import Button from '../../../src/components/websocket/Button';

describe('WebsocketButton', () => {
  it('shows input field and connect button if status is disconnected', () => {
    const onConnectPlayer = sinon.stub();
    const onDisconnectPlayer = sinon.stub();
    const result = shallow(<Button
                            playerInfo={{status: 'disconnected', reason: ''}}
                            onConnectPlayer={onConnectPlayer}
                            onDisconnectPlayer={onDisconnectPlayer}
                            />);
    expect(result.find('button').node).to.not.be.undefined;
    expect(result.find('input').node).to.not.be.undefined;
    const button = result.find('button');
    expect(button.node.props.children).to.eql('Connect');
  });
  it('shows reason text if status is disconnected and disconnect reason is "player-name-taken"', () => {
    const onConnectPlayer = sinon.stub();
    const onDisconnectPlayer = sinon.stub();
    const result = shallow(<Button
                            playerInfo={{status: 'disconnected', reason: 'player-name-taken'}}
                            onConnectPlayer={onConnectPlayer}
                            onDisconnectPlayer={onDisconnectPlayer}
                            />);
    expect(result.find('button').node).to.not.be.undefined;
    expect(result.find('input').node).to.not.be.undefined;
    const button = result.find('button');
    expect(button.node.props.children).to.eql('Connect');
    const text = result.find('h3');
    expect(text.node.props.children).to.eql('Player name is taken, choose another name.');
  });
  it('shows only disconnect button if status is connected', () => {
    const onConnectPlayer = sinon.stub();
    const onDisconnectPlayer = sinon.stub();
    const result = shallow(<Button
                            playerInfo={{status: 'connected', reason: ''}}
                            onConnectPlayer={onConnectPlayer}
                            onDisconnectPlayer={onDisconnectPlayer}
                            />);
    expect(result.find('button').node).to.not.be.undefined;
    expect(result.find('input').node).to.be.undefined;
    const button = result.find('button');
    expect(button.node.props.children).to.eql('Disconnect');
  });
  it('shows only text if status is connecting', () => {
    const onConnectPlayer = sinon.stub();
    const onDisconnectPlayer = sinon.stub();
    const result = shallow(<Button
                            playerInfo={{status: 'connecting', reason: ''}}
                            onConnectPlayer={onConnectPlayer}
                            onDisconnectPlayer={onDisconnectPlayer}
                            />);
    expect(result.find('button').node).to.be.undefined;
    expect(result.find('input').node).to.be.undefined;
    expect(result.find('h3').node).not.to.be.undefined;
    const text = result.find('h3');
    expect(text.node.props.children).to.eql(' Connecting... ');
  });
  it('calls onConnectPlayer and clears input when Connect button pressed', () => {
    const onConnectPlayer = sinon.stub();
    const onDisconnectPlayer = sinon.stub();
    const result = shallow(<Button
                            playerInfo={{status: 'disconnected', reason: ''}}
                            onConnectPlayer={onConnectPlayer}
                            onDisconnectPlayer={onDisconnectPlayer}
                            />);
    const input = result.find('input');
    const button = result.find('button');
    input.simulate('change', {target: {value: 'foo'}});
    button.simulate('click');
    expect(onConnectPlayer).to.have.been.calledWith({name: 'foo'});
    expect(result.state()).to.eql({value: ''});
  });
  it('calls onDisconnectPlayer when Disconnect button pressed', () => {
    const onConnectPlayer = sinon.stub();
    const onDisconnectPlayer = sinon.stub();
    const result = shallow(<Button
                            playerInfo={{status: 'connected', reason: ''}}
                            onConnectPlayer={onConnectPlayer}
                            onDisconnectPlayer={onDisconnectPlayer}
                            />);
    const button = result.find('button');
    button.simulate('click');
    expect(onDisconnectPlayer).to.have.been.called;
  });

  it('does not call onConnectPlayer when no input', () => {
    const onConnectPlayer = sinon.stub();
    const onDisconnectPlayer = sinon.stub();
    const result = shallow(<Button
                            playerInfo={{status: 'disconnected', reason: ''}}
                            onConnectPlayer={onConnectPlayer}
                            onDisconnectPlayer={onDisconnectPlayer}
                            />);
    const input = result.find('input');
    const button = result.find('button');
    input.simulate('change', {target: {value: ''}});
    button.simulate('click');
    expect(onConnectPlayer).not.to.have.been.called;
  });
});
