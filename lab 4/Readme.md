# JavaScript Quiz Game (Console Based)

This project is a simple **JavaScript Console Quiz Game** created for academic learning purposes.  
The quiz runs inside the **browser console** and asks multiple-choice questions.  
The user selects answers using prompt boxes, and the final score is displayed at the end.

---

## 📌 Features
- Simple and interactive JavaScript quiz  
- Uses `prompt()` for user input  
- Displays correct/wrong feedback  
- Shows final score  
- Clean and beginner-friendly code  
- Screenshot proof of working output  

---

## 📁 Project Structure

```
project/
 ├── quiz.js
 ├── README.md
 └── screenshots/
        ├── question.png
        ├── correct.png
        ├── wrong.png
        └── final_score.png
```

---

## 🧠 How the Quiz Works
1. Each question appears in a browser `prompt()` window.  
2. User enters the answer (example: A, B, C, D).  
3. Alert shows:
   - ✅ Correct  
   - ❌ Wrong  
4. After all questions, the quiz displays your final score.

---

## 📸 Screenshots

### 🖼️ 1. Question Prompt  
![Question](screenshots/question.png)

### 🖼️ 2. Correct Answer  
![Correct](screenshots/correct.png)

### 🖼️ 3. Wrong Answer  
![Wrong](screenshots/wrong.png)

### 🖼️ 4. Final Score  
![Final Score](screenshots/final_score.png)

*(Screenshots are provided in the screenshots folder.)*

---

## ▶️ How to Run the Quiz

### **Method 1 — Using Browser Console**
1. Open **Chrome / Edge / Firefox**
2. Right-click → Inspect → Console
3. Paste the entire `quiz.js` file into the console
4. Press **Enter**
5. Quiz will start immediately

---

## 📝 Code Used (quiz.js)

```javascript
const questions = [
  {
    question: "1. Which language runs in the browser?",
    options: "A) Java  B) C++  C) JavaScript  D) Python",
    answer: "C"
  },
  {
    question: "2. Which symbol is used for comments in JavaScript?",
    options: "A) //   B) <!--   C) ##   D) **",
    answer: "A"
  },
  {
    question: "3. Which method is used to print output in the console?",
    options: "A) print()   B) echo()   C) console.log()   D) write()",
    answer: "C"
  }
];

let score = 0;

for (let i = 0; i < questions.length; i++) {
  let userAnswer = prompt(
    questions[i].question +
      "\n" +
      questions[i].options +
      "\nEnter your answer (A/B/C/D):"
  );

  userAnswer = userAnswer ? userAnswer.toUpperCase() : "";

  if (userAnswer === questions[i].answer) {
    alert("Correct Answer! 🎉");
    score++;
  } else {
    alert("Wrong Answer ❌");
  }
}

alert("Your Final Score is: " + score + "/" + questions.length);
```

---

## 🎯 Learning Outcomes

- Understanding JavaScript basics  
- Using conditionals (`if-else`)  
- Using arrays and objects  
- Handling browser prompts and alerts  
- Writing clean and interactive JS code  

---

## 👨‍🏫 Submitted By
**Name:** Kunal Yadav  
**Course:** First Year – End Semester Activity  
**Project:** JavaScript Console Quiz  

---

## ✔️ End of README
