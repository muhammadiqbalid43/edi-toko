function Footer() {
  return (
    <footer className="bg-gray-100 py-8 text-slate-950">
      <div className="container mx-auto my-8  px-4 flex flex-col md:grid  md:grid-cols-5 gap-8">
        {/* Products Section */}
        <div className="">
          <h4 className="text-lg font-semibold mb-4">Products</h4>
          <ul className="space-y-2 text-gray-500">
            <li>Bags</li>
            <li>Tees</li>
            <li>Objects</li>
            <li>Home Goods</li>
            <li>Accessories</li>
          </ul>
        </div>

        {/* Company Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-gray-600">
            <li>Who we are</li>
            <li>Sustainability</li>
            <li>Press</li>
            <li>Careers</li>
            <li>Terms & Conditions</li>
            <li>Privacy</li>
          </ul>
        </div>

        {/* Customer Service Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
          <ul className="space-y-2 text-gray-600">
            <li>Contact</li>
            <li>Shipping</li>
            <li>Returns</li>
            <li>Warranty</li>
            <li>Secure Payments</li>
            <li>FAQ</li>
            <li>Find a store</li>
          </ul>
        </div>

        {/* Newsletter Signup */}
        <div className="col-span-2">
          <h4 className="text-lg font-semibold mb-4">
            Sign up for our newsletter
          </h4>
          <p className="text-gray-600 mb-4">
            The latest deals and savings, sent to your inbox weekly.
          </p>
          <div className="flex lg:flex-row flex-col gap-y-3">
            <input
              type="email"
              placeholder=""
              className="lg:w-3/5 w-full px-4 py-2 mr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="lg:w-1/4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Sign up
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="basis-1/3 text-center text-gray-500 text-sm  py-8">
        © 2021 Your Company, Inc. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
