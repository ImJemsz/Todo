import React from 'react'

export default function Axios() {
  const axios = require('axios');
  axios.get('https://my-json-server.typicode.com/typicode/demo/posts').then((result) => {
    result.data.map((d) => console.log(d.title))
  }).catch((err) => {
    console.error(err)
  });
  return (
    <div>Axios</div>
  )
} 
