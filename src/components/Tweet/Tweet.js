import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import moment from 'moment';
import './Tweet.css';

class Tweet extends Component {
    static propTypes = {
        avatar: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,
        fullname: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        date: PropTypes.string,
        remove: PropTypes.func.isRequired
    };

    static defaultProps = {
        date: moment().format('DD/MM/YYYY')
    }

    state = {
        isFocus: false
    };

    handleFocus = ({ type }) => {
        this.setState({isFocus: type === 'mouseenter'});
    };

    render() {
        const { avatar, username, fullname, content, date, index, remove } = this.props;
        const { isFocus } = this.state;
        return (
            <div className="tweet">
            <div className="avatar">
                <img src={avatar} role="presentation" alt="avatar"/>
            </div>
            <div className="data">
                <div className="infos">
                    <strong className="fullname">{fullname}</strong>
                    <small className="gray">@{username}</small>
                    <small className="gray date">{date}</small>
                    {username === 'aurice91' && (
                        <FontAwesome 
                            className="gray trash"
                            name={isFocus ? 'trash' : 'trash-o'}
                            onMouseEnter={this.handleFocus}
                            onMouseLeave={this.handleFocus}
                            onClick={() => remove(index)}
                        />
                    )}
                </div>
                <div className="content">
                    <p>{content}</p>
                </div>
            </div>
        </div>
        )
    }
}

export default Tweet;