import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    navigate("/");
  };

  return (
    <div>
      <h2>Contact Me</h2>

      <p>Email: stevenikharo7@gmail.com</p>
      <p>Phone: +1 416 832 3593</p>

      <form onSubmit={handleSubmit}>
        <input placeholder="First Name" required /><br />
        <input placeholder="Last Name" required /><br />
        <input placeholder="Email" required /><br />
        <textarea placeholder="Message" required></textarea><br />

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
