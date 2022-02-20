import VerticalStepper from './components/VerticalStepper';

const steps = [
  {
    label: 'Ceremony',
    time: '5:30pm',
    location: 'Wedding ceremony on the outdoor promenade overlooking the scenic Navesink River'
  },
  {
    label: 'Cocktail Hour',
    time: '6:00pm', 
    location: 'Drinks and hors d\'oeuvres inside with access to outdoor tables on the promenade'
  },
  {
    label: 'Reception',
    time: '7:00pm', 
    location: 'Dinner and dancing in the ballroom'
  },
  {
    label: 'Late Night',
    time: '11:00pm', 
    location: 'Finger foods and cash bar at the International Bar'
  },
  {
    label: 'Breakfast',
    time: '9:00am Sunday', 
    location: 'Breakfast Buffet in The Navesink Room'
  }
];

const Home = () => (
  <div className="wrapper">
    <div className="schedule">
      <VerticalStepper steps={steps} />
    </div>
  </div>
)

export default Home;