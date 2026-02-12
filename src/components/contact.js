import React from 'react'
import Button from "../components/button.js"

const Contact = () => {
    
  return (
    <div className="contactBox">
        <div className="container">
            <h2>Get in touch!</h2>
            <p>Interested in collaborating or have a project in mind? Let's chat!</p>
            <a
                href="mailto:jennifer.c.patel@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="button"
                >
                Contact me
            </a>
        </div>

        {/* <section className="py-20">
            <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-purple-50 p-12 text-center md:p-16">
                <h2 className="mb-4 text-4xl font-semibold text-gray-900 md:text-5xl">
                Let's Talk
                </h2>
                <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
                Have a project in mind or want to collaborate? I'd love to hear from you.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                <Link
                    href="mailto:your-email@example.com"
                    className="rounded-full bg-gray-900 px-8 py-4 font-medium text-white transition-transform hover:scale-105 hover:bg-gray-800"
                >
                    Get in Touch
                </Link>
                <Link
                    href="/whoami"
                    className="rounded-full border-2 border-gray-900 px-8 py-4 font-medium text-gray-900 transition-all hover:bg-gray-900 hover:text-white"
                >
                    Learn More
                </Link>
                </div>
            </div>
        </section> */}
  </div>
  )
}

export default Contact