import { FaWhatsapp } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';

import Logo from './Logo';

function Footer() {
  return (
    <footer className="bg-indigo-950 px-4 py-6 text-indigo-50 sm:px-10 sm:py-8">
      <div className="sm:mb-10 sm:grid sm:grid-cols-2 sm:items-center sm:gap-2">
        <div className="flex w-4/5 flex-col gap-2">
          <p className="">Newsletter</p>
          <h3 className="text-xl font-semibold">Get Discount 40% Off</h3>
          <p>
            Be the first to know about our timely offers that comes every season
            and enjoy first time 40% discount after you purchase at least three
            product from our shop
          </p>
        </div>
        <div className="relative my-8">
          <input
            type="email"
            placeholder="Enter your Email Address"
            className="w-full rounded-lg bg-slate-200 px-3 py-4 text-slate-900 placeholder:font-medium placeholder:text-slate-950"
          />
          <button className="absolute right-1 z-10 mt-1 rounded-lg bg-orange-500 px-3 py-3 font-medium text-indigo-50">
            Subscribe
          </button>
        </div>
      </div>
      <div className="space-y-10 pb-8 sm:flex sm:items-center sm:justify-between sm:gap-2 sm:space-y-0">
        <div className="grid grid-cols-[.2fr_1fr] items-center text-sm sm:gap-4">
          <img src="/assets/shipping-truck.svg" alt="shipping truck" />
          <div>
            <p className="font-semibold">Free Shipping</p>
            <p>Free Shipping On All Order</p>
          </div>
        </div>
        <div className="grid grid-cols-[.2fr_1fr] items-center text-sm sm:gap-4">
          <img src="/assets/guarantee.svg" alt="guarantee" />
          <div>
            <p className="font-semibold">Money Guarantee</p>
            <p>30 days Money Back</p>
          </div>
        </div>
        <div className="grid grid-cols-[.2fr_1fr] items-center text-sm sm:gap-4">
          <img src="/assets/headphone.svg" alt="headphone" />
          <div>
            <p className="font-semibold">Online Support 24/7</p>
            <p>Technical Support 24/7</p>
          </div>
        </div>
        <div className="grid grid-cols-[.2fr_1fr] items-center text-sm sm:gap-4">
          <img src="/assets/wallet.svg" alt="wallet" />
          <div>
            <p className="font-semibold">Secure Payments</p>
            <p>All Cards accepted</p>
          </div>
        </div>
      </div>
      <div className="space-y-4 border-y-2 border-gray-500 py-8">
        <Logo type="light" />
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm sm:w-3/5">
            Be the first to know about our timely offers that comes every season
            and enjoy first time 40% discount after you purchase at least three
            product from our shop
          </p>
          <div className="flex gap-2">
            <FaInstagram size={20} className="text-orange-400" />
            <FaFacebook size={20} className="text-orange-400" />
            <FaXTwitter size={20} className="text-orange-400" />
            <FaWhatsapp size={20} className="text-orange-400" />
          </div>
        </div>
      </div>
      <div className="my-2 space-y-2 text-sm sm:flex sm:items-center sm:justify-between sm:space-y-0">
        <p>{new Date().getFullYear()} DWKY all rights reserved</p>
        <p>Terms & Conditions applied </p>
      </div>
    </footer>
  );
}

export default Footer;
