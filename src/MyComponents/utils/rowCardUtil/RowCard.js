import React from 'react'
import './RowCard.css'


export default function RowCard(props) {
  return (
    <div class="row-card">
  <div class="left-content">
    <h2>{props.title}</h2>
    <p>{props.desc}</p>
  </div>
  <div class="right-content">
    <h2>{props.price}</h2>
  </div>
</div>

  )
}
