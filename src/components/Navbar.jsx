import { Link } from "react-router-dom";


export default function Navbar({login, setLogin}) {
  return (
    <div>
        <ul className="nav">
            <li className="item">
              <Link className="item1" to='/'>
              home
              </Link>
              </li>
            <li  className="item">
              <Link className="item1" to='/add'>
              Add
              </Link>            
            </li>
            <li  className="item">
              <Link className="item1" to='/about'>
              About
              </Link>
            </li>
            <li  className="item">
              <Link className="item1" to='/service'>
              Service
              </Link>
            </li>
            <li  className="item">
              <Link className="item1" to='/products'>
              Products
              </Link>
            </li>
            <li>
                    <Link className="btnn1" to='/login'>
                 <button className="btn1" onClick={() => setLogin(!login)}>
                    login
                 </button>
                    </Link>
                 </li>
        </ul>
            </div>
  )
}
