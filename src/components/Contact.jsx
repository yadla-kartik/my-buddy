import React from "react";

function Contact() {
  return (
    <section className="flex items-center justify-center mb-10 mt-20">
      <div className="bg-[#6A2AFF] text-white rounded-3xl shadow-lg p-10 w-full max-w-6xl text-center font-poppins">
        
        <h2 className="text-3xl font-semibold poppins mb-6">Contact Us</h2>

        <div className="flex flex-col sm:flex-row items-center poppins px-10 gap-60 text-2xl font-semibold">
          <div className="flex items-center gap-2">
            <span className="text-2xl">📧</span>
            <a
              href="mailto:app.buddyindia@gmail.com"
              className="hover:underline poppins"
            >
              app.mybuddy@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-2xl">📞</span>
            <a href="tel:+918721002133" className="hover:underline poppins">
              +91-8109788772
            </a>
          </div>
        </div>

        <p className="mt-6 text-lg font-semibold">
         Let’s Build Buddy Together 🤝!
        </p>
      </div>
    </section>
  );
}

export default Contact;
