// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer class="flex flex-col w-full h-fit bg-[#374151] text-[#e5e7eb] px-14 py-14">
      <div class="flex flex-row">
        <div class="flex flex-col gap-2 justify-center w-[35%] w-[35%]">
          <div class="flex items-center w-full gap-4">
            <img alt="Logo Preview" src="https://tailwind-generator.b-cdn.net/favicon.png" width="120" />
            <div class="text-2xl  uppercase">Your Company</div>
          </div>
          <div class="grid grid-cols-3 gap-6 mx-auto p-4"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>  <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>  <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
          </div>
        </div>
        <div class="flex flex-row w-[65%] justify-end gap-16 text-nowrap">
          <div class="grid grid-cols-3 gap-24">
            <div class="flex flex-col gap-2">
              <div class="font-bold uppercase text-[#9ca3af] pb-3">Explore</div> <a href="#xxx" class="hover:underline">Features</a>  <a href="#xxx" class="hover:underline">Docs</a>  <a href="#xxx" class="hover:underline">Pricing</a>  <a href="#xxx" class="hover:underline">Security</a>
            </div>
            <div class="flex flex-col gap-2">
              <div class="font-bold uppercase text-[#9ca3af] pb-3">Comany</div> <a href="#xxx" class="hover:underline">About Us</a>  <a href="#xxx" class="hover:underline">Contact</a>  <a href="#xxx" class="hover:underline">Support</a>  <a href="#xxx" class="hover:underline">News</a>
            </div>
            <div class="flex flex-col gap-2">
              <div class="font-bold uppercase text-[#9ca3af] pb-3">Legal</div> <a href="#xxx" class="hover:underline">Imprint</a>  <a href="#xxx" class="hover:underline">Privacy Policy</a>  <a href="#xxx" class="hover:underline">Terms of Use</a>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <div class="font-bold uppercase text-[#9ca3af] pb-3">Newsletter</div>
            <p class="text-[#e5e7eb] mb-2">Subscribe to our newsletter.</p>
            <form class="flex items-center">
              <input type="email" name="email" placeholder="Enter your email" class="w-full bg-gray-100 text-gray-700 rounded-l-lg py-3 px-4 focus:outline-none focus:ring-purple-600 focus:border-transparent" autocomplete="off" required="" />
              <button type="submit" class="bg-[#7e22ce] text-[#ffffff] font-semibold py-3 px-6 rounded-r-lg transition-colors duration-300">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
      <div class="w-full border-t border-gray-500 my-8"></div>
      <div class="text-center">© 2024 Your Companys - All rights reserved.</div>
    </footer>
  );
};

export default Footer;
