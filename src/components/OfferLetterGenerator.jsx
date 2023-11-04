import React, { useState } from "react";
import OfferLetter from "./css/OfferLetter.module.css";
import axios from "axios";

const OfferLetterGenerator = () => {
  const [formData, setFormData] = useState({
    candidateName: "",
    email: "",
    position: "",
    companyName: "",
    offerAmount: "",
    startDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  let sendMail = async ()=>{
    try{
      let res = await axios.post("http://localhost:4500/api/mail/sendmail",formData)

    }
    catch(err){
      console.log(err);
    }
  }

  const handleGenerateOfferLetter = async () => {
    // Here you can use the formData to generate the offer letter
    // For example:
    const offerLetter = `Dear ${formData.candidateName},

    We are pleased to extend an offer of employment for the position of ${formData.position} at ${formData.companyName}. After careful consideration of your qualifications and experience, we are confident that your skills and expertise will make a significant contribution to our team.
    
    This offer is contingent upon the successful completion of a background check and any other pre-employment screenings that may be required for this position. Your anticipated start date will be ${formData.startDate}.
    
    
    
    Terms of Employment:
    
    Position: ${formData.position}
    
    Salary: $${formData.offerAmount}
    
    Benefits: As per company policy, including health insurance, retirement plans, and other applicable benefits.
    
    Work Schedule: 45 hours per week, 5 per week
    
    Responsibilities:
    
    [List key responsibilities and duties relevant to the position]
    
    
    
    Performance Review:
    
    Your performance will be reviewed on a regular basis, and you will be eligible for performance-based salary increases and bonuses based on the company's policies.
    
    Benefits:
    
    In addition to your salary, you will be eligible for our company benefits package, including health insurance, retirement plans, and other applicable benefits. Detailed information about our benefits will be provided separately.
    
    Termination:
    
    Employment with ${formData.companyName} is at-will, which means that either you or the company can terminate the employment relationship at any time, with or without cause and with or without notice.
    
    
    
    Confidentiality Agreement:
    
    As an employee of ${formData.companyName}, you will be required to sign and adhere to our confidentiality agreement, which prohibits the disclosure of sensitive company information.
    
    Please indicate your acceptance of this offer by signing and returning a copy of this letter by [Offer Acceptance Deadline], either by email or regular mail. If you have any questions, feel free to contact me at [Your Phone Number] or [Your Email Address].
    
    We are excited about the opportunity to welcome you to our team and look forward to your positive response.
    
    
    
    Best regards,
    
    
    
    Ms. Sonal Godshelwar, 
    
    HR, Suvidha Foundation (Suvidha Mahila Mandal)
    
    www.suvidhafoundationedutech.org
    
    https://www.linkedin.com/company/suvidha-foundation/
    
    `;

    // Do something with the offer letter, such as displaying it to the user
    console.log(offerLetter);
  };




  return (
    <div className={OfferLetter.div}>
      <div className={OfferLetter.container}>
        <div className={OfferLetter.suvidha_image}>
          {/* <img src="./images/Suvidha-1.jpg" alt="" /> */}
        </div>
        <div className={OfferLetter.suvidha_text}>
          <img
            src="https://miro.medium.com/v2/resize:fit:1200/1*50rIC6gqoBnSw-xOT_BlPQ.png"
            alt="Suvidha Logo"
            
          />

          <h2>Offer Letter</h2>
          <form onSubmit={sendMail}>
            <label>
              Candidate Name:
              <input
                type="text"
                name="candidateName"
                value={formData.candidateName}
                onChange={handleInputChange}
                autoComplete="given-name"
              />
            </label>
            <br />
            <label>
              Email:
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                autoComplete="off"
              />
            </label>
            <br />
            <label>
              Position:
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleInputChange}

              />
            </label>
            <br />
            <label>
              Company Name:
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Offer Amount:
              <input
                type="number"
                name="offerAmount"
                value={formData.offerAmount}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Start Date:
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <button onClick={handleGenerateOfferLetter}>
              Generate Offer Letter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OfferLetterGenerator;
