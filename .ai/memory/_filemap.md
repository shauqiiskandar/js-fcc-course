# Project: JS FCC course

## Directory Tree
```
JS FCC course/
├── .ai/
│   └── memory/           ← memobrain project memory
├── .qodo/                ← qodo agent config
├── .sixth/               ← sixth skills config
├── arrays/               ← array exercises (3)
│   ├── golf checker/     ← index.html + scripts.js
│   ├── lunch picker/     ← index.html + scripts.js
│   └── shopping list/    ← index.html + scripts.js
├── functions/            ← function exercises (1)
│   └── Loan Qualification Checker/
├── loops/                ← loop exercises (3)
│   ├── factorialCalculator/
│   ├── Missingletterdetector/
│   └── sentenceAnalyzer/
├── objects/              ← object exercises (4)
│   ├── manifestchecker/
│   ├── quizgame/
│   ├── recipetracker/
│   └── wildlifechecker/
├── misc_lab/             ← 9 standalone algorithm files
│   ├── falsy_remover.js
│   ├── First_element_finder.js
│   ├── gradebook.js
│   ├── inventory_management.Js
│   ├── largest_number_finder.js
│   ├── pyramid_generator.js
│   ├── splice_slice_algo.js
│   ├── string_inverter.js
│   └── title_case_converter.js
├── missingLetterDetector.js
├── sentence-analyzer.js
├── test.js
├── LICENSE
└── README.md             ← empty
```
*Full tree: 13 directories, 35 files (excluding .git, .ai/memory)*

## Key Config Files
- No package.json — vanilla JS, no dependencies
- No build config — static HTML+JS
- No linter or formatter configured

## Entry Points
- No single entry point — each exercise is a self-contained HTML file
- Run via: open `arrays/golf checker/index.html` in browser (or use local server due to absolute `/scripts.js` path)

## Topic Structure
- `arrays/` — array method practice
- `functions/` — function definition and returns
- `loops/` — loop-based algorithms
- `objects/` — object property access and manipulation
- `misc_lab/` — assorted algorithm challenges (no HTML, JS-only)

## Loose Root Files
- `test.js` — unknown purpose (23 lines)
- `missingLetterDetector.js` — duplicate of `loops/Missingletterdetector/scripts.js`?
- `sentence-analyzer.js` — duplicate of `loops/sentenceAnalyzer/scripts.js`?

## Data Layer
- None — pure client-side scripts, no persistence

## Key Components
- Each exercise folder: `index.html` (boilerplate) + `scripts.js` (logic)

## Test Coverage
- No tests exist. Manual browser-based verification only.
