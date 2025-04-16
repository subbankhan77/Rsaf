import {
  Mail,
  Phone,
  MapPin,
  User,
  MessageSquareText,
} from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white py-10 px-4 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-gray-900 p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>

        {/* Contact Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 text-sm font-semibold flex items-center gap-2">
              <User className="w-4 h-4" />
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-semibold flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block mb-2 text-sm font-semibold flex items-center gap-2">
              <MessageSquareText className="w-4 h-4" />
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Contact Info */}
        <div className="mt-10 text-center text-sm text-gray-400 space-y-2">
          <div className="flex items-center justify-center gap-2">
            <Mail className="w-4 h-4 text-blue-500" />

            <a href="mailto:info@rsfa.in" className="underline">dkhansuri@gmail.com, rajasthan@fencigindia.org</a>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Phone className="w-4 h-4 text-green-400" />
            <span>+91  99296 11574</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-center">
            <MapPin className="w-4 h-4 text-red-400" />
            <span>Head office:2, Behind petrol pump sanganer airport Ph.0141-2790445,,
              circle tonk road, Jaipur 302029</span>
          </div>
        </div>
      </div>
    </div>
  );
}
