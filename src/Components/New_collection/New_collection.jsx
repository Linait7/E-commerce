import React from 'react'
import './New_collection.css'
import new_collections from '../Assets/new_collections';
import Item from '../Item/Item';
const New_collection = () => {
  return (
    <div className='new_collections'>
        <h1>NEW COLLECTION</h1>
       <hr />
        <div className = "collections">
      {new_collections.map((item,i)=> {
         return <Item key = {i} id ={item.id} name = {item.name} image = {item.image} new_price = {item.new_price} old_price = {item.old_price}/>
      })}
      </div>
    </div>
  )
}

export default New_collection
