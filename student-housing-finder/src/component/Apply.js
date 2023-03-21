import React, { useState } from "react";
import './UserInfoForm.css';
import Listings from '../data/listings.json';
function Apply(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // code to handle form submission goes here
    };

    function handleClick() {
        props.setP("Home");
    }

    let h = Listings.find(e => e.id === props.id)

    // console.log(props.id)
    return (

        <div style={{ padding: "25px 50px" }}>

            <div style={{ display: "flex", flexDirection: "row", padding: "25px 50px" }}>
                <div style={{ backgroundColor: 'DarkGray' }}>
                    <img style={{ padding: 10 }} src={"/img/" + h.photoUrl}></img>

                </div>
                <div style={{ width: "100%", backgroundColor: 'LightGray', textAlign: "left", padding: '10px' }}>
                    <h3>{h.title}</h3>
                    <p>{h.description}</p>
                    <h5>{h.location}</h5>
                </div>

            </div>


            <form onSubmit={handleSubmit} className="user-info-form">
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </label>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
                <label>
                    Phone:
                    <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </label>
                <label>
                    Address:
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
                </label>
                <label>
                    City:
                    <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                </label>
                <label>
                    State:
                    <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
                </label>
                <label>
                    Zip Code:
                    <input type="text" value={zip} onChange={(e) => setZip(e.target.value)} />
                </label>
                <input type="submit" value="Submit" />
            </form>


        </div>

    );
}

export default Apply;
