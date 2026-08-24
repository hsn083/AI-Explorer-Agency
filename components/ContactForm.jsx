export default function ContactForm() {
  return (
    <form
      className="contact-form"
      action="https://formsubmit.co/ac8de5ca45edccbec64350a6d835d3b4"
      method="POST"
      encType="multipart/form-data"
    >
      <input type="hidden" name="_subject" value="New Project Inquiry - AI Explorer Agency" />
      <input type="hidden" name="_next" value="https://www.aiexplorer.agency/thank-you" />
      <input type="hidden" name="_captcha" value="false" />

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" placeholder="you@example.com" required />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="project">What do you need?</label>
        <select id="project" name="project" defaultValue="">
          <option value="">Select a service</option>
          <option value="business-website">Business Website</option>
          <option value="saas-product">SaaS Product</option>
          <option value="custom-website">Custom Website</option>
          <option value="ai-upgrades">AI Website Upgrades</option>
          <option value="digital-growth">Digital Growth</option>
          <option value="other">Something Else</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="message">Tell us about your project</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Tell us about your idea, business or project..."
          required
        ></textarea>
      </div>

      <button type="submit" className="btn btn-primary form-submit">
        Send Project Inquiry
        <span>→</span>
      </button>
    </form>
  );
}
