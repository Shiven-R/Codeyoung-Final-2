import './App.css';
import Navbar from './Nav';
import Faq from 'react-faq-component'; 

const data = {
    rows: [
        {
            title: "1.What is yoga?",
            content: `Yoga is a practice that connects the body, breath, and mind. It uses physical postures, breathing exercises, and meditation to improve overall health.`,
        },
        {
            title: "2.What are the benefits of yoga?",
            content: "Yoga's incorporation of meditation and breathing can help improve a person's mental well-being. “Regular yoga practice creates mental clarity and calmness; increases body awareness; relieves chronic stress patterns; relaxes the mind; centers attention; and sharpens concentration,” says Dr. Nevins.",
        },
        {
            title: "3.How often should I practice yoga?",
            content: `If you want to improve your flexibility, you should do yoga at least three times a week, even if they're shorter classes. “Any focus flow on a specific body part or any mobility class will allow for the lactic acid to release and for the muscles and joints to have more movement and flexibility,” Mariana says.`,
        },
      
    ],
};

const styles = {
    titleTextColor: "white",
    rowTitleColor: "white",
    rowBackgroundColor: "green",
};

const config = {
    animate: true,
    tabFocus: true,
};

function FAQ() {
    return (
        <div>
            <Navbar />
            <Faq data={data} styles={styles} config={config} />
            
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
        <br/>
        <br/>  <br/>
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

        
    );
}

export default FAQ;
