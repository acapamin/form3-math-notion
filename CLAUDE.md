# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

An interactive web application for teaching Form 3 Malaysian students Consumer Mathematics (Chapter 3) with a Notion-inspired UI/UX. The app covers savings, investments, credit, and debt management with interactive calculators and quizzes aligned to the KSSM curriculum.

## Commands

### Development
```bash
npm run dev        # Start Vite dev server on localhost:5173
npm run build      # TypeScript compilation + production build
npm run preview    # Preview production build locally
npm run lint       # Run ESLint on the codebase
```

## Architecture

### State Management (Zustand)
- **Global store** at [src/store/useStore.ts](src/store/useStore.ts) manages:
  - `currentPageId`: Active page routing (home, savings-investments, credit-debt)
  - `darkMode`: Theme toggle state
  - `sidebarOpen`: Sidebar visibility
- Single centralized store pattern - avoid creating additional stores unless absolutely necessary

### Routing & Navigation
- **Client-side routing** handled by conditional rendering in [src/App.tsx](src/App.tsx):20-31
- Navigation controlled via `useStore().setCurrentPage(pageId)`
- Page IDs must match those defined in [src/components/Layout/Sidebar.tsx](src/components/Layout/Sidebar.tsx):12-35
- Add new pages by:
  1. Creating component in `src/pages/`
  2. Adding case to `App.tsx` switch statement
  3. Adding sidebar entry to `sidebarItems` array

### Component Structure
- **Block-based content system** inspired by Notion:
  - `src/components/Blocks/` - Reusable content blocks (Heading, Paragraph, Callout, Toggle)
  - `src/components/Interactive/` - Calculators and quiz components
  - `src/components/Layout/` - Sidebar and Topbar
- Each page (Home, SavingsInvestments, CreditDebt) composes these blocks
- Blocks use TypeScript interfaces from [src/types/index.ts](src/types/index.ts)

### Dark Mode Implementation
- Tailwind CSS class-based dark mode (`darkMode: 'class'` in tailwind.config.js)
- Theme toggle in Topbar updates Zustand store
- `useEffect` in App.tsx adds/removes 'dark' class on `<html>` element
- Custom Notion color palette defined in [tailwind.config.js](tailwind.config.js):9-21
  - Use `notion-*` color tokens (e.g., `bg-notion-bg`, `dark:bg-notion-bg-dark`)
  - Never hardcode hex colors - always use theme tokens

### Mathematical Rendering
- KaTeX for rendering equations via `react-katex` package
- Equations displayed in dedicated equation blocks or inline within content
- Financial formulas (interest calculations) use KaTeX for proper mathematical notation

## Key Patterns

### Adding Interactive Calculators
1. Create new component in `src/components/Interactive/`
2. Use controlled inputs with `useState` for form values
3. Calculate results in real-time (update on every input change)
4. Display formulas using KaTeX components
5. Add calculator type to `CalculatorProps` in types/index.ts
6. Maintain consistent styling with existing calculators

### Creating Quiz Questions
- Quiz questions defined inline within page components (see CreditDebt.tsx and SavingsInvestments.tsx)
- Use `QuizQuestion` interface from types/index.ts
- QuizBlock component handles answer validation and feedback
- Each question requires: id, question text, options array, correctAnswer index, explanation

### Content Block Composition
Pages are built by composing block components:
```tsx
<Heading level={1} content="Title" />
<Paragraph>Content text</Paragraph>
<Callout type="info">Important note</Callout>
<Toggle title="Example" defaultOpen={false}>
  <Paragraph>Hidden content</Paragraph>
</Toggle>
```

## Educational Content Guidelines

- All mathematical content must align with Malaysian KSSM Form 3 Mathematics curriculum
- Use Ringgit Malaysia (RM) currency in all financial examples
- Interest rates typically shown as percentages per annum
- Provide worked examples with step-by-step solutions in Toggle blocks
- Quiz explanations should teach, not just indicate correctness
