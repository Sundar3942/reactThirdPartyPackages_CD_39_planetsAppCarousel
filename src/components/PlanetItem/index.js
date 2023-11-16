// Write your code here
import Slider from 'react-slick'
// import {Slider} from 'slick-carousel'
import {
  Heading,
  EachPlanetCarousel,
  CarouselImage,
  CarouselHeading,
  CarouselDescription,
} from './styledComponents'
import './index.css'

const PlanetItem = props => {
  const {planetsList} = props

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const renderPlanetItemDiv = item => {
    const {id, name, imageUrl, description} = item

    return (
      <EachPlanetCarousel key={id}>
        <CarouselImage src={imageUrl} alt={`planet ${name}`} />
        <CarouselHeading>{name}</CarouselHeading>
        <CarouselDescription>{description}</CarouselDescription>
      </EachPlanetCarousel>
    )
  }

  return (
    <div>
      <Heading>Planets</Heading>
      <div className="slider-container">
        <Slider {...settings}>
          {planetsList.map(each => renderPlanetItemDiv(each))}
        </Slider>
      </div>
    </div>
  )
}

export default PlanetItem
