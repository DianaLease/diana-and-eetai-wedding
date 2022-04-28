import LaunchIcon from '@mui/icons-material/Launch';
import { hotels } from '../hotels';

const Accomodations = () => (
  <div className="content-wrapper">
    <ul>
      {hotels.map(({ name, description, url }) => (<Hotel name={name} description={description} url={url} key={name} />))}
    </ul>
  </div>
)

const Hotel = ({ name, description, url }) => (
  <li className="hotel">
    <h3>{name}</h3>
    <p>{description}</p>
    <a href={url} target="_blank" rel="noreferrer">Reserve Online<LaunchIcon className="launch-icon" sx={{ fontSize: ".85rem" }} /></a>
  </li>
)


export default Accomodations;
