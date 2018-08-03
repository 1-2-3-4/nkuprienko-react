import React from 'react';

class Chatbot extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '',
            numberToGuess: this.generateRandomNumber(),
            messageLog: [{
                user: 'computer',
                message: 'I\'m thinking of a number between 1 and 100'
            }],
            altColor: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleKeyDown(e) {
        if (e.keyCode === 13) {
            const checkForWinText = this.checkForWin();
            const checkForWinBool = checkForWinText.indexOf('You win!') > -1;
            const messageLogs = [
                {
                    user: 'player',
                    message: this.state.value,
                },
                {
                    user: 'computer',
                    message: checkForWinText,
                }
            ];

            // if winner, start game over
            if (checkForWinBool) {
                messageLogs.push(
                    {
                        user: 'computer',
                        message: 'Let\'s play again!'
                    },
                    {
                        user: 'computer',
                        message: 'I\'m thinking of a number between 1 and 100'
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

    render() {
        return (
            <div id="guessing-container">
                <div id="guessing-text">
                    {
                        this.state.messageLog.map((chat, index) => {
                            const fontAwesomeIcon = chat.user === 'computer' ? 'terminal' : 'user';
                            return (
                                <div className={`${chat.user}-text-container`}>
                                    <i className={ `fa fa-${fontAwesomeIcon}`}></i>
                                    <span className={`${chat.user}-text`}>{ chat.message }</span>
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