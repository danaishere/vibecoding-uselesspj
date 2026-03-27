# 🍹 Personality Cocktail Quiz

A fun, interactive web-based quiz that determines your personality cocktail! Based on your answers to 5 quick questions, the quiz reveals which of 10 unique personality drinks matches your vibe.

## Features

- **5 Interactive Questions**: Each question has 2 options to choose from
- **Smart Scoring System**: Dynamic scoring (0-10 range) based on answer selections
- **10 Personality Drinks**: From calm and cool to wild and fiery!
- **Progress Tracking**: Visual progress bar shows where you are in the quiz
- **Responsive Design**: Works beautifully on desktop, tablet, and mobile devices
- **Instant Results**: Get your personality cocktail with a unique description
- **Restart Option**: Take the quiz again anytime

## How It Works

### Scoring System
Each question is worth different points:
- **Question 1**: Option A (0 pts) vs Option B (1 pt)
- **Question 2**: Option A (0 pts) vs Option B (2 pts)
- **Question 3**: Option A (0 pts) vs Option B (2 pts)
- **Question 4**: Option A (0 pts) vs Option B (3 pts)
- **Question 5**: Option A (0 pts) vs Option B (2 pts)

**Total Score Range**: 0-10 points

### Personality Drinks by Score

| Score | Drink | Personality |
|-------|-------|-------------|
| 0 | Cucumber Mint Cooler | Calm and introspective |
| 1 | Mojito | Steady and reliable |
| 2 | Margarita | Practical yet fun |
| 3 | Strawberry Daiquiri | Naturally charming |
| 4 | Pina Colada | Adventurous and free-spirited |
| 5 | Long Island Iced Tea | Ambitious and bold |
| 6 | Espresso Martini | Sharp and energizing |
| 7 | Cosmopolitan | Stylish and classy |
| 8 | Whiskey Smash | Bold and fearless |
| 9 | Flaming Dragon | Wild and passionate |
| 10 | The Apocalypse | The ultimate wild card |

## Getting Started

### No Installation Required!
Simply open `index.html` in your web browser and start the quiz.

### Files Included
- **index.html** - Main quiz structure and layout
- **style.css** - Styling and animations
- **script.js** - Quiz logic and functionality
- **README.md** - This documentation

## Project Structure

```
vc-quiz/
├── index.html      # Main HTML file
├── style.css       # Styles and responsive design
├── script.js       # Quiz logic and data
└── README.md       # Documentation
```

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients and animations
- **Vanilla JavaScript** - Pure JS for quiz logic (no dependencies!)

## Features Breakdown

### Progress Bar
- Visual indicator of quiz progress
- Updates as you move through questions
- Shows current question number

### Navigation
- Previous button appears after the first question
- Next button changes to "Get My Cocktail!" on the final question
- Answer validation ensures all questions are answered

### Result Display
- Beautiful result card with drink name and emoji
- Full drink description and recipe profile
- Unique personality insight based on your answers
- Restart button to retake the quiz

### Responsive Design
- Fully responsive layout
- Works on all screen sizes
- Touch-friendly buttons for mobile devices

## How to Customize

### Add New Questions
Edit `script.js` and modify the `quizData` array:
```javascript
{
    id: 1,
    question: "Your question here?",
    options: [
        { text: "Option A", value: 0 },
        { text: "Option B", value: 1 }
    ]
}
```

### Add New Drinks
Edit `script.js` and add to the `personalityDrinks` object:
```javascript
0: {
    name: "Your Drink Name",
    emoji: "🍹",
    description: "Drink description and ingredients...",
    personality: "Personality trait description..."
}
```

### Change Colors
Edit `style.css` and modify the gradient colors:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Tips for Best Results

1. **Be Honest**: Answer based on your true personality, not what you think people want to hear
2. **Follow Your Gut**: Your first instinct is usually the most accurate
3. **Have Fun**: This is meant to be entertaining and lighthearted!
4. **Share**: Share your cocktail with friends and compare results!

## Quiz Questions

1. **What's your ideal Friday night vibe?**
   - Calm and relaxed at home
   - Energetic and out with friends

2. **How do you handle stress?**
   - Take it slow and reflect
   - Jump into action and solve it

3. **Your social style is...**
   - Thoughtful and introspective
   - Outgoing and adventurous

4. **What's your work style?**
   - Methodical and organized
   - Creative and spontaneous

5. **How do you spend your ideal day?**
   - Peaceful, with good books and nature
   - Exciting, full of new experiences

## Future Enhancements

Possible improvements for future versions:
- Share results via social media
- Save favorite results
- Compare results with friends
- Add more questions/drinks
- Dark mode toggle
- Animated drink illustrations
- Sound effects

## License

Free to use, modify, and distribute for personal or educational purposes.

---

**Made with 🍹 and JavaScript**

Enjoy discovering your personality cocktail!
