// Write your code here
import PlanetItem from '../PlanetItem'
import {PlanetsSliderPage} from './styledComponents'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props

  return (
    <PlanetsSliderPage data-testid="planets">
      <PlanetItem planetsList={planetsList} />
    </PlanetsSliderPage>
  )
}

export default PlanetsSlider
