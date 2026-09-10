"use client";

import { useRef } from "react";

export default function ContactForm() {
  const formRef = useRef(null);

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();

    const form = formRef.current;
    if (!form) return;

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const project = form.project.value;
    const message = form.message.value.trim();

    // Validation
    if (!name) {
      form.name.reportValidity();
      return;
    }

    if (!email || !email.includes('@')) {
      form.email.reportValidity();
      return;
    }

    if (!project) {
      form.project.reportValidity();
      return;
    }

    if (!message) {
      form.message.reportValidity();
      return;
    }

    const serviceLabels = {
      "business-website": "Business Website",
      "saas-product": "SaaS Product",
      "custom-website": "Custom Website",
      "ai-upgrades": "AI Website Upgrades",
      "digital-growth": "Digital Growth",
      "other": "Something Else",
    };

    const selectedService = serviceLabels[project] || project || "Not specified";

    const whatsappMessage = `New Project Inquiry - AI Explorer Agency

Name: ${name}
Email: ${email}
Service: ${selectedService}

Project Details:
${message}

Please get back to me regarding this project.`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/923229404392?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <form
      ref={formRef}
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
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="project">What do you need?</label>
        <select
          id="project"
          name="project"
          defaultValue=""
          required
        >
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

      <div className="form-submit-row">
        <button type="submit" className="btn btn-primary form-submit">
          Send Project Inquiry
          <span>→</span>
        </button>

        <button
          type="button"
          className="btn btn-whatsapp form-submit"
          onClick={handleWhatsAppSubmit}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Send via WhatsApp
        </button>
      </div>
    </form>
  );
}
