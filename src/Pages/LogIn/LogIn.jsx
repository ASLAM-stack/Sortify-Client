
import { Link,   useNavigate } from 'react-router-dom';
 
import { AiFillGoogleCircle } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';

const LogIn = () => {
    const {signIN,googleSignIn} = useAuth();
     
   
  const navigate = useNavigate()
   
   
   


   

  
  const handleLogIn = (e) =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const info = {email,password}
    console.log(info);
    signIN(email,password)
    .then(result => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "You log in success",
        showConfirmButton: false,
        timer: 1500
      });
      navigate('/')
    })
    .catch(error => {
      console.log(error);
        Swal.fire({
            title: 'Error!',
            text: 'Please provide a registered email and password',
            icon: 'error',
            confirmButtonText: 'Ok'
        });
    });
  }
  const handleGoogleSingIn = () =>{
    googleSignIn()
    .then(result =>{
      console.log(result);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "You log in success",
        showConfirmButton: false,
        timer: 1500
      });
      navigate('/')
    })
   }
    return (
        <div>
            <div>
            <div className="hero min-h-screen">
  <div className="hero-content flex-col  lg:flex-row">
    <div className="text-center lg:text-left md:w-1/2">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Log in to Micromint to manage your projects, connect with clients or freelancers, and securely handle payments. Enjoy features like secure messaging, project management tools, and profile customization. Your data is protected with top-level encryption.</p>
    </div>
    <div className="card md:w-1/2 w-full max-w-sm shadow-2xl">
      <form onSubmit={handleLogIn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email"
          name="email"
          className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" 
          name="password"
          className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
           
        </div>
        <div className="form-control ">
          <button type="submit" className="btn btn-primary" >Login</button>
        </div>
      </form>
      <div className='text-center'>
        <Link className='text-base text-center font-medium text-[#D1A054]' to='/register'>New here?<span className='font-bold'>Create a New Account</span></Link>
        <div>
          <p className='text-base mt-2'>Or sign in with</p>
          <div className='  flex justify-center gap-4 py-4'>
          <AiFillGoogleCircle onClick={handleGoogleSingIn} className='text-3xl' />
          <FaGithub className='text-3xl' />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
        </div>
    );
};

export default LogIn;