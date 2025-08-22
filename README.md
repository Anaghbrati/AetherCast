# 🌦️ AetherCast – Weather App

[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-Fast-purple)](https://vitejs.dev/)
[![Material UI](https://img.shields.io/badge/Material%20UI-Design-blue)](https://mui.com/)

AetherCast is a responsive weather tracker app built with **React + Vite** and styled with **Material UI**.  
It fetches live weather data and displays temperature, humidity, and conditions with a clean, modern UI.

👉 **Live Demo**: [AetherCast on GitHub Pages]((https://anaghbrati.github.io/AetherCast/))

---

## 🚀 Features

✅ Search weather by city name  
✅ Displays temperature, humidity, and conditions  
✅ Material UI responsive design  
✅ Mobile-friendly interface  
✅ Dynamic background video  

---

## 📸 Screenshots

### 🌍 Desktop View
![Desktop Screenshot](./screenshots/desktop.png)

### 📱 Mobile View
![Mobile Screenshot](./screenshots/mobile.png)

*(Add your own screenshots in the `/screenshots` folder)*

---

## ⚙️ Installation & Setup

Clone the repository:
```bash
git clone https://github.com/Anaghbrati/AetherCast.git
cd AetherCast
```

Install dependencies:
```bash
npm install
```

Start development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Deploy to GitHub Pages:
```bash
npm run deploy
```

---

## 🔑 API Setup

This project uses the **OpenWeatherMap API**.

1. Sign up at [OpenWeatherMap](https://openweathermap.org/)  
2. Get your **API Key**  
3. Create a `.env` file in the project root:
   ```env
   VITE_WEATHER_API_KEY=your_api_key_here
   ```
4. Restart your dev server after adding the key.

---

## 📂 Project Structure

```
AetherCast/
 ├── public/            # Static assets (logo, videos, etc.)
 │   ├── BG1.mp4
 │   └── logo.png
 ├── src/
 │   ├── components/    # React components
 │   │   ├── InfoBox.jsx
 │   │   ├── InfoBox.css
 │   │   ├── SearchBox.jsx
 │   │   ├── SearchBox.css
 │   │   └── WeatherApp.jsx
 │   ├── styles/        # Global styles
 │   │   ├── App.css
 │   │   └── index.css
 │   ├── App.jsx
 │   └── main.jsx
 ├── index.html
 ├── package.json
 ├── vite.config.js
 └── README.md
```

---

## 🛠️ Tech Stack

- ⚛️ **React 19**
- ⚡ **Vite**
- 🎨 **Material UI (MUI)**
- 📡 **OpenWeatherMap API**
- 🚀 **GitHub Pages** (deployment)

---

## 📱 Responsive Design

- Desktop and mobile friendly  
- Uses CSS Flexbox + Media Queries  
- Optimized for modern browsers  

---

## 🙌 Contributing

Contributions are welcome!  
Feel free to:  
- Open issues  
- Submit pull requests  
- Suggest new features  

Check out [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

---

## 📜 License

This project is licensed under the **MIT License**.  
See the [LICENSE](./LICENSE) file for details.
