import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TweetBox.css';

class TweetBox extends Component {
    static propTypes = {
        publish: PropTypes.func.isRequired
    };

    state = {
        value: ''
    };

    handleChange = ({target: { value }}) => {
        this.setState({ value });
    };

    handleSubmit = () => {
        const { value } = this.state;
        const { publish } = this.props;
        if(value.length && value.length <= 140 ) {
            publish(value);
            this.setState({value: ''});
        }
    }

    handleFocus = ({ type }) => {
        this._textarea.placeholder = type === 'focus' ? '' : 'Composez votre tweet'
    }

    render() {
        const { value } = this.state;
        return (
            <div className="tweetbox">
                <textarea
                    rows={3}
                    placeholder="Composez votre tweet"
                    value = {value}
                    onChange={this.handleChange}
                    className={value.length > 140 ? 'alert' : "false"}
                    ref={t => this._textarea = t}
                    onFocus={this.handleFocus}
                    onBlur={this.handleFocus}
                />
                <div className="action">
                    <span className="count">{140 - value.length}</span>
                    <button
                        type="button"
                        disabled={!value.length || value.length > 140}
                        onClick={this.handleSubmit}
                    >Tweet</button>
                </div>
            </div>
        )
    }
}

export default TweetBox;