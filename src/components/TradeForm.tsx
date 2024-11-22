import React, { useState } from 'react';

export default function TradeForm() {
  const [orderType, setOrderType] = useState<'limit' | 'market'>('limit');
  const [side, setSide] = useState<'buy' | 'sell'>('buy');

  return (
    <div className="bg-[#1E1E1E] p-3 sm:p-4 rounded-lg">
      <div className="flex space-x-2 mb-4">
        <button
          onClick={() => setSide('buy')}
          className={`flex-1 py-2 text-sm sm:text-base rounded ${
            side === 'buy'
              ? 'bg-green-500 text-white'
              : 'bg-gray-800 text-gray-400'
          }`}
        >
          Buy
        </button>
        <button
          onClick={() => setSide('sell')}
          className={`flex-1 py-2 text-sm sm:text-base rounded ${
            side === 'sell'
              ? 'bg-red-500 text-white'
              : 'bg-gray-800 text-gray-400'
          }`}
        >
          Sell
        </button>
      </div>

      <div className="flex space-x-2 mb-4">
        <button
          onClick={() => setOrderType('limit')}
          className={`flex-1 py-1.5 text-xs sm:text-sm rounded ${
            orderType === 'limit'
              ? 'bg-gray-700 text-white'
              : 'bg-gray-800 text-gray-400'
          }`}
        >
          Limit
        </button>
        <button
          onClick={() => setOrderType('market')}
          className={`flex-1 py-1.5 text-xs sm:text-sm rounded ${
            orderType === 'market'
              ? 'bg-gray-700 text-white'
              : 'bg-gray-800 text-gray-400'
          }`}
        >
          Market
        </button>
      </div>

      <div className="space-y-4">
        {orderType === 'limit' && (
          <div>
            <label className="block text-xs sm:text-sm text-gray-400 mb-1">Price</label>
            <div className="relative">
              <input
                type="number"
                className="w-full bg-gray-800 rounded p-2 text-white pr-16"
                placeholder="0.00"
              />
              <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs sm:text-sm">
                USDT
              </span>
            </div>
          </div>
        )}

        <div>
          <label className="block text-xs sm:text-sm text-gray-400 mb-1">Amount</label>
          <div className="relative">
            <input
              type="number"
              className="w-full bg-gray-800 rounded p-2 text-white pr-16"
              placeholder="0.00"
            />
            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs sm:text-sm">
              BTC
            </span>
          </div>
        </div>

        <button
          className={`w-full py-3 rounded-lg font-semibold text-sm sm:text-base ${
            side === 'buy'
              ? 'bg-green-500 hover:bg-green-600'
              : 'bg-red-500 hover:bg-red-600'
          }`}
        >
          {side === 'buy' ? 'Buy BTC' : 'Sell BTC'}
        </button>
      </div>
    </div>
  );
}