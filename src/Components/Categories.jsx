import React from 'react'

const buttonsArr = ['Home','Fashion','Electronics','Beauty','Sports','Toys','Automotive','Books']

const Categories = ({ setSelectedCategory }) => {
  return (
    
        <div className="category-icons">
          {buttonsArr.map(item => (
            <button key = {item} 
            onClick={() => setSelectedCategory(item)}
            className= "icon">{item}</button>
          ))}
      </div>
    
  )
}

export default Categories
