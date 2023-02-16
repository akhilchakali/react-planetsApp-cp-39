// Write your code he
import Slider from 'react-slick'

//  import 'slick-carousel/slick/slick.css'
//  import 'slick-carousel/slick/slick-theme.css'

import PlanetItem from '../PlanetItem'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div data-testid="planets">
      <h1>Planets</h1>
      <Slider {...settings}>
        {planetsList.map(each => (
          <PlanetItem all={each} key={each.id} />
        ))}
      </Slider>
    </div>
  )
}
export default PlanetsSlider
