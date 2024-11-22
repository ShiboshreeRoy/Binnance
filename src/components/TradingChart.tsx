import React, { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';

export default function TradingChart() {
  const chartContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartContainerRef.current) {
      const chart = createChart(chartContainerRef.current, {
        layout: {
          background: { color: '#1E1E1E' },
          textColor: '#DDD',
        },
        grid: {
          vertLines: { color: '#2B2B2B' },
          horzLines: { color: '#2B2B2B' },
        },
        width: chartContainerRef.current.clientWidth,
        height: Math.max(300, window.innerHeight * 0.4),
      });

      const candlestickSeries = chart.addCandlestickSeries({
        upColor: '#26a69a',
        downColor: '#ef5350',
        borderVisible: false,
        wickUpColor: '#26a69a',
        wickDownColor: '#ef5350',
      });

      // Sample data
      const data = [
        { time: '2024-01-01', open: 45000, high: 47000, low: 44000, close: 46500 },
        { time: '2024-01-02', open: 46500, high: 48000, low: 46000, close: 47500 },
        { time: '2024-01-03', open: 47500, high: 49000, low: 47000, close: 48500 },
      ];

      candlestickSeries.setData(data);

      const handleResize = () => {
        if (chartContainerRef.current) {
          chart.applyOptions({ 
            width: chartContainerRef.current.clientWidth,
            height: Math.max(300, window.innerHeight * 0.4)
          });
        }
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        chart.remove();
      };
    }
  }, []);

  return <div ref={chartContainerRef} className="w-full" />;
}