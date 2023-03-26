
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

          <h6>${h.price}/month</h6>
          <iframe
            src={h.mapLink}
            width="600"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>

          <br></br>


        </div>
        {/* <button onClick={handleClick}>Apply for housing</button> */}
        <button onClick={handleClick} class="btn"><span>Apply for housing</span></button>
      </div>
    </div>
  
  );
}

export default Detail;
