import React, { useEffect, useState } from 'react'

function GitHub() {
    const [data,setData] = useState([])
    useEffect(() => {
     fetch('https://api.github.com/users/sahuabhi894')
     .then(response => response.json)
     .then(data => {
        setData(data)
     })
    }, [])
    
  return (
    <div>GitHub: {data.followers}</div>
  )
}

export default GitHub