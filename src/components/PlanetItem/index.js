// Write your code here
import './index.css'

const PlanetItem = props => {
  const {all} = props
  const {name, imageUrl, description} = all
  return (
    <li>
      <img className="img" src={imageUrl} alt={`planet ${name}`} />
      <h1>{name}</h1>
      <p>{description}</p>
    </li>
  )
}
export default PlanetItem
