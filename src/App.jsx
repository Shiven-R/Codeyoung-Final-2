import './App.css'
import Navbar from './Nav'

function App() {

  return (
    <>
    <div>
      {/* Navbar */}
      <Navbar/>
      <br/>

      {/* Header */}
      <div className='bgimg' style={{height:"200px"}}>
        <br/>
        <br/>
        <div className='ee'> 
          <h2>Welcome to our yoga studio </h2>
        <p> Discover the perfect yoga style for your mind, body and spirit.</p>
        </div>
      </div>


      <h2 className=' a text-center'>
        Popular yoga styles
      </h2>

            {/* Images */}

      <div className='d-flex gap-4 justify-content-center'>
        <div>
          <img src="https://yogaclub.com/cdn/shop/articles/sporty-fit-woman-doing-hatha-yoga_1024x1024.jpg?v=1562779543" width={"400px"}/>
          <div className='justify-content-center text-center'>
          <p>Hatha yoga</p>
          <p>A gentle form of yoga that focuses on physical postures and breathing exercises.</p>
          <button className='btn btn-success'>Learn more</button>

          </div>
         
        </div>

        <div>
          <img src="https://yogapractice.com/wp-content/uploads/2019/04/10-Things-You-Need-To-Know-About-Vinyasa-Flow.jpg" width={"400px"}/>
          <div className='justify-content-center text-center'>
          <p>Hatha yoga</p>
          <p>A gentle form of yoga that focuses on physical postures and breathing exercises.</p>
          <button className='btn btn-success'>Learn more</button>

          </div>
        </div>

        <div>
          <img src="https://www.yogabasics.com/yogabasics2017/wp-content/uploads/2021/03/Ashtanga-Yoga.jpeg" width={"400px"}/>
          <div className='justify-content-center text-center'>
          <p>Hatha yoga</p>
          <p>A gentle form of yoga that focuses on physical postures and breathing exercises.</p>
          <button className='btn btn-success'>Learn more</button>

          </div>
        </div>

        <div>
          <img src="https://yeditepehastaneleri.com/sites/default/files/2022-03/yoga.jpg" width={"400px"}/>
          <div className='justify-content-center text-center'>
          <p>Hatha yoga</p>
          <p>A gentle form of yoga that focuses on physical postures and breathing exercises.</p>
          <button  class="btn btn-success">Learn more</button>

          </div>
        </div>
      </div>
      <br/>
      <br/>
      <div className='ae'>
      <p>Contact Us</p>
      <p>Email Info: Yogainfo@gmail.com</p>
      <p>Phone number : 613-254-5213</p>
<footer>©2024 Yoga Studio. All rights reserved</footer>

      </div>
   

          </div>
    </>
  )
}

export default App
