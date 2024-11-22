import React from 'react';

type OrderType = {
  price: number;
  amount: number;
  total: number;
};

export default function OrderBook() {
  const asks: OrderType[] = [
    { price: 47250.50, amount: 0.5421, total: 25612.45 },
    { price: 47249.80, amount: 0.3210, total: 15167.18 },
    { price: 47248.90, amount: 0.8543, total: 40359.95 },
  ];

  const bids: OrderType[] = [
    { price: 47247.20, amount: 0.6532, total: 30865.91 },
    { price: 47246.50, amount: 0.4321, total: 20415.21 },
    { price: 47245.80, amount: 0.7654, total: 36163.51 },
  ];

  return (
    <div className="bg-[#1E1E1E] p-3 sm:p-4 rounded-lg h-full">
      <div className="flex flex-col sm:flex-row justify-between mb-4">
        <h2 className="text-white font-semibold mb-2 sm:mb-0">Order Book</h2>
        <div className="text-xs sm:text-sm text-gray-400 flex justify-between sm:space-x-4">
          <span>Price(USDT)</span>
          <span>Amount(BTC)</span>
          <span>Total</span>
        </div>
      </div>

      <div className="space-y-2 text-xs sm:text-sm">
        {asks.map((order, index) => (
          <div key={index} className="flex justify-between text-red-500">
            <span>{order.price.toFixed(2)}</span>
            <span>{order.amount.toFixed(4)}</span>
            <span>{order.total.toFixed(2)}</span>
          </div>
        ))}

        <div className="text-xl sm:text-2xl text-white font-bold text-center py-2">
          47,248.30 USDT
        </div>

        {bids.map((order, index) => (
          <div key={index} className="flex justify-between text-green-500">
            <span>{order.price.toFixed(2)}</span>
            <span>{order.amount.toFixed(4)}</span>
            <span>{order.total.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}