import CryptoJS from "crypto-js";

export const _key = "9876543210abcdef";
export const _iv = "S2rgj6UC6dYt9MWx";

export const encryptionBase64 = t =>
  CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(t));

export const decryptionBase64 = t =>
  CryptoJS.enc.Base64.parse(t).toString(CryptoJS.enc.Utf8);


export const decryptionData = (data, key, iv) => {
  const iv64 = decryptionBase64(encryptionBase64(iv));
  const code = CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse(key), {
    iv: CryptoJS.enc.Utf8.parse(iv64),
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  return code.toString(CryptoJS.enc.Utf8);
};

export const encryptData = (data, key, iv) => {

  const code = CryptoJS.AES.encrypt(JSON.stringify(data), CryptoJS.enc.Utf8.parse(key), {
    iv: CryptoJS.enc.Utf8.parse(encryptionBase64(iv)),
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });

  return code.ciphertext.toString(CryptoJS.enc.Base64);
}
