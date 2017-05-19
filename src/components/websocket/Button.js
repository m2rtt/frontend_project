import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {value: ''};
  }
  onChange(event) {
    this.setState({
      value: event.target.value
    });
  }
  onSubmit() {
    if (this.state.value != '') {
      this.props.onConnectPlayer({name: this.state.value});
      this.setState({value: ''});
    }
  }
  render() {
    let FormArea;
    let reason = this.props.playerInfo.reason == 'player-name-taken' ?
                                                'Player name is taken, choose another name.' : '';
    if (this.props.playerInfo.status == 'disconnected') {
      FormArea = (
        <div>
          <label>
            <input placeholder="Your name..." type="text" value={this.state.value} onChange={this.onChange} />
          </label>
          <br/>
          <button onClick={this.onSubmit}>Connect</button>
          <h3>{reason}</h3>
        </div>
    );
  } else if (this.props.playerInfo.status === 'connecting') {
    FormArea = (
      <h3> Connecting... </h3>
    );
  } else {
    FormArea = (
      <button onClick={this.props.onDisconnectPlayer}>Disconnect</button>
    );
  }
  return (
    <div>
      {FormArea}
    </div>
  );
  }
}

Button.propTypes = {
  playerInfo: PropTypes.object.isRequired,
  onConnectPlayer: PropTypes.func.isRequired,
  onDisconnectPlayer: PropTypes.func.isRequired
};

export default Button;
