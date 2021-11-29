import React from 'react'

const ComicsItem = ({ item }) => {
  return (
    <div className='content'>
      <div className='content-inner'>
        <div className='content-front'>
          <img src={item.thumbnail.path + "/standard_fantastic.jpg"} alt='' />
        </div>
        <div className='content-back'>
          <input type="button" className="card-button" value = "Check Quadrinho"></input>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Nome:</strong> {item.title}
            </li>
            <li>
              <strong>Descrição:</strong> {item.description}
            </li>
            <li>
              {/* <button type="button" onClick={()=>favorite(item)}>Favorite</button> */}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ComicsItem
