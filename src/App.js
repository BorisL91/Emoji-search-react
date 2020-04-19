import React, { useState } from "react"
import "./App.css"
import filterEmoji from "./util/filterEmoji"

import Header from "./components/Header"
import SearchInput from "./components/SearchInput"
import EmojiResults from "./components/EmojiResults"

const App = () => {
  const [filteredEmoji, setFilteredEmoji] = useState(filterEmoji("", 20))

  const handleSearchChange = (event) => {
    setFilteredEmoji(filterEmoji(event.target.value, 20))
  }

  return (
    <>
      <Header />
      <SearchInput textChange={handleSearchChange} />
      <EmojiResults emojiData={filteredEmoji} />
    </>
  )
}
export default App
