import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import Clipboard from "clipboard"
import EmojiResultsRow from "../components/EmojiResultsRow"
import "../styles/EmojiResults.css"

export default class EmojiRresults extends PureComponent {
  static propTypes = {
    emojiData: PropTypes.array.isRequired
  }

  componentDidMount() {
    this.clipboard = new Clipboard(".copy-to-clipboard")
  }

  componentWillUnmount() {
    this.clipboard.destroy()
  }

  render() {
    return (
      <div className='component-emoji-results'>
        {this.props.emojiData.map(emojiData => (
          <EmojiResultsRow
            key={emojiData.title}
            symbol={emojiData.symbol}
            title={emojiData.title}
          />
        ))}
      </div>
    )
  }
}
