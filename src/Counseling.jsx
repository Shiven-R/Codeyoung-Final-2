import './App.css'
import Navbar from './Nav'

function Counseling() {

  return (
    <>
      <div>
        {/* Navbar */}
        <Navbar />
        <br />

        {/* Cards */}
        <div className='d-flex gap-4 justify-content-center'>
          
          <div className="card" style={{ width: '18rem' }}>
            <img src="https://img.freepik.com/premium-photo/active-woman-learning-yoga-online-via-laptop_53876-165626.jpg?w=1380" className="card-img-top" alt="Yoga Hero" />
            <div className="card-body">
                <p>Indivudal Yoga Counseling</p>
            <h5>$50</h5>
              <a href="#" className="btn btn-outline-success">Individual Yoga Counseling</a>
            </div>
          </div>

          <div className="card" style={{ width: '18rem' }}>
            <img src="https://unityyogaayurveda.com.au/wp-content/uploads/2021/08/yoga-consultations2-400x284.jpeg" className="card-img-top" alt="Mermaid Pose" />
            <div className="card-body">
                <p>Group Yoga Therapy</p>
            <h5>$30</h5>

              <a href="#" className="btn btn-outline-success">Group Yoga Therapy</a>
            </div>
          </div>

          <div className="card" style={{ width: '18rem' }}>
            <img src="https://img.freepik.com/premium-photo/young-yogi-attractive-woman-paripurna-navasana-pose-white-ba_926199-1997159.jpg?w=1380" className="card-img-top" alt="Pastel Sun Yoga" />
            <div className="card-body">
                <p>Group Yoga Consultation</p>
            <h5>$40</h5>

              <a href="#" className="btn btn-outline-success">Group Yoga Consultation</a>
            </div>
          </div>

        </div>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        


        <div className='ae'>
          <p>Contact Us</p>
          <p>Email Info: Yogainfo@gmail.com</p>
          <p>Phone number: 613-254-5213</p>
          <footer>©2024 Yoga Studio. All rights reserved</footer>
        </div>

      </div>
    </>
  )
}

export default Counseling;
