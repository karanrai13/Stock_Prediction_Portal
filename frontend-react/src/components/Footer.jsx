// src/components/Footer.jsx
import { Facebook, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 border-t border-gray-700 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        <div>
          <h3 className="text-white font-semibold text-lg">StockVision</h3>
          <p className="mt-2">Smarter insights. Better investments.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Navigation</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Predictions</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-2">Follow Us</h4>
          <div className="flex space-x-4 mt-2">
            <Facebook className="hover:text-white cursor-pointer" />
            <Twitter className="hover:text-white cursor-pointer" />
            <Linkedin className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="text-center py-4 border-t border-gray-800 text-xs">
        © {new Date().getFullYear()} StockVision. All rights reserved.
      </div>
    </footer>
  )
}
