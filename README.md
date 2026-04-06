# 🍳 AI Recipe Generator 

An AI-powered recipe generator built with React. Add ingredients you have on hand and get a personalized food recipe instantly — powered by the Groq API.

## ✨ Features

- Add ingredients one by one to your list
- Generate a food recipe based on your ingredients using AI
- Fast responses powered by Groq's LPU hardware
- Clean, minimal UI

---

## 📸 Demo

> Add ingredients like `eggs`, `cheese`, `bread` → click **Get a recipe** → get a full recipe with steps!

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- A free [Groq API key](https://console.groq.com)

---

### 1. Clone the repository

```bash
cd AI-Recipe-Generator
git clone https://github.com/DananjayaNirmal/ai-recipe-generator.git

```

### 2. Install dependencies

```bash
npm install
```

### 3. Get your Groq API Key

1. Go to [console.groq.com](https://console.groq.com)
2. Sign up or log in
3. Click **API Keys** → **Create API Key**
4. Copy your key

### 4. Set up environment variables

Create a `.env` file in the root of the project:

```
VITE_GROQ_API_KEY=your-groq-api-key-here
```

> ⚠️ Make sure the key starts with `VITE_` — this is required by Vite to expose it to the browser.

### 5. Start the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🔑 Using Your Own API Key

This project uses the **Groq API** with the `llama-3.3-70b-versatile` model.

To use your own key:

1. Sign up for free at [console.groq.com](https://console.groq.com)
2. Generate an API key from the dashboard
3. Add it to your `.env` file as shown above
4. Restart the dev server with `npm run dev`

You can also swap the model in `src/components/Main.jsx`:

```js
model: "llama-3.3-70b-versatile"  // change this to any supported Groq model
```

## 🛠️ Built With

- [React](https://react.dev/) — UI framework
- [Vite](https://vitejs.dev/) — Build tool
- [Groq SDK](https://console.groq.com/docs/libraries) — AI API client
- [Llama 3.3 70B](https://groq.com/) — Language model


## 🔒 Security Note

Never commit your `.env` file to GitHub. Make sure `.env` is listed in your `.gitignore`:

```
.env
```
