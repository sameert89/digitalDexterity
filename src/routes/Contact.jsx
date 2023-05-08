import "../stylesheets/Login.css";
export default function Contact() {
  const message =
    "Please submit the above form, so that I can get back to you 😄";
  return (
    <div className="form-container">
      <form
        action="https://formsubmit.co/sameertrivedi1234@gmail.com"
        className="form contact-form"
        method="POST"
      >
        <span></span>
        <div className="form-inner">
          <h2 className="form-title">Contact</h2>
          <div className="form-content">
            <input
              name="Sender Name"
              className="input"
              type="text"
              placeholder="Your Name"
              required={true}
            />
            <input
              name="Sender Email"
              className="input"
              type="email"
              placeholder="Your e-mail"
              required={true}
            />
            <textarea
              name="Message"
              rows={3}
              className="input"
              cols={3}
              placeholder="Your Message"
              required={true}
            />
            <button className="btn" type="submit">
              SUBMIT
            </button>
            <p className="bottom-note">{message}</p>
          </div>
        </div>
      </form>
    </div>
  );
}
