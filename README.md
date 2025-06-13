# ForecastPro Analytics 📊

A professional time series forecasting platform built with React that enables users to upload data, select from multiple forecasting models, and visualize predictions with performance metrics.

🔗 **Live Demo**: [https://incomparable-centaur-78a0b8.netlify.app](https://incomparable-centaur-78a0b8.netlify.app)

## 🚀 Features

- **📁 Easy Data Upload**: Drag-and-drop CSV file upload with instant processing
- **🤖 Multiple Forecasting Models**:
  - ARIMA (Auto-Regressive Integrated Moving Average)
  - Prophet (Facebook's forecasting library)
  - Exponential Smoothing
  - Holt-Winters
  - Moving Average
- **📈 Interactive Visualizations**: Real-time chart updates with Recharts
- **📊 Model Performance Metrics**: Compare models using MAE, RMSE, and MAPE
- **💾 Export Functionality**: Download forecasts as CSV files
- **🎨 Modern UI**: Clean, responsive design with real-time feedback

## 🛠️ Tech Stack

- **Frontend**: React, JavaScript
- **Data Visualization**: Recharts
- **Styling**: CSS-in-JS with inline styles
- **Icons**: Lucide React
- **Deployment**: Netlify
- **Build Tool**: Create React App

## 📸 Screenshots

### Main Dashboard
Upload your time series data and get instant forecasts with multiple models.

### Model Selection
Choose from various forecasting algorithms or compare all models at once.

### Performance Metrics
View detailed performance metrics to identify the best model for your data.

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/forecastpro-analytics.git
cd forecastpro-analytics
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📊 How to Use

1. **Upload Data**: Click the upload area or drag and drop a CSV file containing time series data
   - Required format: Date column and value column
   - Supported formats: `.csv`, `.xlsx`

2. **Select Model**: Choose a forecasting model from the dropdown:
   - "All Models" to compare multiple algorithms
   - Individual models for specific analysis

3. **Set Forecast Period**: Adjust how many periods ahead to forecast (1-24)

4. **View Results**: 
   - Interactive chart showing historical data and predictions
   - Performance metrics table comparing model accuracy
   - Export predictions as CSV

## 📁 Project Structure

```
forecastpro-analytics/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── App.js              # Main application component
│   ├── ModelSelection.js   # Model selection component
│   ├── index.js           # Entry point
│   └── ...
├── package.json
└── README.md
```

## 🔮 Future Enhancements

- [ ] Add confidence intervals to forecasts
- [ ] Implement LSTM neural network models
- [ ] Add seasonal decomposition analysis
- [ ] Support for multiple variables (multivariate forecasting)
- [ ] API integration for real-time data
- [ ] Custom parameter tuning for each model
- [ ] Batch processing for multiple files

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**Rosalina Torres**
- GitHub: [@rosalinatorres888](https://github.com/rosalinatorres888)
- LinkedIn: [LinkedIn](https://linkedin.com/in/rosalina2)
- Portfolio: [https://github.com/rosalinatorres888](https://github.com/rosalinatorres888)

## 🙏 Acknowledgments

- React team for the amazing framework
- Recharts for the visualization library
- The open-source community for inspiration and support

---

⭐️ If you found this project helpful, please consider giving it a star on GitHub!# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
