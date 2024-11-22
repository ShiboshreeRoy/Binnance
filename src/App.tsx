import React from 'react';
import Header from './components/Header';
import TradingChart from './components/TradingChart';
import OrderBook from './components/OrderBook';
import TradeForm from './components/TradeForm';

function App() {
  return (
    <div className="min-h-screen bg-[#0C0C0C] text-white">
      <Header />
      
      <main className="container mx-auto px-2 sm:px-4 py-3 sm:py-6">
        {/* Mobile Price Header */}
        <div className="lg:hidden bg-[#1E1E1E] p-3 rounded-lg mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <h1 className="text-xl font-bold">BTC/USDT</h1>
              <span className="text-green-500 text-lg">47,248.30</span>
            </div>
            <span className="text-green-500">+2.34%</span>
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-400">
            <span>24h High: 48,256.70</span>
            <span>24h Low: 46,892.30</span>
          </div>
        </div>

        {/* Main Trading Interface */}
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-3 sm:gap-6">
          {/* Chart and Order Book Section */}
          <div className="xl:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6">
            <div className="md:col-span-2">
              <div className="bg-[#1E1E1E] p-3 sm:p-4 rounded-lg">
                {/* Desktop Price Header */}
                <div className="hidden lg:flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <h1 className="text-2xl font-bold">BTC/USDT</h1>
                    <span className="text-green-500">47,248.30</span>
                    <span className="text-green-500">+2.34%</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    <span className="mr-4">24h High: 48,256.70</span>
                    <span>24h Low: 46,892.30</span>
                  </div>
                </div>
                <TradingChart />
              </div>
            </div>

            {/* Order Book - Moves below chart on mobile */}
            <div className="md:col-span-1">
              <OrderBook />
            </div>
          </div>

          {/* Trade Form Section */}
          <div className="xl:col-span-1">
            <TradeForm />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;