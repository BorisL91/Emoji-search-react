import React, { PureComponent } from "react"
import "./App.css"
import filterEmoji from "./util/filterEmoji"

import Header from "./components/Header"
import SearchInput from "./components/SearchInput"
import EmojiResults from "./components/EmojiResults"

class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      filteredEmoji: filterEmoji("", 20)
    }
  }

  handleSearchChange = event => {
    this.setState({
      filteredEmoji: filterEmoji(event.target.value, 20)
    })
  }

  render() {
    return (
      <>
        <Header />
        <SearchInput textChange={this.handleSearchChange} />
        <EmojiResults emojiData={this.state.filteredEmoji} />
      </>
    )
  }
}

export default App
