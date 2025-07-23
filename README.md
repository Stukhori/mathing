# 📚 Mathing — Gamified Math Learning App

**Mathing** is a gamified educational mobile and web app designed to enhance mathematical learning through fun, personalization, and the power of AI. Built for students and lifelong learners, Mathing integrates adaptive learning, logical puzzles, and AI-driven feedback in a single, accessible platform.

---

## 🚀 Features

- 🎯 **Adaptive Learning Algorithms**: AI adjusts content difficulty based on user performance.
- 🧩 **Logical Puzzles & Daily Challenges**: Encourage critical thinking and consistent engagement.
- 🕹️ **Gamification Engine** (inspired by Duolingo):
  - XP-based leveling
  - Daily streaks
  - Reward system with in-app purchases
  - Leaderboards for friend/study groups
- 🧠 **AI Assistant**: Supports users with real-time help and personalized lesson suggestions.
- 🌐 **Multilingual Support**: Powered by integrated NLP to support learners from diverse backgrounds.
- 📊 **Progress Tracking**: Identifies weaknesses and recommends areas for improvement.

---

## 🛠 Tech Stack

### 📱 Frontend (Mobile & Web)
- [React Native](https://reactnative.dev/) — UI framework for mobile
- [Expo](https://expo.dev/) — Cross-platform development tooling
- [expo-router](https://expo.github.io/router/docs) — File-based navigation
- [react-hook-form](https://react-hook-form.com/) — Simple and performant forms
- [react-native-svg](https://github.com/software-mansion/react-native-svg) — SVG support
- [AsyncStorage](https://react-native-async-storage.github.io/async-storage/) — Local storage for progress tracking

### 🌐 API Communication
- [Axios](https://axios-http.com/) — For communicating with backend services

### 🔔 Notifications
- [react-native-push-notification](https://github.com/zo0r/react-native-push-notification)

### 💻 Web Support
- [react-native-web](https://necolas.github.io/react-native-web/) — Enables web compatibility

### 🧪 Development Tools
- TypeScript
- Babel
- Expo Dev Client
- React Native SVG Transformer

---

## 🧠 Architecture Overview

- **Frontend**: Built with React Native + Expo for cross-platform deployment (iOS, Android, Web)
- **Backend (planned/optional)**: AI & NLP services to support personalization and multilingual interaction
- **Database**: Efficient schema for storing user progress, XP, rewards, and history
- **AI Integration**: Personalized lesson suggestions and question assistance
- **Gamification Logic**: XP/streak/rewards/leaderboards management with modularity for future expansion

---

## 📈 Research & Results

Research shows increased user engagement, better knowledge retention, and enhanced conceptual understanding using Mathing's personalized and gamified approach. AI-driven feedback loops have improved user satisfaction and daily retention rates.

---

## 🔮 Future Improvements

- Expand mathematical content and puzzle libraries
- Refine AI for more granular personalization
- Implement secure backend with robust data privacy standards
- Community features (forums, group competitions)

---

## 📷 Mockups & Workflow

The app’s intuitive design is illustrated in UX/UI mockups and workflow diagrams (see `/design/` or `/docs/` folder if available). These demonstrate smooth navigation, adaptive lesson flows, and gamified challenge sequences.

---

## 📦 Getting Started

```bash
# Install dependencies
npm install

# Run in development mode
npm start

# Run on Android
npm run android

# Run on iOS
npm run ios

# Run on Web
npm run web
