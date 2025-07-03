// src/components/Home.jsx
import { Button } from "./../components/UI/button"

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <section className="text-center px-6 py-20 bg-gradient-to-br from-gray-900 to-black">
        <h1 className="text-5xl font-extrabold text-blue-400 mb-4">Predict the Market with AI</h1>
        <p className="text-lg text-gray-300 mb-8">
          Welcome to StockVision — your smart investment companion.
        </p>
        <div className="space-x-4">
          <Button size="lg">Start Predicting</Button>
          <Button variant="outline" size="lg">Learn More</Button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="text-xl font-semibold mb-2">⚡ Real-Time Predictions</h3>
          <p className="text-gray-400">Updated daily with market-moving insights.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">📊 Visual Analytics</h3>
          <p className="text-gray-400">Understand trends with beautiful interactive charts.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">🔒 Private & Secure</h3>
          <p className="text-gray-400">We prioritize your data's safety above all.</p>
        </div>
      </section>
    </div>
  )
}
