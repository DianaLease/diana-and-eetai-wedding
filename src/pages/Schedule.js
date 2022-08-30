import VerticalStepper from '../components/VerticalStepper';

const steps = [
  {
    label: 'Ceremony',
    time: '5:30pm',
    location: 'Wedding ceremony on the outdoor promenade overlooking the scenic Navesink River'
  },
  {
    label: 'Cocktail Hour',
    time: '6:00pm', 
    location: 'Drinks and hors d\'oeuvres in the Southampton Room and outdoor tables on the promenade'
  },
  {
    label: 'Reception',
    time: '7:00pm', 
    location: 'Dinner and dancing in the ballroom'
  },
  {
    label: 'Late Night',
    time: '11:00pm', 
    location: 'Finger foods and cash bar in the Tea Room at the Molly Pitcher'
  },
  {
    label: 'Breakfast',
    time: '9:00am Sunday', 
    location: 'Breakfast buffet & mimosas in the Navesink Room at the Molly Pitcher'
  }
];

const Home = () => (
  <div className="content-wrapper">
    <VerticalStepper steps={steps} />
  </div>
)

export default Home;
