import LaunchIcon from '@mui/icons-material/Launch';

const Directions = () => (
  <div className="content-wrapper">
    <h2>Driving Directions</h2>
    <h3>From the North:</h3>
    <p>
      Take Garden State Parkway Local South to Exit 109 (Red Bank/Lincroft exit).<br/>
      At the light, turn left onto Route 520 East (Newman Springs Road).<br/>
      Quickly bare right after the overpass, through the light onto Half Mile Road.<br/>
      Proceed to the end, then turn right onto West Front Street.<br/>
      At the 2nd light turn left onto Rector Place.<br/>
      Stay in the right lane (Light House Ice Cream will be on your right).<br/>
      Make a right through the light onto Riverside Avenue.<br/>
      The Molly Pitcher Inn will be on the left hand side.
    </p>
    <h3>From the South:</h3>
    <p>
      Take Garden State Parkway Local North to Exit 109 (Red Bank/Lincroft exit).<br/>
      Bare left off of the ramp.<br/>
      Go through the light onto Half Mile Road.<br/>
      Proceed to the end, then turn right onto West Front Street.<br/>
      At the 2nd light turn left onto Rector Place.<br/>
      Stay in the right lane (Light House Ice Cream will be on your right).<br/>
      Make a right through the light onto Riverside Avenue.<br/>
      The Molly Pitcher Inn will be on the left hand side.
    </p>

    <h2>Train from NYC</h2>
    <p>
      From Penn Station New York, take the North Jersey Coast Line train (toward Long Branch) to Red Bank Station. The Molly Pitcher Inn is a 9 minute walk from the Red Bank train station. <a href="https://www.njtransit.com/" target="_blank" rel="noreferrer">Buy tickets via NJ Transit<LaunchIcon className="launch-icon" sx={{ fontSize: ".85rem" }} /></a>
    </p>
  </div>
)

export default Directions;
