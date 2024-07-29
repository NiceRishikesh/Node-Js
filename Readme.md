# Morse Code Encoder and Decoder

This project provides a Morse code encoder and decoder implemented in Node.js. It allows you to convert plain text to Morse code and vice versa.

## Features
- Encode plain text to Morse code.
- Decode Morse code back to plain text.
- Handles letters and numbers.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/morse-code-project.git
  
   cd morse-code-project
   
   npm install

   node morse.js
   

## Usage

  To use the encoder and decoder functions:

  ```js
  const { encodeToMorse, decodeFromMorse } = require('./morse');

  // Encode text to Morse code
  const morseCode = encodeToMorse('HELLO WORLD');
  console.log(morseCode); // Outputs: .... . .-.. .-.. --- / .-- --- .-. .-.. -..

  // Decode Morse code to text
  const text = decodeFromMorse('.... . .-.. .-.. --- / .-- --- .-. .-.. -..');
  console.log(text); // Outputs: HELLO WORLD
  ```

## Examples

**Encoding Example:**

Input: `SOS`

Output: `... --- ...`

**Decoding Example:**

Input: `--. --- --- -..`

Output: `GOOD`

## Customization
  - You can customize its language and make your very own language which can be only encoded and decoded by your compiler :)

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.


## Acknowledgments

- Inspired by Piyush koranne, I made this project to communicate anywhere in a flawless manner without letting anyone know what are we talking about.
- Thanks to the Node.js community for the resources and support.

