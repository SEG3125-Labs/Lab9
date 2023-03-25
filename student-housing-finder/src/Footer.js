import logo from './logo.svg';
import './App.css';
import ListItem from './component/ListItem'

function Footer() {
  return (
    <div style={{ padding: "10px", backgroundColor: 'lightgray' }}>
      <h1>Student Housing Finder</h1>
      <a>Phone: (938)033-0343</a>
      <br />
      <a>Email: housing@gmail.com</a>
    </div>
  );
}

export default Footer;
