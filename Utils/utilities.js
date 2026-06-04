import { expect } from '@playwright/test';
import ExcelJS from 'exceljs';
import fs from 'fs';
import path from 'path';

// ==================== WAIT & TIMEOUT UTILITIES ====================

/**
 * Wait for a specific duration
 * @param {number} milliseconds - Duration to wait
 */
export async function waitFor(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

/**
 * Wait for element with custom timeout
 * @param {Page} page - Playwright page object
 * @param {string} selector - Element selector
 * @param {number} timeout - Timeout in milliseconds
 */
export async function waitForElement(page, selector, timeout = 5000) {
  try {
    await page.locator(selector).waitFor({ state: 'visible', timeout });
    return true;
  } catch {
    return false;
  }
}

/**
 * Wait for element and return it
 * @param {Page} page - Playwright page object
 * @param {string} selector - Element selector
 * @param {string} state - 'visible', 'hidden', 'attached', 'detached'
 * @param {number} timeout - Timeout in milliseconds
 */
export async function waitForElementState(page, selector, state = 'visible', timeout = 5000) {
  await page.locator(selector).waitFor({ state, timeout });
}

/**
 * Wait for multiple elements
 * @param {Page} page - Playwright page object
 * @param {string[]} selectors - Array of element selectors
 * @param {number} timeout - Timeout in milliseconds
 */
export async function waitForAllElements(page, selectors, timeout = 5000) {
  for (const selector of selectors) {
    await waitForElementState(page, selector, 'visible', timeout);
  }
}

/**
 * Retry an action with exponential backoff
 * @param {Function} action - Async function to retry
 * @param {number} maxRetries - Maximum retry attempts
 * @param {number} delayMs - Initial delay in milliseconds
 */
export async function retryAction(action, maxRetries = 3, delayMs = 1000) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await action();
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      await waitFor(delayMs * Math.pow(2, i));
    }
  }
}

// ==================== NAVIGATION UTILITIES ====================

/**
 * Navigate to URL and verify page loaded
 * @param {Page} page - Playwright page object
 * @param {string} url - URL to navigate to
 * @param {number} timeout - Timeout in milliseconds
 */
export async function navigateAndWait(page, url, timeout = 30000) {
  await page.goto(url, { waitUntil: 'networkidle', timeout });
}

/**
 * Navigate to path and verify URL
 * @param {Page} page - Playwright page object
 * @param {string} baseUrl - Base URL
 * @param {string} path - Path to navigate
 */
export async function navigateToPath(page, baseUrl, path) {
  const fullUrl = baseUrl + path;
  await navigateAndWait(page, fullUrl);
}

/**
 * Verify current URL matches pattern
 * @param {Page} page - Playwright page object
 * @param {string|RegExp} urlPattern - URL pattern to match
 */
export async function verifyCurrentUrl(page, urlPattern) {
  if (typeof urlPattern === 'string') {
    await expect(page).toHaveURL(urlPattern);
  } else {
    await expect(page).toHaveURL(urlPattern);
  }
}

/**
 * Go back and wait for load
 * @param {Page} page - Playwright page object
 */
export async function goBackAndWait(page) {
  await page.goBack();
  await page.waitForLoadState('networkidle');
}

/**
 * Refresh page and wait for load
 * @param {Page} page - Playwright page object
 */
export async function refreshPage(page) {
  await page.reload();
  await page.waitForLoadState('networkidle');
}

// ==================== ELEMENT INTERACTION UTILITIES ====================

/**
 * Click element with wait
 * @param {Page} page - Playwright page object
 * @param {string} selector - Element selector
 */
export async function clickElement(page, selector) {
  await page.locator(selector).waitFor({ state: 'visible' });
  await page.locator(selector).click();
}

/**
 * Click element by role
 * @param {Page} page - Playwright page object
 * @param {string} role - Role name
 * @param {object} options - Additional options like { name: 'button text' }
 */
export async function clickByRole(page, role, options = {}) {
  await page.getByRole(role, options).click();
}

/**
 * Fill input field
 * @param {Page} page - Playwright page object
 * @param {string} selector - Element selector
 * @param {string} text - Text to fill
 */
export async function fillInput(page, selector, text) {
  await page.locator(selector).click();
  await page.locator(selector).clear();
  await page.locator(selector).fill(text);
}

/**
 * Type text with delay (slower typing)
 * @param {Page} page - Playwright page object
 * @param {string} selector - Element selector
 * @param {string} text - Text to type
 * @param {number} delayMs - Delay between keystrokes
 */
export async function typeText(page, selector, text, delayMs = 50) {
  await page.locator(selector).click();
  await page.locator(selector).type(text, { delay: delayMs });
}

/**
 * Clear input field
 * @param {Page} page - Playwright page object
 * @param {string} selector - Element selector
 */
export async function clearInput(page, selector) {
  await page.locator(selector).click();
  await page.locator(selector).clear();
}

/**
 * Get input value
 * @param {Page} page - Playwright page object
 * @param {string} selector - Element selector
 */
export async function getInputValue(page, selector) {
  return await page.locator(selector).inputValue();
}

/**
 * Press keyboard key
 * @param {Page} page - Playwright page object
 * @param {string} key - Key to press (e.g., 'Enter', 'Tab', 'Escape')
 */
export async function pressKey(page, key) {
  await page.keyboard.press(key);
}

/**
 * Press keyboard combination
 * @param {Page} page - Playwright page object
 * @param {string} combination - Key combination (e.g., 'Control+A', 'Shift+Tab')
 */
export async function pressKeyCombination(page, combination) {
  const keys = combination.split('+');
  const keyModifiers = [];
  let finalKey = '';

  for (const key of keys) {
    if (['Control', 'Shift', 'Alt', 'Meta'].includes(key)) {
      keyModifiers.push(key);
    } else {
      finalKey = key;
    }
  }

  if (keyModifiers.length > 0) {
    const modifiersMap = {
      Control: 'Control',
      Shift: 'Shift',
      Alt: 'Alt',
      Meta: 'Meta',
    };

    for (const modifier of keyModifiers) {
      await page.keyboard.down(modifiersMap[modifier]);
    }

    await page.keyboard.press(finalKey);

    for (const modifier of keyModifiers.reverse()) {
      await page.keyboard.up(modifiersMap[modifier]);
    }
  } else {
    await page.keyboard.press(finalKey);
  }
}

/**
 * Submit form by pressing Enter
 * @param {Page} page - Playwright page object
 * @param {string} selector - Form field selector
 */
export async function submitFormByEnter(page, selector) {
  await page.locator(selector).press('Enter');
}

/**
 * Select dropdown option by text
 * @param {Page} page - Playwright page object
 * @param {string} selector - Select element selector
 * @param {string} optionText - Option text to select
 */
export async function selectDropdownOption(page, selector, optionText) {
  await page.locator(selector).selectOption({ label: optionText });
}

/**
 * Select dropdown option by value
 * @param {Page} page - Playwright page object
 * @param {string} selector - Select element selector
 * @param {string} value - Option value to select
 */
export async function selectDropdownByValue(page, selector, value) {
  await page.locator(selector).selectOption(value);
}

/**
 * Check checkbox
 * @param {Page} page - Playwright page object
 * @param {string} selector - Checkbox selector
 */
export async function checkCheckbox(page, selector) {
  await page.locator(selector).check();
}

/**
 * Uncheck checkbox
 * @param {Page} page - Playwright page object
 * @param {string} selector - Checkbox selector
 */
export async function uncheckCheckbox(page, selector) {
  await page.locator(selector).uncheck();
}

/**
 * Check if checkbox is checked
 * @param {Page} page - Playwright page object
 * @param {string} selector - Checkbox selector
 */
export async function isCheckboxChecked(page, selector) {
  return await page.locator(selector).isChecked();
}

/**
 * Hover over element
 * @param {Page} page - Playwright page object
 * @param {string} selector - Element selector
 */
export async function hoverElement(page, selector) {
  await page.locator(selector).hover();
}

/**
 * Scroll element into view
 * @param {Page} page - Playwright page object
 * @param {string} selector - Element selector
 */
export async function scrollIntoView(page, selector) {
  await page.locator(selector).scrollIntoViewIfNeeded();
}

/**
 * Scroll to top
 * @param {Page} page - Playwright page object
 */
export async function scrollToTop(page) {
  await page.evaluate(() => window.scrollTo(0, 0));
}

/**
 * Scroll to bottom
 * @param {Page} page - Playwright page object
 */
export async function scrollToBottom(page) {
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
}

/**
 * Scroll by amount
 * @param {Page} page - Playwright page object
 * @param {number} x - Horizontal scroll amount
 * @param {number} y - Vertical scroll amount
 */
export async function scrollBy(page, x = 0, y = 100) {
  await page.evaluate(([scrollX, scrollY]) => window.scrollBy(scrollX, scrollY), [x, y]);
}

/**
 * Double click element
 * @param {Page} page - Playwright page object
 * @param {string} selector - Element selector
 */
export async function doubleClickElement(page, selector) {
  await page.locator(selector).dblclick();
}

/**
 * Right click element
 * @param {Page} page - Playwright page object
 * @param {string} selector - Element selector
 */
export async function rightClickElement(page, selector) {
  await page.locator(selector).click({ button: 'right' });
}

/**
 * Upload file
 * @param {Page} page - Playwright page object
 * @param {string} selector - File input selector
 * @param {string} filePath - Path to file to upload
 */
export async function uploadFile(page, selector, filePath) {
  await page.locator(selector).setInputFiles(filePath);
}

// ==================== VERIFICATION & ASSERTION UTILITIES ====================

/**
 * Verify element is visible
 * @param {Page} page - Playwright page object
 * @param {string} selector - Element selector
 */
export async function isElementVisible(page, selector) {
  try {
    await waitForElementState(page, selector, 'visible', 5000);
    return await page.locator(selector).isVisible();
  } catch {
    return false;
  }
}

/**
 * Verify element is hidden
 * @param {Page} page - Playwright page object
 * @param {string} selector - Element selector
 */
export async function isElementHidden(page, selector) {
  try {
    return await page.locator(selector).isHidden();
  } catch {
    return false;
  }
}

/**
 * Verify element is enabled
 * @param {Page} page - Playwright page object
 * @param {string} selector - Element selector
 */
export async function isElementEnabled(page, selector) {
  return await page.locator(selector).isEnabled();
}

/**
 * Verify element is disabled
 * @param {Page} page - Playwright page object
 * @param {string} selector - Element selector
 */
export async function isElementDisabled(page, selector) {
  return !(await page.locator(selector).isEnabled());
}

/**
 * Verify element exists
 * @param {Page} page - Playwright page object
 * @param {string} selector - Element selector
 */
export async function elementExists(page, selector) {
  try {
    return await page.locator(selector).count() > 0;
  } catch {
    return false;
  }
}

/**
 * Verify element text content
 * @param {Page} page - Playwright page object
 * @param {string} selector - Element selector
 * @param {string} expectedText - Expected text
 */
export async function verifyElementText(page, selector, expectedText) {
  await expect(page.locator(selector)).toContainText(expectedText);
}

/**
 * Get element text
 * @param {Page} page - Playwright page object
 * @param {string} selector - Element selector
 */
export async function getElementText(page, selector) {
  return await page.locator(selector).textContent();
}

/**
 * Get all element texts
 * @param {Page} page - Playwright page object
 * @param {string} selector - Element selector
 */
export async function getAllElementTexts(page, selector) {
  return await page.locator(selector).allTextContents();
}

/**
 * Count elements
 * @param {Page} page - Playwright page object
 * @param {string} selector - Element selector
 */
export async function countElements(page, selector) {
  return await page.locator(selector).count();
}

/**
 * Verify element count
 * @param {Page} page - Playwright page object
 * @param {string} selector - Element selector
 * @param {number} expectedCount - Expected count
 */
export async function verifyElementCount(page, selector, expectedCount) {
  await expect(page.locator(selector)).toHaveCount(expectedCount);
}

/**
 * Verify element is in viewport
 * @param {Page} page - Playwright page object
 * @param {string} selector - Element selector
 */
export async function isElementInViewport(page, selector) {
  return await page.locator(selector).evaluate(el => {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= window.innerHeight && rect.right <= window.innerWidth;
  });
}

/**
 * Get element attribute
 * @param {Page} page - Playwright page object
 * @param {string} selector - Element selector
 * @param {string} attributeName - Attribute name
 */
export async function getElementAttribute(page, selector, attributeName) {
  return await page.locator(selector).getAttribute(attributeName);
}

/**
 * Verify element attribute
 * @param {Page} page - Playwright page object
 * @param {string} selector - Element selector
 * @param {string} attributeName - Attribute name
 * @param {string} expectedValue - Expected value
 */
export async function verifyElementAttribute(page, selector, attributeName, expectedValue) {
  const attributeValue = await getElementAttribute(page, selector, attributeName);
  expect(attributeValue).toBe(expectedValue);
}

/**
 * Get element classes
 * @param {Page} page - Playwright page object
 * @param {string} selector - Element selector
 */
export async function getElementClasses(page, selector) {
  const classAttr = await getElementAttribute(page, selector, 'class');
  return classAttr ? classAttr.split(' ') : [];
}

/**
 * Verify element has class
 * @param {Page} page - Playwright page object
 * @param {string} selector - Element selector
 * @param {string} className - Class name
 */
export async function hasElementClass(page, selector, className) {
  const classes = await getElementClasses(page, selector);
  return classes.includes(className);
}

/**
 * Get computed style
 * @param {Page} page - Playwright page object
 * @param {string} selector - Element selector
 * @param {string} property - CSS property
 */
export async function getComputedStyle(page, selector, property) {
  return await page.locator(selector).evaluate((el, prop) => {
    return window.getComputedStyle(el).getPropertyValue(prop);
  }, property);
}

// ==================== TABLE UTILITIES ====================

/**
 * Get table data
 * @param {Page} page - Playwright page object
 * @param {string} tableSelector - Table selector
 */
export async function getTableData(page, tableSelector) {
  const rows = await page.locator(`${tableSelector} tbody tr`).all();
  const data = [];

  for (const row of rows) {
    const cells = await row.locator('td').allTextContents();
    data.push(cells);
  }

  return data;
}

/**
 * Get table as object array
 * @param {Page} page - Playwright page object
 * @param {string} tableSelector - Table selector
 */
export async function getTableAsObjects(page, tableSelector) {
  const headerCells = await page.locator(`${tableSelector} thead th`).allTextContents();
  const rows = await page.locator(`${tableSelector} tbody tr`).all();
  const data = [];

  for (const row of rows) {
    const cells = await row.locator('td').allTextContents();
    const rowObj = {};

    headerCells.forEach((header, index) => {
      rowObj[header.trim()] = cells[index] ? cells[index].trim() : '';
    });

    data.push(rowObj);
  }

  return data;
}

/**
 * Find table row by text
 * @param {Page} page - Playwright page object
 * @param {string} tableSelector - Table selector
 * @param {string} searchText - Text to search for
 */
export async function findTableRowByText(page, tableSelector, searchText) {
  const rows = await page.locator(`${tableSelector} tbody tr`).all();

  for (const row of rows) {
    const text = await row.textContent();
    if (text.includes(searchText)) {
      return row;
    }
  }

  return null;
}

/**
 * Find table cell by row and column index
 * @param {Page} page - Playwright page object
 * @param {string} tableSelector - Table selector
 * @param {number} rowIndex - Row index
 * @param {number} cellIndex - Cell index
 */
export async function getTableCell(page, tableSelector, rowIndex, cellIndex) {
  return page.locator(`${tableSelector} tbody tr:nth-child(${rowIndex}) td:nth-child(${cellIndex})`);
}

// ==================== DIALOG & POPUP UTILITIES ====================

/**
 * Handle alert dialog
 * @param {Page} page - Playwright page object
 * @param {string} expectedText - Expected alert text
 * @param {boolean} accept - Accept or dismiss
 */
export async function handleAlert(page, expectedText, accept = true) {
  page.once('dialog', async dialog => {
    expect(dialog.message()).toContain(expectedText);
    if (accept) {
      await dialog.accept();
    } else {
      await dialog.dismiss();
    }
  });
}

/**
 * Accept alert
 * @param {Page} page - Playwright page object
 */
export async function acceptAlert(page) {
  page.once('dialog', async dialog => {
    await dialog.accept();
  });
}

/**
 * Dismiss alert
 * @param {Page} page - Playwright page object
 */
export async function dismissAlert(page) {
  page.once('dialog', async dialog => {
    await dialog.dismiss();
  });
}

// ==================== DATA GENERATION UTILITIES ====================

/**
 * Generate random string
 * @param {number} length - Length of string
 */
export function generateRandomString(length = 7) {
  return (Math.random() + 1).toString(36).substring(2, 2 + length);
}

/**
 * Generate random number
 * @param {number} min - Minimum value
 * @param {number} max - Maximum value
 */
export function generateRandomNumber(min = 1, max = 100) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Generate random email
 */
export function generateRandomEmail() {
  const randomPart = generateRandomString(10);
  return `test${randomPart}@automation.com`;
}

/**
 * Generate random phone number
 */
export function generateRandomPhone() {
  return `${generateRandomNumber(100, 999)}-${generateRandomNumber(100, 999)}-${generateRandomNumber(1000, 9999)}`;
}

/**
 * Generate test data object
 * @param {object} template - Template object
 */
export function generateTestData(template) {
  const data = { ...template };

  Object.keys(data).forEach(key => {
    if (typeof data[key] === 'string') {
      if (data[key] === 'RANDOM_STRING') {
        data[key] = generateRandomString();
      } else if (data[key] === 'RANDOM_NUMBER') {
        data[key] = generateRandomNumber();
      } else if (data[key] === 'RANDOM_EMAIL') {
        data[key] = generateRandomEmail();
      } else if (data[key] === 'RANDOM_PHONE') {
        data[key] = generateRandomPhone();
      }
    }
  });

  return data;
}

// ==================== FILE & DATA UTILITIES ====================

/**
 * Load JSON test data
 * @param {string} filePath - Path to JSON file
 */
export function loadJsonData(filePath) {
  const absolutePath = path.resolve(filePath);
  const rawData = fs.readFileSync(absolutePath, 'utf-8');
  return JSON.parse(rawData);
}

/**
 * Load Excel data
 * @param {string} filePath - Path to Excel file
 * @param {string} sheetName - Sheet name
 */
export async function loadExcelData(filePath, sheetName = 'Sheet1') {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(filePath);
  const worksheet = workbook.getWorksheet(sheetName);

  if (!worksheet) {
    throw new Error(`Sheet "${sheetName}" not found`);
  }

  const data = [];
  worksheet.eachRow((row, rowNumber) => {
    if (rowNumber > 1) {
      const rowData = {};
      row.eachCell((cell, colNumber) => {
        const headerCell = worksheet.getRow(1).getCell(colNumber);
        rowData[headerCell.value] = cell.value;
      });
      data.push(rowData);
    }
  });

  return data;
}

/**
 * Save data to JSON file
 * @param {string} filePath - Path to save file
 * @param {object} data - Data to save
 */
export function saveJsonData(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
}

/**
 * Save screenshot
 * @param {Page} page - Playwright page object
 * @param {string} filename - Filename for screenshot
 * @param {string} directory - Directory to save (default: './screenshots')
 */
export async function takeScreenshot(page, filename, directory = './screenshots') {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }

  const filePath = path.join(directory, `${filename}.png`);
  await page.screenshot({ path: filePath, fullPage: true });
  return filePath;
}

/**
 * Save screenshot on failure
 * @param {Page} page - Playwright page object
 * @param {string} testName - Test name
 * @param {string} directory - Directory to save
 */
export async function captureScreenshotOnFailure(page, testName, directory = './test-results/screenshots') {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const filename = `${testName}-${timestamp}`;
  return await takeScreenshot(page, filename, directory);
}

/**
 * Get page HTML
 * @param {Page} page - Playwright page object
 */
export async function getPageHTML(page) {
  return await page.content();
}

/**
 * Save page HTML
 * @param {Page} page - Playwright page object
 * @param {string} filename - Filename to save
 * @param {string} directory - Directory to save (default: './html-dumps')
 */
export async function savePageHTML(page, filename, directory = './html-dumps') {
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
  }

  const html = await getPageHTML(page);
  const filePath = path.join(directory, `${filename}.html`);
  fs.writeFileSync(filePath, html, 'utf-8');
  return filePath;
}

// ==================== BROWSER UTILITIES ====================

/**
 * Get page title
 * @param {Page} page - Playwright page object
 */
export async function getPageTitle(page) {
  return await page.title();
}

/**
 * Verify page title
 * @param {Page} page - Playwright page object
 * @param {string} expectedTitle - Expected title
 */
export async function verifyPageTitle(page, expectedTitle) {
  await expect(page).toHaveTitle(expectedTitle);
}

/**
 * Get current URL
 * @param {Page} page - Playwright page object
 */
export function getCurrentUrl(page) {
  return page.url();
}

/**
 * Verify page URL contains text
 * @param {Page} page - Playwright page object
 * @param {string} expectedUrlPart - Expected URL part
 */
export function verifyUrlContains(page, expectedUrlPart) {
  const currentUrl = getCurrentUrl(page);
  expect(currentUrl).toContain(expectedUrlPart);
}

/**
 * Set viewport size
 * @param {Page} page - Playwright page object
 * @param {number} width - Width
 * @param {number} height - Height
 */
export async function setViewportSize(page, width = 1280, height = 720) {
  await page.setViewportSize({ width, height });
}

/**
 * Set mobile viewport
 * @param {Page} page - Playwright page object
 */
export async function setMobileViewport(page) {
  await setViewportSize(page, 375, 667);
}

/**
 * Set tablet viewport
 * @param {Page} page - Playwright page object
 */
export async function setTabletViewport(page) {
  await setViewportSize(page, 768, 1024);
}

/**
 * Add cookies
 * @param {Page} page - Playwright page object
 * @param {object[]} cookies - Array of cookie objects
 */
export async function addCookies(page, cookies) {
  await page.context().addCookies(cookies);
}

/**
 * Get cookies
 * @param {Page} page - Playwright page object
 */
export async function getCookies(page) {
  return await page.context().cookies();
}

/**
 * Clear cookies
 * @param {Page} page - Playwright page object
 */
export async function clearCookies(page) {
  await page.context().clearCookies();
}

/**
 * Set local storage
 * @param {Page} page - Playwright page object
 * @param {string} key - Key
 * @param {string} value - Value
 */
export async function setLocalStorage(page, key, value) {
  await page.evaluate(([k, v]) => {
    localStorage.setItem(k, v);
  }, [key, value]);
}

/**
 * Get local storage
 * @param {Page} page - Playwright page object
 * @param {string} key - Key
 */
export async function getLocalStorage(page, key) {
  return await page.evaluate(k => {
    return localStorage.getItem(k);
  }, key);
}

/**
 * Clear local storage
 * @param {Page} page - Playwright page object
 */
export async function clearLocalStorage(page) {
  await page.evaluate(() => {
    localStorage.clear();
  });
}

// ==================== ORANGEHRM SPECIFIC UTILITIES ====================

/**
 * Login to OrangeHRM
 * @param {Page} page - Playwright page object
 * @param {string} username - Username
 * @param {string} password - Password
 * @param {string} baseUrl - Base URL (optional)
 */
export async function loginToOrangeHRM(page, username, password, baseUrl = '') {
  const loginUrl = baseUrl ? `${baseUrl}/web/index.php/auth/login` : '/web/index.php/auth/login';
  await navigateAndWait(page, loginUrl);

  await fillInput(page, "input[name='username']", username);
  await fillInput(page, "[name='password']", password);
  await pressKey(page, 'Enter');

  // Wait for dashboard to load
  await expect(page).toHaveURL(/dashboard\/index/);
}

/**
 * Navigate to OrangeHRM module
 * @param {Page} page - Playwright page object
 * @param {string} moduleName - Module name (Admin, PIM, Recruitment, etc.)
 */
export async function navigateToModule(page, moduleName) {
  await clickByRole(page, 'link', { name: moduleName });
  await page.waitForLoadState('networkidle');
}

/**
 * Navigate to sub-module
 * @param {Page} page - Playwright page object
 * @param {string} subModuleName - Sub-module name
 */
export async function navigateToSubModule(page, subModuleName) {
  await clickByRole(page, 'menuitem', { name: subModuleName });
  await page.waitForLoadState('networkidle');
}

/**
 * Click Add button
 * @param {Page} page - Playwright page object
 */
export async function clickAddButton(page) {
  await clickByRole(page, 'button', { name: 'Add' });
}

/**
 * Click Save button
 * @param {Page} page - Playwright page object
 */
export async function clickSaveButton(page) {
  await clickByRole(page, 'button', { name: 'Save' });
}

/**
 * Click Delete button
 * @param {Page} page - Playwright page object
 */
export async function clickDeleteButton(page) {
  await clickByRole(page, 'button', { name: 'Delete' });
}

/**
 * Click Edit button
 * @param {Page} page - Playwright page object
 */
export async function clickEditButton(page) {
  await clickByRole(page, 'button', { name: 'Edit' });
}

/**
 * Fill job title form
 * @param {Page} page - Playwright page object
 * @param {string} title - Job title
 * @param {string} description - Job description
 */
export async function fillJobTitleForm(page, title, description) {
  const titleSelector = "//div[@class='oxd-input-group oxd-input-field-bottom-space']//div//input[@class='oxd-input oxd-input--active']";
  await fillInput(page, titleSelector, title);
  await fillInput(page, "[name='description']", description);
}

/**
 * Add job title
 * @param {Page} page - Playwright page object
 * @param {string} username - Admin username
 * @param {string} password - Admin password
 * @param {string} jobTitle - Job title to add
 * @param {string} description - Job description
 * @param {string} baseUrl - Base URL
 */
export async function addJobTitle(page, username, password, jobTitle, description, baseUrl = '') {
  await loginToOrangeHRM(page, username, password, baseUrl);
  await navigateToModule(page, 'Admin');
  await clickByRole(page, 'link', { name: 'Job' });
  await navigateToSubModule(page, 'Job Titles');
  await clickAddButton(page);
  await fillJobTitleForm(page, jobTitle, description);
  await clickSaveButton(page);
  await expect(page).toHaveURL(/admin\/viewJobTitleList/);
}

// ==================== SAUCEDEMO SPECIFIC UTILITIES ====================

/**
 * Login to SauceDemo
 * @param {Page} page - Playwright page object
 * @param {string} username - Username
 * @param {string} password - Password
 */
export async function loginToSauceDemo(page, username, password) {
  await navigateAndWait(page, 'https://www.saucedemo.com/');
  await fillInput(page, '[data-test="username"]', username);
  await fillInput(page, '[data-test="password"]', password);
  await clickElement(page, '[data-test="login-button"]');
}

/**
 * Verify SauceDemo products page visible
 * @param {Page} page - Playwright page object
 */
export async function verifySauceDemoProductsVisible(page) {
  return await isElementVisible(page, '[data-test="title"]');
}

/**
 * Verify SauceDemo error message visible
 * @param {Page} page - Playwright page object
 */
export async function verifySauceDemoErrorVisible(page) {
  return await isElementVisible(page, '[data-test="error"]');
}

/**
 * Get SauceDemo error message text
 * @param {Page} page - Playwright page object
 */
export async function getSauceDemoErrorText(page) {
  return await getElementText(page, '[data-test="error"]');
}

/**
 * Add item to SauceDemo cart
 * @param {Page} page - Playwright page object
 * @param {string} productName - Product name or data-test value
 */
export async function addToSauceDemoCart(page, productName) {
  const selector = `button[data-test="add-to-cart-${productName}"]`;
  await clickElement(page, selector);
}

/**
 * Remove item from SauceDemo cart
 * @param {Page} page - Playwright page object
 * @param {string} productName - Product name
 */
export async function removeFromSauceDemoCart(page, productName) {
  const selector = `button[data-test="remove-${productName}"]`;
  await clickElement(page, selector);
}

/**
 * Get SauceDemo cart count
 * @param {Page} page - Playwright page object
 */
export async function getSauceDemoCartCount(page) {
  const cartBadge = page.locator('[data-test="shopping-cart-badge"]');
  if (await cartBadge.isVisible()) {
    return await getElementText(page, '[data-test="shopping-cart-badge"]');
  }
  return '0';
}

// ==================== LOGGING & DEBUG UTILITIES ====================

/**
 * Log to console with timestamp
 * @param {string} message - Message to log
 * @param {string} level - Log level (info, warn, error)
 */
export function logMessage(message, level = 'info') {
  const timestamp = new Date().toISOString();
  const prefix = `[${timestamp}] [${level.toUpperCase()}]`;
  console.log(`${prefix} ${message}`);
}

/**
 * Log test step
 * @param {number} stepNumber - Step number
 * @param {string} description - Step description
 */
export function logTestStep(stepNumber, description) {
  logMessage(`Step ${stepNumber}: ${description}`, 'info');
}

/**
 * Log test result
 * @param {string} testName - Test name
 * @param {boolean} passed - Pass/Fail status
 * @param {string} message - Additional message
 */
export function logTestResult(testName, passed, message = '') {
  const status = passed ? 'PASSED' : 'FAILED';
  const fullMessage = message ? `${testName} - ${status}: ${message}` : `${testName} - ${status}`;
  logMessage(fullMessage, passed ? 'info' : 'error');
}

/**
 * Get browser console logs
 * @param {Page} page - Playwright page object
 */
export async function getBrowserConsoleLogs(page) {
  const logs = [];
  page.on('console', msg => {
    logs.push({
      type: msg.type(),
      text: msg.text(),
      location: msg.location(),
    });
  });
  return logs;
}

/**
 * Log all browser console messages
 * @param {Page} page - Playwright page object
 */
export function onBrowserConsoleLog(page) {
  page.on('console', msg => {
    console.log(`Browser [${msg.type()}]: ${msg.text()}`);
  });
}

// ==================== PERFORMANCE & TIMING UTILITIES ====================

/**
 * Measure page load time
 * @param {Page} page - Playwright page object
 * @param {string} url - URL to load
 */
export async function measurePageLoadTime(page, url) {
  const startTime = Date.now();
  await navigateAndWait(page, url);
  const endTime = Date.now();
  return endTime - startTime;
}

/**
 * Get page performance metrics
 * @param {Page} page - Playwright page object
 */
export async function getPageMetrics(page) {
  return await page.evaluate(() => {
    const perfData = window.performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
    const connectTime = perfData.responseEnd - perfData.requestStart;
    const renderTime = perfData.domComplete - perfData.domLoading;

    return {
      pageLoadTime,
      connectTime,
      renderTime,
      navigationStart: perfData.navigationStart,
      responseEnd: perfData.responseEnd,
      domComplete: perfData.domComplete,
    };
  });
}

/**
 * Wait for network idle
 * @param {Page} page - Playwright page object
 * @param {number} timeout - Timeout in milliseconds
 */
export async function waitForNetworkIdle(page, timeout = 30000) {
  await page.waitForLoadState('networkidle', { timeout });
}

/**
 * Wait for DOM content loaded
 * @param {Page} page - Playwright page object
 * @param {number} timeout - Timeout in milliseconds
 */
export async function waitForDOMContentLoaded(page, timeout = 30000) {
  await page.waitForLoadState('domcontentloaded', { timeout });
}
