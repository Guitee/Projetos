import React, { useState } from 'react'


const Search = ({ search }) => {
  const [text, setText] = useState('')

  const onSearch = (q) => {
    setText(q)
    search(q)
  }

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-sontrol"
          placeholder="Pequise por um Quadrinho"
          autoFocus
          onChange={(e) => onSearch(e.target.value)}
          value={text} >
        </input>
      </form>
    </section>
  )
}

export default Search
