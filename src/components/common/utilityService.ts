import CryptoJS from "crypto-js";

const SECRET_KEY = import.meta.env.VITE_SECRET_KEY;  // ✔ correct
const SECRET_IV = CryptoJS.enc.Utf8.parse(import.meta.env.VITE_SECRET_IV);

export const encryptAES = (data: {}) => {
  const dataStr = JSON.stringify(data);
  const key = CryptoJS.SHA256(SECRET_KEY);

  const encrypted = CryptoJS.AES.encrypt(dataStr, key, {
    iv: SECRET_IV,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });

  return encrypted.toString(); // base64
};

export const decryptAES = (ciphertext: string) => {
  const key = CryptoJS.SHA256(SECRET_KEY);

  const bytes = CryptoJS.AES.decrypt(ciphertext, key, {
    iv: SECRET_IV,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });

  const decrypted = bytes.toString(CryptoJS.enc.Utf8);
  return JSON.parse(decrypted);
};
