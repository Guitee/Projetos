
import './App.css'
import Header from './components/Header'
import ComicsTable from './components/ComicsTable'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Search from './components/Search'

const hash = "a68b9df11326c1edca5b469fafca7617"

function App() {
  const [items, setItems] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [query, setQuery] = useState('')
  
  useEffect(() => {
    const fetch = async () => {
      if (query === '') {
        const result = await axios(`http://gateway.marvel.com/v1/public/comics?ts=1&apikey=aceed2a933e1365d235bc21d87ff6c9d&hash=${hash}`)
        console.log(result.data.data.results)
        setItems(result.data.data.results)
        setLoading(false)
      } else {
        const result = await axios(`http://gateway.marvel.com/v1/public/comics?titleStartsWith=${query}&ts=1&apikey=aceed2a933e1365d235bc21d87ff6c9d&hash=${hash}`)
        console.log(result.data.data.results)
        setItems(result.data.data.results)
        setLoading(false)
      }
    }

    fetch()
  }, [query])

  return (
    <div className="container">
      <Header />
      <Search search={(q) => setQuery(q)} />
      <ComicsTable items={items} isLoading={isLoading} />
    </div>
  );
}

export default App;
