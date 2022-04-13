import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Typer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typingSpeed: this.props.speed,
      sentenceArr: [this.props.heading, ...this.props.messages],
      text1: "",
      text2: "",
    }
    let heading = [];
    let messages = [];
    for (let i = 0; i < this.state.sentenceArr.length; i++) {
      i === 0 ? heading = this.state.sentenceArr[i] : messages.push(this.state.sentenceArr[i]);
      
    }

    this.typing = (() => {
      let i = 0;
      this.headTyping = setInterval(() => {
        this.setState({
          text1: heading.slice(0, i++),
        })
        if (i === heading.length + 1) {
          let i = 0;
          let counter = 0;
          let typedText = "";
          let text = ""
          this.msgType = setInterval(() => {
            if (counter === messages.length && this.props.infinite) {
              counter = -1
            } else if (counter === messages.length && !this.props.infinite) {
              clearInterval(this.msgType)
            } else {
              typedText = messages[counter];
              text = typedText.slice(0, i++)
            }
            this.setState({
              text2: text,
            })
            if (text.length === typedText.length) {
              counter++
              i = 0
            }
          }, this.state.typingSpeed)
        }
      }, this.state.typingSpeed)
    })
  }

  componentDidMount() {
    this.typing();
  }
  componentWillUnmount() {
    clearInterval(this.headTyping);
  }
  render() {
    return (
      <>
        <h1>{this.state.text1}</h1>
        <p className="text-2xl"> {this.state.text2}</p>
      </>
    );
  }
}
Typer.propTypes = {
  speed: PropTypes.number,
  heading: PropTypes.string,
  messages: PropTypes.arrayOf(PropTypes.string),
  infinite: PropTypes.bool
}

export default Typer;