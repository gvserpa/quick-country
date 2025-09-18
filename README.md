# Quick Country

[Live Demo](https://quick-country.vercel.app/)

Quick Country is a **React + Vite project** that displays detailed information about countries, including **flags, capitals, population, continent**, and **real-time currency exchange rates**. The project consumes data from the **Unsplash API**, **REST Countries API** and **ExchangeRate APIs**, and was built with a focus on **responsiveness, modern design, and usability**.

---

## 🌐 Technologies Used

- [React](https://reactjs.org/) – JavaScript library for building user interfaces  
- [Vite](https://vitejs.dev/) – Fast frontend build tool  
- [Axios](https://axios-http.com/) – For HTTP requests  
- [Unsplash API](https://unsplash.com/developers) – Country images  
- [ExchangeRate API](https://exchangerate.host/) – Real-time currency exchange rates
- [REST Countries API](https://restcountries.com/) – Country information (name, capital, population, flags, continent)
- Modern CSS with **flexbox, shadows, gradients, and responsive design**

---

## 🖼️ Features

- Displays **country images** via Unsplash  
- Shows **official name, capital, population, and continent**  
- Displays the **country flag**  
- Calculates **USD to local currency exchange rate** in real-time  
- **Fully responsive layout**, adapting to tablets and mobile screens  
- Modern cards with **hover effects, shadows, and smooth transitions**

---

## 🎨 Design

- Cards with **soft gradient backgrounds** and rounded corners  
- Subtle shadows for depth effect  
- Centered content for images and text  
- Elegant and readable typography  
- Layout adapts seamlessly to different screen sizes  

---

## ⚡ Running the Project Locally

1. Clone the repository:

```
git clone https://github.com/your-username/quick-country.git
```

2. Go into the project folder:

```
cd quick-country
```

3. Install dependencies:

```
npm install
# or
yarn
```

4. Create a .env file in the root and add your API keys:

```
VITE_UNSPLASH_ACCESS_KEY=YOUR_UNSPLASH_KEY
VITE_EXCHANGE_KEY=YOUR_EXCHANGE_KEY
```

5. Start the development server:

```
npm run dev
# or
yarn dev
```

6. Open http://localhost:5173
 in your browser to see the project running.
### 

```
📂 Project Structure
├── public/             # Static files
├── src/
│   ├── assets/         # Images and icons
│   ├── components/     # React components
│   ├── pages/          # App pages
│   ├── api/            # API configurations (Unsplash, ExchangeRate)
│   ├── App.jsx         # Main component
│   └── index.css       # Global styles
├── .env                # Environment variables (not committed)
├── package.json
└── vite.config.js

```

🔑 Environment Variables

VITE_UNSPLASH_ACCESS_KEY – Unsplash API key

VITE_EXCHANGE_KEY – ExchangeRate API key

Important: The .env file is in .gitignore, so your keys are not pushed to GitHub.

🚀 Deployment

The project is hosted on Vercel:

https://quick-country.vercel.app/

👨‍💻 Future Improvements

- Add country search functionality
- Add filter by continent
- Implement dark/light mode
- Add local cache for exchange rates
- Improve card animations

📝 License

This project is open source and free to use.
