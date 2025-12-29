# 🛒 ShopEase – Single Page Application (SPA)

ShopEase is a responsive Single Page Application (SPA) built using React that fetches and displays product data from a public API.
The application demonstrates API integration, client-side routing, reusable components, and clean UI/UX.

## 🚀 Live Demo

👉 Live URL:
https://glowing-pothos-5c3815.netlify.app/

## 📸 Screenshots
<img width="400" height="250" alt="HomePage" src="https://github.com/user-attachments/assets/9812cce5-4d6f-4b90-a65a-710695eeb62d" />  <img width="400" height="250" alt="About" src="https://github.com/user-attachments/assets/85991af8-2120-4427-aa6b-e3c59aebdac4" />
<img width="400" height="250" alt="Products" src="https://github.com/user-attachments/assets/7c8b9c02-b543-4e5e-894c-8ad6c51dbe35" />  <img width="400" height="250" alt="ProductDetails" src="https://github.com/user-attachments/assets/9bfd8f80-16aa-4224-bee6-d0905056724b" />


## 📌 Project Overview

The goal of this project is to build a functional SPA that:
* Fetches data from an external API
* Displays products dynamically
* Allows navigation between multiple pages without reload
* Shows loading and error states
* Maintains a clean and responsive UI

The app follows a simple flow:
### Home → Products → Product Details

## 🛠️ Technology Used

* React (with Vite) – Frontend framework
* React Router DOM – Client-side routing
* Tailwind CSS – Styling and responsiveness
* Fetch API – Data fetching
* FakeStore API – Public products API
* Netlify – Deployment

## 🌐 API Used

FakeStore API

Fetch all products: https://fakestoreapi.com/products

## Folder Structure
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   ├── Button.jsx
│   └── Loader.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── ProductDetails.jsx
│   └── About.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

## ♻️ Reusable Components

* Navbar – App navigation with active state
* ProductCard – Displays individual product info
* Button – Reusable button component
* Loader – Displays loading spinner during API calls


## 🎨 UI / UX Features

* Responsive design (mobile, tablet, desktop)
* Clean and minimal layout
* Loading spinner for slow API responses
* Error handling for failed API calls
* Active navigation state


## 🧪 How to Run Locally
```
git clone https://github.com/techieshruti/SPA_Project_Assessment.git
cd SPA_Project_Assessment
npm install
npm run dev
```


## 👩‍💻 Author

### Shruti Chandra
Frontend Developer
