// components/Footer.jsx

import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0e0e1a] text-gray-300 pt-10">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* Address Section */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-3">Address</h4>
          <p className="text-sm flex items-start gap-2">
            <MapPin className="w-5 h-5 mt-1 text-red-400" />
              Behind petrol pump sanganer airport,<br />
              circle tonk road, Jaipur 302029<br />
              Ph.0141-2790445,
          </p>
        </div>

        {/* Phone & Email */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-3">Contact</h4>
          <p className="flex items-center gap-2 text-sm">
            <Phone className="w-5 h-5 text-green-400" />
            +91  99296 11574
          </p>
          <p className="flex items-center gap-2 text-sm mt-2">
            <Mail className="w-5 h-5 text-blue-400" />
            <a href="mailto:mahafencing@gmail.com" className="underline">
            dkhansuri@gmail.com, rajasthan@fencigindia.org
            </a>
          </p>
        </div>

        {/* Important Links */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-3">Important Links</h4>
          <ul className="text-sm space-y-2">
            <li>
              <Link href="/privacy">
                <span className="hover:text-white cursor-pointer">Privacy & Refund Policy</span>
              </Link>
            </li>
            <li>
              <Link href="/terms">
                <span className="hover:text-white cursor-pointer">Terms & Conditions</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-gray-400 text-sm border-t border-gray-700 mt-10 py-4">
        Developed by <span className="text-white font-medium">Subban khan</span>
      </div>
    </footer>
  );
}
