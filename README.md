# Form 3 Mathematics - Chapter 3: Consumer Mathematics

An interactive web application designed to teach Form 3 Malaysian students about Consumer Mathematics (Chapter 3) with a Notion-inspired UI/UX.

## 📚 What's Inside

This app covers the complete Chapter 3 curriculum:

### 3.1 Savings & Investments
- Simple Interest calculations and formulas
- Compound Interest with different compounding frequencies
- Interactive calculators for both interest types
- Real-world examples and scenarios
- Types of investments (savings accounts, fixed deposits, unit trusts, shares)
- Practice questions with instant feedback

### 3.2 Credit & Debt Management
- Understanding credit and credit cards
- Credit card interest calculations
- Debt management strategies (snowball vs avalanche)
- Credit score and its importance
- Budgeting with the 50/30/20 rule
- Interactive credit card payment calculator
- Practice questions with explanations

## ✨ Features

### Notion-Inspired Design
- Clean, minimalist interface
- Block-based content structure
- Collapsible toggle sections
- Dark/light mode support
- Smooth animations and transitions
- Intuitive sidebar navigation

### Interactive Learning
- **Live Calculators**: See results update in real-time
  - Simple Interest Calculator
  - Compound Interest Calculator
  - Credit Card Payment Calculator
- **Quiz System**: Instant feedback with detailed explanations
- **Toggle Blocks**: Reveal/hide worked examples and solutions
- **Callout Blocks**: Important tips, warnings, and info boxes

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd form3-math-notion
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:5173`

## 🎨 Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Zustand** for state management
- **Lucide React** for icons
- **Framer Motion** for animations

## 📖 How to Use

1. **Navigate**: Use the sidebar to switch between topics
2. **Explore**: Click on toggle sections to reveal examples
3. **Calculate**: Adjust calculator inputs to see how different values affect results
4. **Practice**: Answer quiz questions to test your understanding
5. **Dark Mode**: Toggle between light and dark themes using the top-right button

## 🎯 Learning Objectives

Students will be able to:
- Calculate simple and compound interest
- Understand the time value of money
- Compare different investment options
- Comprehend how credit cards work
- Apply debt management strategies
- Make informed financial decisions
- Solve real-world consumer mathematics problems

## 📱 Responsive Design

The app is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## 🌙 Dark Mode

Built-in dark mode that:
- Reduces eye strain
- Saves battery on OLED screens
- Provides a comfortable learning experience in any environment

## 🏗️ Project Structure

```
form3-math-notion/
├── src/
│   ├── components/
│   │   ├── Blocks/              # Reusable content blocks
│   │   │   ├── Heading.tsx
│   │   │   ├── Paragraph.tsx
│   │   │   ├── Callout.tsx
│   │   │   └── Toggle.tsx
│   │   ├── Interactive/         # Interactive components
│   │   │   ├── SimpleInterestCalculator.tsx
│   │   │   ├── CompoundInterestCalculator.tsx
│   │   │   ├── CreditCardCalculator.tsx
│   │   │   └── QuizBlock.tsx
│   │   └── Layout/              # Layout components
│   │       ├── Sidebar.tsx
│   │       └── Topbar.tsx
│   ├── pages/                   # Main page components
│   │   ├── Home.tsx
│   │   ├── SavingsInvestments.tsx
│   │   └── CreditDebt.tsx
│   ├── store/                   # State management
│   │   └── useStore.ts
│   ├── types/                   # TypeScript types
│   │   └── index.ts
│   ├── App.tsx
│   └── main.tsx
├── public/
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## 🎓 Educational Alignment

This app follows the Malaysian KSSM (Kurikulum Standard Sekolah Menengah) curriculum for Form 3 Mathematics, specifically:
- **Subject**: Mathematics Form 3
- **Chapter**: 3 - Consumer Mathematics: Savings and Investments, Credit and Debt
- **Curriculum**: KSSM (Dokumen Standard Kurikulum dan Pentaksiran)

## 🔮 Future Enhancements

Potential additions:
- More practice questions
- Progress tracking
- Student performance analytics
- Printable worksheets
- Additional chapters
- Gamification elements
- Multi-language support (Bahasa Malaysia)

## 📄 License

This is an educational project for Form 3 Mathematics students in Malaysia.

## 🤝 Contributing

Suggestions and improvements are welcome! This is designed to help students learn consumer mathematics interactively.

---

Built with ❤️ for Malaysian Form 3 students
