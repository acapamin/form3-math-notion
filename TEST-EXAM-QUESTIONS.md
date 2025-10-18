# Test Script: Exam Questions Feature

## Feature Requirements
- Interactive exam quiz with 30 questions from EXAM-QUESTION.md
- Questions organized by difficulty (Easy: 1-10, Medium: 11-20, Hard: 21-30)
- Notion-style UI with dark mode support
- Show hints, explanations, and rationales
- Track user progress and score

## Test Cases

### 1. Navigation & UI Tests
- [ ] Exam page accessible from sidebar
- [ ] Page title displays correctly
- [ ] Difficulty level tabs/sections visible (Easy, Medium, Hard)
- [ ] Notion color scheme applied (bg-notion-bg, dark:bg-notion-bg-dark)
- [ ] Dark mode toggle works correctly
- [ ] Responsive design on mobile/tablet/desktop

### 2. Question Display Tests
- [ ] Question number and text display correctly
- [ ] LaTeX formulas render properly using KaTeX
- [ ] All 4 answer options visible for each question
- [ ] Hint button/toggle available
- [ ] Question navigation (previous/next) works

### 3. Answer Selection Tests
- [ ] Can select one answer option
- [ ] Selected option highlighted
- [ ] Can change answer before submission
- [ ] Submit button appears after selection
- [ ] Cannot select multiple answers

### 4. Answer Validation Tests
- [ ] Correct answer marked in green
- [ ] Incorrect answer marked in red
- [ ] Correct answer revealed if wrong choice made
- [ ] Explanation/rationale displayed after submission
- [ ] All option rationales visible in explanation view

### 5. Hint System Tests
- [ ] Hint toggle button present
- [ ] Hint content displays when clicked
- [ ] Hint doesn't reveal answer directly
- [ ] Hint accessible before and after answering

### 6. Progress Tracking Tests
- [ ] Score counter displays correctly
- [ ] Score updates when answer is correct
- [ ] Progress bar/indicator shows completion
- [ ] Can see which questions answered
- [ ] Can review previously answered questions

### 7. Difficulty Level Tests
- [ ] Easy questions (1-10) accessible
- [ ] Medium questions (11-20) accessible
- [ ] Hard questions (21-30) accessible
- [ ] Can switch between difficulty levels
- [ ] Progress saved when switching levels

### 8. Content Accuracy Tests
- [ ] Question 1: Savings Definition - correct answer "Savings"
- [ ] Question 2: Simple Interest - correct answer "RM600.00"
- [ ] Question 11: Compound Interest - correct answer "RM17,294.01"
- [ ] Question 21: Inverse Compound - correct answer "RM9,830"
- [ ] All mathematical symbols/formulas render correctly
- [ ] Currency (RM) displays properly

### 9. Interactive Features Tests
- [ ] Calculator integration for complex questions
- [ ] Formula reference available
- [ ] Can reset quiz/clear answers
- [ ] Export/print results option (optional)

### 10. Performance Tests
- [ ] Page loads within 2 seconds
- [ ] No lag when selecting answers
- [ ] Smooth transitions between questions
- [ ] KaTeX renders without flickering
- [ ] No console errors

## Manual Testing Workflow

1. **Initial Load**
   - Navigate to exam page
   - Verify all 30 questions load
   - Check KaTeX rendering

2. **Answer Easy Question**
   - Select Question 1
   - Read hint
   - Select correct answer "Savings"
   - Submit and verify green highlight + explanation

3. **Answer Wrong Answer**
   - Select Question 2
   - Choose wrong answer "RM120.00"
   - Submit and verify red highlight + correct answer revealed

4. **Test Navigation**
   - Move through questions 1-10
   - Switch to Medium difficulty
   - Verify questions 11-20 display
   - Return to Easy level

5. **Dark Mode Test**
   - Toggle dark mode
   - Verify colors change appropriately
   - Check readability of hints/explanations

6. **Progress Review**
   - Answer 5 questions
   - Check score displays correctly
   - Verify progress indicator accurate

## Automated Testing (Optional)
```bash
npm run dev
# Use chrome-devtools MCP to:
# 1. Navigate to exam page
# 2. Click through questions
# 3. Submit answers
# 4. Verify DOM elements present
```

## Success Criteria
- ✅ All 30 questions interactive and functional
- ✅ KaTeX renders all formulas correctly
- ✅ Notion design system maintained
- ✅ Dark mode fully supported
- ✅ No TypeScript/build errors
- ✅ Score tracking accurate
- ✅ Hints and explanations helpful
- ✅ Mobile responsive
