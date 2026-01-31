import { test, expect } from '@playwright/test';

// Positive Functional Tests
test('Pos_Fun_0001', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('maludharu eya innee mokakdha kiyala dhannee naehae. mage post eka share karalaa tag karanna puLuvannam hodhayi.');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = 'මලුදරු එය ඉන්නේ මොකක්ද කියල දන්නේ නැහැ. mage post එක share කරලා tag කරන්න පුළුවන්නම් හොදයි.';
  expect(actualOutput).toBe(expectedOutput);
});

test('Pos_Fun_0002', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('raee 9.15ta deadline eka.');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = 'රෑ 9.15ට deadline එක';
  expect(actualOutput).toBe(expectedOutput);
});

test('Pos_Fun_0003', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('api udhee Galle yanna hithan innee. Restaurant ekaka lunch eka kamu.');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = 'අපි උදේ Galle යන්න හිතන් ඉන්නේ. Restaurant එකක lunch එක කමු.';
  expect(actualOutput).toBe(expectedOutput);
});

test('Pos_Fun_0004', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('samaavenna. Rs. 2500 evanna.');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = 'සමාවෙන්න. Rs. 2500 එවන්න.';
  expect(actualOutput).toBe(expectedOutput);
});

test('Pos_Fun_0005', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('eyaa mall ekata gihillaa .gedhara aavaa. Credit card ekee limit eka aavaa.');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = 'එයා mall එකට ගිහිල්ලා .ගෙදර ආවා. Credit card එකේ limit එක ආවා.';
  expect(actualOutput).toBe(expectedOutput);
});

test('Pos_Fun_0006', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('QR code eka scan kalaa settle veedha?');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = 'QR code එක scan කලා settle වේද?';
  expect(actualOutput).toBe(expectedOutput);
});

test('Pos_Fun_0007', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('mage phone eka charge vennee naehae.');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = 'mage phone එක charge වෙන්නේ නැහැ. ';
  expect(actualOutput).toBe(expectedOutput);
});

test('Pos_Fun_0008', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('apee proposal eka present karamu.');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = 'අපේ proposal එක present කරමු.';
  expect(actualOutput).toBe(expectedOutput);
});

test('Pos_Fun_0009', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('aththatama Netflix subscription eka renew karanna amathaka unaa. ');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = 'අත්තටම Netflix subscription එක renew කරන්න අමතක උනා. ';
  expect(actualOutput).toBe(expectedOutput);
});

test('Pos_Fun_0010', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('ASAP mata PDF eka WhatsApp karanna.');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = 'ASAP මට PDF එක WhatsApp කරන්න.';
  expect(actualOutput).toBe(expectedOutput);
});

test('Pos_Fun_0011', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('mama workout ekata yanavaa gym ekata.');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = 'මම workout එකට යනවා gym එකට.';
  expect(actualOutput).toBe(expectedOutput);
});

test('Pos_Fun_0012', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('2026-03-15 venakam interview eka thiyeedha?');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = '2026-03-15 වෙනකම් interview එක තියේද?';
  expect(actualOutput).toBe(expectedOutput);
});

test('Pos_Fun_0013', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('halo! suba dhavasak! kohomadha obata ?');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = 'halo! සුබ දවසක්! කොහොමද ඔබට ?';
  expect(actualOutput).toBe(expectedOutput);
});

test('Pos_Fun_0014', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('godaak lassanayi. hariyatama malak vagee.');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = 'ගොඩාක් ලස්සනයි. හරියටම මලක් වගේ.';
  expect(actualOutput).toBe(expectedOutput);
});

test('Pos_Fun_0015', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('mamath innee online shopping karala kiyala. Website eka open kalaa. Ekee catalog eka godhaak lassanayi. Categories valin filter karalaa item eka select kalaa. Add to Cart karala, checkout ekata giyaa. Shipping details tika type kalaa hariyata. Payment method ekath select kalaa Credit Card ekak vidhihata. CVV saha Expiry Date tika dhaagena, OTP eka aavaa. Order confirmation eka aavaa. Tracking number ekath email ekata labunaa. dhaen wait karalaa innee delivery ekata. Eta kalin Review section ekee reviews balalaa. eeka trust karana puluvandha kiyala.');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = 'මමත් ඉන්නේ online shopping කරල කියල. Website එක open කලා. එකේ catalog එක ගොදාක් ලස්සනයි. Categories වලින් filter කරලා item එක select කලා. Add to Cart කරල, checkout එකට ගියා. Shipping details ටික type කලා හරියට. Payment method එකත් select කලා Credit Card එකක් විදිහට. CVV සහ Expiry Date ටික දාගෙන, OTP එක ආවා. Order confirmation එක ආවා. Tracking number එකත් email එකට ලබුනා. දැන් wait කරලා ඉන්නේ delivery එකට. Eta කලින් Review section එකේ reviews බලලා. ඒක trust කරන පුලුවන්ද කියල.';
  expect(actualOutput).toBe(expectedOutput);
});

test('Pos_Fun_0016', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('laGgama laGgama yanna. podi podi kaaviyak matha.');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = 'ලඟ්ගම ලඟ්ගම යන්න. පොඩි පොඩි කාවියක් මත.';
  expect(actualOutput).toBe(expectedOutput);
});

test('Pos_Fun_0017', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('mage savings account eka USD 5000k thiyennavaa. Interest rate eka 3.5% vagee. Monthly statement eka PDF ekakata download karanna puluvandha?');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = 'mage savings account එක USD 5000ක් තියෙනවා. Interest rate එක 3.5% වගේ. Monthly statement එක PDF එකකට download කරන්න පුලුවන්ද?';
  expect(actualOutput).toBe(expectedOutput);
});

test('Pos_Fun_0018', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill(' mee vage dheyak dhaekalaa naehae. supiriyak supiri!');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = ' මේ වගෙ දෙයක් දැකලා නැහැ. සුපිරියක් සුපිරි!';
  expect(actualOutput).toBe(expectedOutput);
});

test('Pos_Fun_0019', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('ehi (campus eka) valata yanna oni!!! ekama!!!');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = 'එහි (campus එක) වලට යන්න ඔනි!!! එකම!!!';
  expect(actualOutput).toBe(expectedOutput);
});

test('Pos_Fun_0020', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('oona nam eyaalath ekka yannath puluvandha?');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = 'ඕන නම් එයාලත් එක්ක යන්නත් පුලුවන්ද?';
  expect(actualOutput).toBe(expectedOutput);
});

test('Pos_Fun_0021', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('RAM eka 16GB. Storage eka 512GB SSD. Operating system eka OS Windows 11. ');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = 'RAM එක 16GB. Storage එක 512GB SSD. Operating system එක OS Windows 11. ';
  expect(actualOutput).toBe(expectedOutput);
});

test('Pos_Fun_0022', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('mama      gedhara      yannavaa      raeeta vitharak.');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = 'මම      ගෙදර      යන්නවා      රෑට විතරක්.';
  expect(actualOutput).toBe(expectedOutput);
});

test('Pos_Fun_0023', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('ov machan! mama dhaannee  ekee details tika.');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = 'ඔව් මචන්! මම දාන්නේ  එකේ details ටික.';
  expect(actualOutput).toBe(expectedOutput);
});

test('Pos_Fun_0024', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('api movie hall ekata yanavaa.\\oyaalaa avoth ekka movie eka balanavaa.\\inpassee restaurant ekata yannee dinner ekata.');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = 'අපි movie hall එකට යනවා.\\ඔයාලා අවොත් එක්ක movie එක බලනවා.\\ඉන්පස්සේ restaurant එකට යන්නේ dinner එකට.';
  expect(actualOutput).toBe(expectedOutput);
});

// Negative Functional Tests
test('Neg_Fun_0001', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('mata bath oonee kanna.');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = 'මට බත් ඕනී කන්න.';
  expect(actualOutput).toBe(expectedOutput);
});

test('Neg_Fun_0002', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('mamagedharayanavaniseemataoonee');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = 'මම ගෙදර යනවා නිසා මට ඕනී';
  expect(actualOutput).toBe(expectedOutput);
});

test('Neg_Fun_0003', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('mama ගෙදර yanavaa වැඩ කරන්න.');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = 'මම ගෙදර යනවා වැඩ කරන්න.';
  expect(actualOutput).toBe(expectedOutput);
});

test('Neg_Fun_0004', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('kohomadha??????!!!!!????');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = 'කොහොමද??????!!!!!????';
  expect(actualOutput).toBe(expectedOutput);
});

test('Neg_Fun_0005', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('123456789 0000 9999');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = '123456789 0000 9999';
  expect(actualOutput).toBe(expectedOutput);
});

test('Neg_Fun_0006', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('@#$%^&*()_+-=[]{}|;\':,.<>?/');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = '@#$%^&*()_+-=[]{}|;\':,.<>?/';
  expect(actualOutput).toBe(expectedOutput);
});

test('Neg_Fun_0007', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama mama');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = 'මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම මම';
  expect(actualOutput).toBe(expectedOutput);
});

test('Neg_Fun_0008', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('mama 你好 gedhara 안녕하세요 yannavaa.');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = 'මම 你好 ගෙදර 안녕하세요 යන්නවා.';
  expect(actualOutput).toBe(expectedOutput);
});

test('Neg_Fun_0009', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('mamma gheddhara yanawaaa. mmaatge oneeee bathh knnaa.');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = 'මම ගෙදර යනවා. මට ඕනී බත් කන්න.';
  expect(actualOutput).toBe(expectedOutput);
});

test('Neg_Fun_0010', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill('<p>mama gedhara yanavaa</p> <b>bath kanna</b> <script>alert(\'test\')</script>');
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  const actualOutput = (await outputLocator.textContent()).trim();
  const expectedOutput = 'මම ගෙදර යනවා බත් කන්න';
  expect(actualOutput).toBe(expectedOutput);
});

// Positive UI Test
test('Pos_UI_0001', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  
  // Fill in some input
  const inputLocator = page.locator('textarea').first();
  await inputLocator.fill('mama gedhara yannavaa');
  
  // Wait for output to appear
  const outputLocator = page.locator('div.bg-slate-50');
  await expect(outputLocator).not.toBeEmpty();
  
  // Find and click the clear/reset button
  // Note: You may need to adjust the selector based on the actual button in the UI
  const clearButton = page.locator('button').filter({ hasText: /clear|reset/i });
  await clearButton.click();
  
  // Verify both input and output are cleared
  await expect(inputLocator).toBeEmpty();
  await expect(outputLocator).toBeEmpty();
});