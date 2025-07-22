# 🌈 Unlimited Color Changer

An elegant mini-project that dynamically changes the background color of a webpage every 500 mili-second using randomly generated HEX codes. The user can control the behavior with intuitive **Start** and **Stop** buttons.

---

## 🧩 Overview

This project is designed to demonstrate the use of:
- DOM manipulation
- `setInterval` / `clearInterval`
- Random color generation in JavaScript
- Interactive UI updates using basic HTML and CSS

---

## ✨ Demo Behavior

- Clicking the **START** button triggers a color change on the page every second.
- Clicking the **STOP** button halts the ongoing color transition.
- The colors are generated dynamically as 6-digit hexadecimal values.

---

## 🔧 Technologies Used

| Layer        | Tech Used         |
|--------------|-------------------|
| Structure    | HTML5             |
| Styling      | CSS3              |
| Logic/Control| JavaScript (ES6)  |

---

## 🗂️ Project Structure

```

Unlimited-Color-Changer/
├── index.html             # Main HTML page
├── css/
│   └── style.css          # Styling for layout and buttons
├── script/
│   └── script.js          # JS logic to control color changing
└── README.md

````

---

## 💡 How to Run

1. Download or clone the repository:
   ```bash
   git clone https://github.com/your-username/unlimited-color-changer.git
    ````

2. Navigate to the project directory.
3. Open `index.html` in any modern browser.

No frameworks or dependencies required.

---

## 🔍 Sample Code Snippet

```js
function change() {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}
```

This function is called every second while the color-changing mode is active.

---

## 🙋‍♂️ Author

**Manu Bansal** : [@ManuBansalS](https://github.com/ManuBansalS)

---

## 📜 License

This project is licensed under the **MIT License**.
You are free to use, modify, and distribute this code with proper credit.

> ✨ Keep creating and let colors define your code!
