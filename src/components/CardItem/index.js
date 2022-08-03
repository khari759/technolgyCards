import './index.css'

const Card = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={className}>
      <h1 className="title">{title}</h1>
      <p className="para">{description}</p>
      <div className="img">
        <img src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default Card
