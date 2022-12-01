import { NavLink , Navigate , Route} from 'react-router-dom';
import { useEffect } from 'react';
function Pincode(){
    useEffect(() => {
        OTPInput();
      });
    
    return(
    <>
    <div className="col-md-3 offset-md-4 mt-8">
        <div className="card">
            <div className="card-body">
                <h3 className="text-center">Pincode</h3>
                <p id='process' className="text-center">Login with your credential</p>
                <form action="#">
                    <div id='toggle'>
                            <div id="otp" className="inputs d-flex flex-row justify-content-center mt-2">
                                <input className="m-2 text-center form-control rounded" type="text" id="first" maxLength="1" /> 
                                <input className="m-2 text-center form-control rounded" type="text" id="second" maxLength="1" />
                                <input className="m-2 text-center form-control rounded" type="text" id="third" maxLength="1" /> 
                                <input className="m-2 text-center form-control rounded" type="text" id="fourth" maxLength="1" />
                                </div>
                        </div>
                            </form>
                <p className="p-0 m-0 text-center mt-2"> <NavLink to="/Login">Login with username and password ?</NavLink></p>
            </div>
        </div>
    </div>
    </>
    )
}




    function OTPInput()
    {
        const inputs = document.querySelectorAll('#otp > *[id]');
        const a = [];
        for (let i = 0;  i < inputs.length; i++) 
        {
            inputs[i].addEventListener('keydown', function(event) 
            {
                if (event.key==="Backspace" ) 
                {
                    inputs[i].value='' ;
                        if (i !==0) inputs[i - 1].focus();
                } 
                else 
                {
                    if (i === inputs.length-1 && inputs[i].value !=='' ) {
                        if (event.keyCode> 47 && event.keyCode < 58) 
                        {
                            inputs[i].value=event.key;
                            a[i]=event.key;
                            if (i !==inputs.length - 1) inputs[i + 1].focus();
                                event.preventDefault();
                        }
                        else if (event.keyCode> 64 && event.keyCode < 91) 
                        {
                            inputs[i].value=String.fromCharCode(event.keyCode);
                            a[i]=String.fromCharCode(event.keyCode);
                                if (i !==inputs.length - 1) inputs[i + 1].focus();
                                    event.preventDefault();
                        }
                        var b = a.toString();
                        document.getElementById('process').innerHTML = b;
                        document.getElementById('process').innerHTML = "Authenticating";
                        setTimeout(() => {
                            document.getElementById('process').innerHTML = "Verifying user";
                        }, 1000);
                        if(b === '1,9,7,2'){
                            <Route path="/redirect" element={ <Navigate to="/MainPage" /> } />

                        }else{
                            setTimeout(() => {
                                document.getElementById('process').innerHTML = 'Sorry we couldn&apos;t verify you <br> Please try again !';
                                for (let l = 0;  l < inputs.length; l++) 
                                {
                                    inputs[l].value='' ;
                                    inputs[0].focus();
    
                                }
                            }, 1500);
                        }
                       
                    }
                    else if (event.keyCode> 47 && event.keyCode < 58) 
                    {
                        inputs[i].value=event.key;
                        a[i]=event.key;
                        if (i !==inputs.length - 1) inputs[i + 1].focus();
                            event.preventDefault();
                    }
                    else if (event.keyCode> 64 && event.keyCode < 91) 
                    {
                        inputs[i].value=String.fromCharCode(event.keyCode);
                        a[i]=String.fromCharCode(event.keyCode);
                            if (i !==inputs.length - 1) inputs[i + 1].focus();
                                event.preventDefault();
                    }
                }
            });
        }
    }



export default Pincode;
