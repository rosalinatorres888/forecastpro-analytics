import React from 'react';

const ModelSelection = ({ selectedModel, setSelectedModel, forecastPeriods, setForecastPeriods }) => {
  return (
    <div style={{ 
      margin: '20px auto', 
      padding: '20px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      border: '1px solid #e0e0e0',
      maxWidth: '600px'
    }}>
      <h3 style={{ marginBottom: '15px' }}>Model Configuration</h3>
      
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '200px' }}>
          <label htmlFor="model-select" style={{ 
            display: 'block', 
            marginBottom: '5px',
            fontSize: '14px',
            color: '#666'
          }}>
            Forecasting Model:
          </label>
          <select 
            id="model-select"
            value={selectedModel} 
            onChange={(e) => setSelectedModel(e.target.value)}
            style={{
              width: '100%',
              padding: '8px 12px',
              borderRadius: '4px',
              border: '1px solid #ddd',
              fontSize: '14px'
            }}
          >
            <option value="all">All Models (Compare)</option>
            <option value="arima">ARIMA</option>
            <option value="prophet">Prophet</option>
            <option value="exponential">Exponential Smoothing</option>
            <option value="holtwinters">Holt-Winters</option>
          </select>
        </div>
        
        <div style={{ minWidth: '120px' }}>
          <label htmlFor="forecast-periods" style={{ 
            display: 'block', 
            marginBottom: '5px',
            fontSize: '14px',
            color: '#666'
          }}>
            Forecast Periods:
          </label>
          <input
            id="forecast-periods"
            type="number"
            value={forecastPeriods}
            onChange={(e) => setForecastPeriods(parseInt(e.target.value) || 6)}
            min="1"
            max="24"
            style={{
              width: '100%',
              padding: '8px 12px',
              borderRadius: '4px',
              border: '1px solid #ddd',
              fontSize: '14px'
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ModelSelection;
