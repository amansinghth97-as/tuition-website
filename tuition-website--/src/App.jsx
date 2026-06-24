import { useState } from "react";
import "./App.css";

function App() {
  const [student, setStudent] = useState({
  name: "",
  phone: "",
  className: ""
});

const handleSubmit = (e) => {
  e.preventDefault();
  alert("Thank you for registering! We will contact you soon.");

  const message =
    `Name: ${student.name}%0A` +
    `Phone: ${student.phone}%0A` +
    `Class: ${student.className}`;

  window.open(
    `https://wa.me/919415196753?text=${message}`,
    "_blank"
  );
};
return (
    <div>
      <nav className="navbar">
        <h2>Study With Gaurav Sir</h2>
        <button>Join Now</button>
      </nav>

      <section className="hero">
        <h1>For Online & Offline Learning</h1>
        <p>
          Expert online classes for Class 4 to 8.
          Free Demo Class Available.
        </p>
        <button>Book Free Demo</button>
      </section>

      <section className="section">
        <h2>About Teacher</h2>
        <p>
          Experienced tutor helping students improve
          their academic performance.
        </p>
      </section>

      <section className="section">
        <h2>Courses Offered</h2>

        <div className="cards">
          <div className="card">
            <h3>All Subjects</h3>
            <p>Class 4-8</p>
          </div>

          <div className="card">
            <h3>Sanik Exam Preparation</h3>
            <p>Special Guidance</p>
          </div>

          <div className="card">
            <h3>Navodaya Exam Preparation</h3>
            <p>Special Guidance</p>
          </div>
        </div>
      </section>
      <section className="section">
  <h2>Contact</h2>

  <p>📞 +91 9415196753</p>
  <p>📧 amansinghth1520@gmail.com</p>

  <a
    href="https://wa.me/919415196753"
    target="_blank"
    rel="noreferrer"
  >
    <button>Chat on WhatsApp</button>
  </a>

  <br /><br />

  <h2>Student Registration</h2>

  <form onSubmit={handleSubmit}>
    <input
      type="text"
      placeholder="Student Name"
    />

    <br /><br />

    <input
      type="text"
      placeholder="Mobile Number"
    />

    <br /><br />

    <input
      type="text"
      placeholder="Class"
    />

    <br /><br />

    <button type="submit">
      Register Now
    </button>
  </form>
</section>
    </div>
  );
}

export default App;