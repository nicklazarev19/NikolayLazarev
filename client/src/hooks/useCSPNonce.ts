import { cache } from "react";
import crypto from "crypto";

// generate nonce
const generateNonce = (): string => {
  if (typeof window !== "undefined") {
    // client side
    const array = new Uint8Array(16);
    crypto.getRandomValues(array);
    return btoa(String.fromCharCode(...array));
  } else {
    // server side
    return crypto.randomBytes(16).toString("base64");
  }
};
//test2

// cache nonce
export const getCSPNonce = cache((): string => {
  return generateNonce();
});

// hook for client components
export const useCSPNonce = (): string => {
  return generateNonce();
};
