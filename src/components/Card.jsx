const Card = (props) => {
  return (
     <div className='card'>
      <div className='card-body'>
        <h5 className='card-title'>{props.event}</h5>
        <h6>{props.location}</h6>
      </div>

     </div>
  )
}

export default Card;