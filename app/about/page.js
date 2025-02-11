"use client"
import Link from 'next/link';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Main Content Section */}
      <div className="flex-1 py-16 px-8 md:px-20">
        {/* About Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-pink-600 mb-4">About Us</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Welcome to our platform! We are dedicated to providing seamless and efficient solutions.
          </p>
        </div>

        {/* About Us Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-pink-600 mb-4">Who We Are</h3>
            <p className="text-gray-700 leading-relaxed">
              We are a team of professionals committed to providing event management solutions that are efficient and reliable.
            </p>
          </div>
          <div>
            <img
              src="https://eventsmanagementkerala.com/wp-content/uploads/2023/02/blog-2.27e5a04.webp"
              alt="About Us Image"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>

        {/* Our Story Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center mt-20">
          <div>
            <img
              src="https://eventsmanagementkerala.com/wp-content/uploads/2022/09/120194784-3326284494132901-5082331046715279958-o_15_185637-162346919663970.webp"
              alt="Our Story Image"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-pink-600 mb-4">Our Story</h3>
            <p className="text-gray-700 leading-relaxed">
              We started with a vision to revolutionize event planning. Our journey has been driven by a passion for excellence.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-pink-600 text-white text-center p-10 rounded-lg mt-20">
          <h3 className="text-2xl font-bold mb-4">Get in Touch with Us</h3>
          <p className="text-lg max-w-xl mx-auto mb-6">
            Have any questions? Feel free to contact us. Our support team is ready to assist you 24/7.
          </p>
          <Link href="/contact">
            <a className="bg-white text-pink-600 px-6 py-3 rounded-lg font-semibold hover:bg-pink-200 transition">
              Contact Us
            </a>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>&copy; 2025 Hewlett Hub Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
