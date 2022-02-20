import us from './us.jpeg';

const Home = () => (
  <div className="wrapper">
    <div className="home">
      <div className="left">
        <img src={us} className="photo" alt="Eetai and Diana" />
      </div>
      <div className="right">
        <p className="details">
          September 3rd, 2022<br/>
          Molly Pitcher Inn<br/>
          Red Bank, NJ
        </p>
      </div>
    </div>
  </div>
)

export default Home;