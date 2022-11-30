import { NavLink } from 'react-router-dom';

function Pincode(){
    return(
    <>
    <div className="col-md-8 offset-md-2 mt-8">
        <div className="card">
            <div className="card-body">
                <h3 className="text-center">Pincode</h3>
                <p className="text-center">Login with your credential</p>
                <form action="#">
                    <div id='toggle'>
                            <div id="otp" class="inputs d-flex flex-row justify-content-center mt-2">
                                <input class="m-2 text-center form-control rounded" type="text" id="first" maxlength="1" /> 
                                <input class="m-2 text-center form-control rounded" type="text" id="second" maxlength="1" />
                                <input class="m-2 text-center form-control rounded" type="text" id="third" maxlength="1" /> 
                                <input class="m-2 text-center form-control rounded" type="text" id="fourth" maxlength="1" />
                                </div>
                        </div>
                            </form>
                <p className="p-0 m-0 text-center"><button className="btn bg-gradient-info m-0 ">Login</button></p>
                <p className="p-0 m-0 text-center mt-2"> <NavLink to="/Login">Login with username and password ?</NavLink></p>
            </div>
        </div>
    </div>
    </>
    )
}


export default Pincode;
