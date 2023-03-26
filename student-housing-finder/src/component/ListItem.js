
// {/* {props.photoUrl} */}
function ListItem(props) {
  function handleClick() {
    props.showMessage(props.mykey);
  }

  return (

    <div style={{ display: "flex", flexDirection: "row", padding: "25px 50px" }}>
      <div style={{ backgroundColor: 'DarkGray' }}>
        <img style={{ padding: 10 }} src={"/img/" + props.photoUrl}></img>

      </div>
      <div style={{ width: "100%", backgroundColor: 'LightGray', textAlign: "left", padding: '10px' }}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <h5>{props.location}</h5>
        <h6>${props.price}/month</h6>
        <br></br>
        <hr></hr>

        <button onClick={handleClick} class="btn"><span>View Detail</span></button>
        {/* <button onClick={handleClick}>View Detail</button> */}
      </div>

    </div>
  );
}

export default ListItem;
