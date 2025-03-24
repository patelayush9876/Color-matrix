# 3x3 Color Change Matrix

This is a simple React application that displays a 3x3 matrix of boxes. Users can click on the boxes to change their colors, and there is a reset button to clear all colors.

## Features

- Click on any box to change its color to green.
- Clicking on the last box (box 9) changes its color to green, then changes all previously clicked boxes to orange in sequence, followed by changing box 9 to orange.
- A reset button to clear all colors and reset the matrix to its original state.

## Technologies Used

- React
- CSS

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/matrix-color-change.git
   cd matrix-color-change
   npm install
   npm run dev
## Usage

- Click on any of the boxes (1-8) to change their color to green.
- Click on box 9 to change its color to green, then watch as the previously clicked boxes turn orange in sequence, followed by box 9 turning orange.
- Click the "Reset Colors" button to clear all colors and reset the matrix.