import { NavLink } from 'react-router-dom';

function Login(){
    return(
    <>
    <div className="col-md-8 offset-md-2 mt-8">
        <div className="card">
            <div className="card-body">
                <h3 className="text-center">Login</h3>
                <p className="text-center">Login with your credential</p>
                <input type="text" placeholder="Username" className="form-control mb-2" name="" id="" />
                <input type="text" placeholder="Password" className="form-control mb-2" name="" id="" />
                <p className="p-0 m-0 text-center"><button className="btn bg-gradient-info m-0 ">Login</button></p>
                <p className="p-0 m-0 text-center mt-2"> <NavLink to="/Pincode">Login with pincode ?</NavLink></p>
            </div>
        </div>
    </div>
    </>
    )
}


export default Login;
