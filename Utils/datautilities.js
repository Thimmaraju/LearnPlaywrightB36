const fs = require('fs');
const path = require('path');

/** Utility functions for test automation common data tasks */

function timestamp() {
  return Date.now();
}

function formatDate(d = new Date(), sep = '-') {
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return [yyyy, mm, dd].join(sep);
}


function randomString(length = 8, chars = 'abcdefghijklmnopqrstuvwxyz0123456789') {
  let out = '';
  for (let i = 0; i < length; i++) out += chars.charAt(Math.floor(Math.random() * chars.length));
  return out;
}

function generateEmail(prefix = 'user', domain = 'example.com') {
  return `${prefix}.${randomString(6)}+${timestamp()}@${domain}`;
}

function generatePhoneNumber() {
  // US-like 10 digit number
  const rnd = () => Math.floor(Math.random() * 10);
  return `+1${rnd()}${rnd()}${rnd()}${rnd()}${rnd()}${rnd()}${rnd()}${rnd()}${rnd()}${rnd()}`;
}


function generateIndianPhoneNumber() {
  // India mobile numbers: country code +91 and 10 digits, first digit 6-9
  const first = String(6 + Math.floor(Math.random() * 4)); // 6,7,8,9
  let rest = '';
  for (let i = 0; i < 9; i++) rest += Math.floor(Math.random() * 10);
  return `+91${first}${rest}`;
}



function pickRandom(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return null;
  return arr[Math.floor(Math.random() * arr.length)];
}

function shuffle(array) {
  const a = array.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function readJSON(filePath) {
  const abs = path.isAbsolute(filePath) ? filePath : path.join(process.cwd(), filePath);
  const raw = fs.readFileSync(abs, 'utf8');
  return JSON.parse(raw);
}

function writeJSON(filePath, data) {
  const abs = path.isAbsolute(filePath) ? filePath : path.join(process.cwd(), filePath);
  fs.writeFileSync(abs, JSON.stringify(data, null, 2), 'utf8');
}

function wait(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

module.exports = {
  timestamp,
  formatDate,
  randomString,
  generateEmail,
  generatePhoneNumber,
  pickRandom,
  shuffle,
  deepClone,
  readJSON,
  writeJSON,
  wait,
};
