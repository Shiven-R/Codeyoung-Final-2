import './App.css'
import Navbar from './Nav'

function About() {

  return (
    <>
    <div>
      {/* Navbar */}
      <Navbar/>
      <br/>

      {/* Header */}
      <div className='bgimge' style={{height:"200px"}}>
        <br/>
        <br/>
        <div className='se'> 
          <h2>About our Yoga Practice</h2>
        <p> Discover the jounrey to a healthier and more mindful life with us.</p>
        </div>
      </div>


          {/* Text */}

      <div>
      <h4 style={{ color: 'gold' }}>About Yoga</h4>
      <p style={{ color: 'gold' }}>Yoga is a group of physical,mental and spiritual practices or disciplines which orignated in ancient India. Yoga is one of the six Astika (orthodox) schools of India philisophical traditions. Various styles of yoga combine physical postures, breathing techniques, and meditiation or relaxation.</p>
      <p>In today's fast paced world, yoga provides a way to stay fit, calm and balanced. Our yoga studio offers classes for all levels, from begginer to advanced practitioners, and our instructors are dedicated to helping you ahcieve your personal wellness goals.
      Whether you are looking to improve your physical health, reduce stress, or enchance your spirtual well-being, yoga offers a holistic approach to acheiving balabce in your life. Join us and explore the transformative power of yoga.</p>



      </div>


          {/* Images */}

          <div className='d-flex gap-4 justify-content-center'>
        <div>
          <img src="https://res.cloudinary.com/peloton-cycle/image/fetch/f_auto,c_limit,w_3840,q_90/https://images.ctfassets.net/6ilvqec50fal/4etuYztO7f1eMUnRn8e4Ia/62281f46a148c25651f09b8f8287ad0c/GettyImages-1223389038.jpg" width={"400px"}/>
          <div className='justify-content-center text-center'>
        

          </div>
         
        </div>

        <div>
          <img src="https://www.tonal.com/wp-content/uploads/2023/10/Yoga-Hero.png?w=1024&resize=1200%2C800" width={"400px"}/>
          <div className='justify-content-center text-center'>
          

          </div>
        </div>

        <div>
          <img src="https://www.ekhartyoga.com/media/image/articles/Laia_Bove_Mermaid-pose.jpg" width={"400px"}/>
          <div className='justify-content-center text-center'>
        

          </div>
           <br/>
           
          <img src="https://www.auromere.com/images/Yoga-Pastel-Sun-FB.jpg" width={"400px"}/>
  
        </div>

    
        </div>

        <h4>Our mission</h4>
        <p>Our mission is to create a peaceful and supportive environment where individuals can explore the practice of yoga and develop a deeper connection with their mind, body and spirit.</p>

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

export default About
