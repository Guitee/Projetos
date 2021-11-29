import React from 'react'
import ComicsItem from './ComicsItem'

const ComicsTable = ({items,isLoading}) => {
    return isLoading ? <h1>Loading</h1> :
    <section className="contents">
        {
            items.map(item=>(
                <ComicsItem key={item.id} item={item}></ComicsItem>
            ))
        }
    </section>
}

export default ComicsTable
