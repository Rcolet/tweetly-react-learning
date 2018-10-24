import React, { Component } from 'react';
import './Home.css';
import { tweets } from '../../constants';
import Tweet from '../../components/Tweet';
import TweetBox from '../../components/TweetBox';
import moment from 'moment';

class Home extends Component {

    state = {
        tweets
    };

    publish = tweet => {
        const { tweets } = this.state;

        this.setState({
            tweets: [{
                avatar: 'https://pbs.twimg.com/profile_images/2251075839/429966_313329432063072_1942928810_n_400x400.jpg',
                username: 'aurice91',
                fullname: 'Colet Rémi',
                content: tweet,
                date: moment().format('DD/MM/YYYY')
            },
            ...tweets
        ]
        })
    }

    remove = index => {
        const { tweets } = this.state;
        this.setState({
            tweets: tweets.filter((tweet, i) => i !== index)
        });
    }

    render() {
        const { tweets } = this.state;

        return (
            <div className="homepage">
                <TweetBox publish={this.publish} />
                <div className="tweets">
                    {tweets.map(
                        (tweet, index) => (
                            <Tweet
                                key={index}
                                index={index}
                                remove={this.remove}
                                {...tweet}
                            />
                        )
                    )}
                </div>
            </div>
        )
    }
}

export default Home;