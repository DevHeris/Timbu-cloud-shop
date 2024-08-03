import Logo from './Logo';

function Footer() {
  return (
    <footer className="bg-indigo-950 px-4 py-6 text-indigo-50">
      <div className="flex w-3/4 flex-col gap-2">
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
          className="w-full rounded-lg px-2 py-3 text-slate-900 placeholder:font-medium placeholder:text-slate-950"
        />
        <button className="absolute right-1 z-10 mt-1 rounded-lg bg-orange-500 px-2 py-2 font-medium text-indigo-50">
          Subscribe
        </button>
      </div>
      <div className="space-y-10 pb-8">
        <div className="grid grid-cols-[.2fr_1fr] items-center">
          <img src="/assets/shipping-truck.svg" alt="shipping truck" />
          <div>
            <p className="font-semibold">Free Shipping</p>
            <p>Free Shipping On All Order</p>
          </div>
        </div>
        <div className="grid grid-cols-[.2fr_1fr] items-center text-sm">
          <img src="/assets/guarantee.svg" alt="guarantee" />
          <div>
            <p className="font-semibold">Money Guarantee</p>
            <p>30 days Money Back</p>
          </div>
        </div>
        <div className="grid grid-cols-[.2fr_1fr] items-center text-sm">
          <img src="/assets/headphone.svg" alt="headphone" />
          <div>
            <p className="font-semibold">Online Support 24/7</p>
            <p>Technical Support 24/7</p>
          </div>
        </div>
        <div className="grid grid-cols-[.2fr_1fr] items-center text-sm">
          <img src="/assets/wallet.svg" alt="wallet" />
          <div>
            <p className="font-semibold">Secure Payments</p>
            <p>All Cards accepted</p>
          </div>
        </div>
      </div>
      <div className="space-y-4 border-y-2 border-gray-500 py-8">
        <Logo type="light" />
        <p className="text-sm">
          Be the first to know about our timely offers that comes every season
          and enjoy first time 40% discount after you purchase at least three
          product from our shop
        </p>
      </div>
      <div className="my-2 space-y-2 text-sm">
        <p>{new Date().getFullYear()} DWKY all rights reserved</p>
        <p>Terms & Conditions applied </p>
      </div>
    </footer>
  );
}

export default Footer;
