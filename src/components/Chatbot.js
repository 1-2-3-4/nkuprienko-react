import React from 'react';
import ReactDOM from 'react-dom';

class Chatbot extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '',
            numberToGuess: this.generateRandomNumber(),
            messageLog: [{
                user: 'computer',
                message: 'I\'m thinking of a number between 1 and 100',
                altColor: false
            }],
            altColor: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    componentDidUpdate() {
        this.handleScrollToElement();
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleKeyDown(e) {
        if (e.keyCode === 13 && this.state.value.trim() !== '') {
            const checkForWinText = this.checkForWin();
            const checkForWinBool = checkForWinText.indexOf('You win!') > -1;
            const messageLogs = [
                {
                    user: 'player',
                    message: this.state.value,
                    altColor: this.state.altColor
                },
                {
                    user: 'computer',
                    message: checkForWinText,
                    altColor: this.state.altColor
                }
            ];

            // if winner, start game over
            if (checkForWinBool) {
                messageLogs.push(
                    {
                        user: 'computer',
                        message: 'Let\'s play again!',
                        altColor: !this.state.altColor
                    },
                    {
                        user: 'computer',
                        message: 'I\'m thinking of a number between 1 and 100',
                        altColor: !this.state.altColor
                    }
                );
            }

            this.setState((prevState) => {
                return {
                    messageLog: prevState.messageLog.concat(messageLogs),
                    value: '',
                    altColor: checkForWinBool ? !this.state.altColor : this.state.altColor,
                    numberToGuess: checkForWinBool ? this.generateRandomNumber() : this.state.numberToGuess,
                };
            });

        }
    }

    generateRandomNumber() {
        return Math.ceil(Math.random()*100);
    }

    generateRandomHappyEmoji() {
        const happyEmojis = ['(و˃ᴗ˂)و', '＼（＾○＾）人（＾○＾）／', '(✿ ♥‿♥)', '\\(^-^)/', '٩( ´◡` )۶', '(つ◕౪◕)つ━☆ﾟ.*･｡ﾟ', '♪ヽ( ⌒o⌒)/', '(~˘▾˘)~'];
        return happyEmojis[Math.floor(Math.random() * happyEmojis.length)];
    }

    generateRandomSadEmoji() {
        const sadEmojis = ['へ[ •́‸ •̀ ]ʋ', '(◕︿◕✿)', '(・_・ヾ', '(ლಠ益ಠ)ლ', '(╯°□°）╯︵ ┻━┻', '(◡ ﹏ ◡)', 'ಠ_ಠ'];
        return sadEmojis[Math.floor(Math.random() * sadEmojis.length)];
    }

    checkForWin() {
        let messageText;

        if (this.state.value == this.state.numberToGuess) {
            messageText = 'You win! ' + this.generateRandomHappyEmoji();
        } else if (isNaN(this.state.value)) {
            messageText = 'I can only understand numbers ';
        } else {
            messageText = 'Too ' + (this.state.value > this.state.numberToGuess ? 'high' : 'low') + '! Guess again';
        }

        return messageText;
    }

    handleScrollToElement() {
        const guessingText = ReactDOM.findDOMNode(this.refs.guessingText);
        guessingText.scrollTop = guessingText.scrollHeight;
    }

    render() {
        const { messageLog } = this.state;
        return (
            <div id="guessing-container">
                <div id="guessing-text" ref="guessingText">
                    {
                        messageLog.map((chat, index) => {
                            const computerUser = chat.user === 'computer' ;
                            const fontAwesomeIcon = computerUser ? 'terminal' : 'user';
                            const icon = <i className={ `fa fa-${fontAwesomeIcon}` } key={ `icon-${index}` }></i>;
                            const altColorClass = chat.altColor ? 'new-color' : '';
                            return (
                                <div className={ `${chat.user}-text-container` } key={ `container-${index} `}>
                                    { computerUser && icon }
                                    <span className={ `${chat.user}-text ${altColorClass}` } key={ `chat-${index}` }>
                                        { chat.message }
                                    </span>
                                    { !computerUser && icon }
                                </div>
                            )
                        })
                    }
                </div>
                <input type="text" id="user-guess" value={this.state.value} onChange={this.handleChange} onKeyDown={this.handleKeyDown} placeholder="Guess!" />
            </div>
        )
    }
}

export default Chatbot;