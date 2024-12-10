import './App.css'
import Navbar from './Nav'

function Register() {

  return (
    <>
    <div>
    <Navbar />

        <div className='ff'>   
             <center>
             <h4 className='eeeee' style={{ textAlign: "center" }}> Sign up</h4>

          <form onSubmit={(e)=>getData(e)}>
            <input type="text" name="name" placeholder="Enter your first name" />
            <br />
            <br />

            <input type="name" name="name" placeholder="Enter your last name" />
            <br />
            <br />
            <input type="email" name="email" placeholder="Enter your email" />

            <br />
            <br />
            <input type="email" name="email" placeholder="Enter your password" />
          <  br />
            <br />
            <button type="button" class="btn btn-success">Sign up</button>
            <br/>
            <br/>
            <button type="button" class="btn btn-success">Sign in</button>

          </form>
        </center>
   </div>
</div>
    </>
  )
}

export default Register
