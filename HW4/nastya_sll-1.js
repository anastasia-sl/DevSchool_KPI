class VigenereCipher {
    constructor(key, alphabet) {
        this.key = key;
        this.alphabet = alphabet;
    }

    encode(message) {
        let encrypted = '';
        let keyIndex = 0;

        for (let i = 0; i < message.length; i++) {
            const char = message[i];
            if (this.alphabet.includes(char)) {
                const shift = this.alphabet.indexOf(this.key[keyIndex]);
                const charIndex = this.alphabet.indexOf(char);
                const encryptedChar = this.alphabet[(charIndex + shift) % this.alphabet.length];
                encrypted += encryptedChar;
                keyIndex = (keyIndex + 1) % this.key.length;
            } else {
                encrypted += char;
            }
        }

        return encrypted;
    }

    decode(message) {
        let decrypted = '';
        let keyIndex = 0;

        for (let i = 0; i < message.length; i++) {
            const char = message[i];
            if (this.alphabet.includes(char)) {
                const shift = this.alphabet.indexOf(this.key[keyIndex]);
                const charIndex = this.alphabet.indexOf(char);
                const decryptedChar = this.alphabet[(charIndex - shift + this.alphabet.length) % this.alphabet.length];
                decrypted += decryptedChar;
                keyIndex = (keyIndex + 1) % this.key.length;
            } else {
                decrypted += char;
            }
        }

        return decrypted;
    }
}

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const key = "password";
const cipher = new VigenereCipher(key, alphabet);

const message = "my secret code i want to secure";
const encryptedMessage = cipher.encode(message);
console.log("Encrypted:", encryptedMessage);

const decryptedMessage = cipher.decode(encryptedMessage);
console.log("Decrypted:", decryptedMessage);
