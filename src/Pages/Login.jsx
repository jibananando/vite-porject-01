import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='flex justify-center items-center pt-12'>
            <div className='w-96 p-7'>
                <h1 className="text-5xl text-center p-2 font-bold text-transparent bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text">Login Now</h1>
                <form>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email" placeholder='Your email'
                            className="input input-bordered w-full max-w-xs" />
                        <p className='text-orange-600'></p>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password" placeholder='Your password'
                            className="input input-bordered w-full max-w-xs" />
                        
                        <p className='text-orange-600'></p>
                    </div>
                    <input className='btn bg-orange-600 w-full mt-5' value="Login" type="submit" />
                    <div>
                        {<p className='text-red-600'></p>}
                    </div>
                </form>
                <p className='mt-2'>Don't have an account? <Link className='text-red-600' to="/register">Register</Link></p>
                <div className="divider">OR</div>
                
            </div>
        </div>
    );
};

export default Login;