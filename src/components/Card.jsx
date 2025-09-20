const Card = (props) => {
  return (
    <div className='card'>
      <div className='card-body'>
        <img src={props.image} />
        <h3 className='card-title'>{props.event}</h3>
        <h4>{props.location}</h4>
        <h5>{props.date}</h5>
        <h5>{props.time}</h5>
        <a href={props.details} className='details'>More details . . .</a>
      </div>

    </div>
  )
}

export default Card;