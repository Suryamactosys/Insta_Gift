import { Link } from "react-router-dom";
import Users from '../Components/Users/Users';

const Admin = () => {
    return (
        <div style={{paddingTop:'100px'}}>
            <section>
            <h1>Admins Page</h1>
            <br />
            <Users />
            <br />
            <div className="flexGrow">
                <Link to="/">Home</Link>
            </div>
        </section>
        </div>
    )
}

export default Admin;
