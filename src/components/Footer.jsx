import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t py-8 sm:py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 md:gap-40 gap-x-5 px-4 sm:px-6 md:px-10 lg:px-16 sm:ml-5 ml-16">
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl text-blue-800 font-bold">COMPANY</h2>
            <ul className="mt-4">
              <li>About us</li>
              <li>Awards</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl text-blue-800  font-bold">MEDIA</h2>
            <ul className="mt-4">
              <li>Company news</li>
              <li>Videos</li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl text-blue-800  font-bold">SPONSORSHIP</h2>
            <ul className="mt-4">
              <li>Rip Curl Cup</li>
              <li>Southampton FC</li>
              <li>Bali Sports Foundation</li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-xl sm:text-2xl text-blue-800 uppercase font-bold">Legal</h2>
            <ul className="mt-4">
              <li>Risk disclosure</li>
              <li>Privacy policy</li>
              <li>Return policy</li>
              <li>Customer Agreement</li>
              <li>AML policy</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 py-2 text-white">
        <div className="container mx-auto text-center text-xs">
          <p>© 2023 WithBloom, All rights reserved. Contact e-mail: support@withbloom.com. Registered address: 1st Floor, Meridian Place, Choc Estate, Castries, Saint Lucia.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
