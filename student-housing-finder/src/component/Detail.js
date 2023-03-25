
import Listings from '../data/listings.json';
function Detail(props) {

  function handleClick() {
    props.setP("apply");
  }

  let h = Listings.find(e => e.id === props.id)

  // console.log(props.id)
  return (

    <div style={{  padding: "25px 50px", backgroundColor: 'DarkGray' }}>
      <div style={{ display: "flex", flexDirection: "row"}}>
        <div style={{ backgroundColor: 'DarkGray' }}>
          <img style={{ padding: 10 }} src={"/img/" + h.photoUrl}></img>

        </div>
        <div style={{ width: "100%", backgroundColor: 'LightGray', textAlign: "left", padding: '10px' }}>
          <h3>{h.title}</h3>
          <p>{h.description}</p>

          <br></br>


        </div>
        {/* <button onClick={handleClick}>Apply for housing</button> */}
        <button onClick={handleClick} class="btn"><span>Apply for housing</span></button>
      </div>

      <p>{h.description}</p>
      <h5>{h.location}</h5>
    </div>
  
  );
}

export default Detail;
