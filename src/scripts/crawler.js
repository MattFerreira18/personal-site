const puppeteer = require('puppeteer');

const url = 'https://github.com/MattFerreira18';

async function redirect(page) {
  await page.goto(url, {
    waitUntil: 'networkidle2',
  });
  await page.waitForTimeout(2000);
  await page.click(`a.UnderlineNav-item span.Counter`);
  await page.waitForTimeout(2000);
}

async function getRepoNames(page) {
  const repositories = await page.evaluate(async () => {
    const elements = await document.querySelectorAll('li.source');
    const names = [];

    for (let i = 0; i < elements.length; i++) {
      names.push(elements[i].querySelector('h3').textContent.trim());
    }

    return names;
  });

  return repositories;
}

// function formatRepositoriesName() {}

async function controller() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await redirect(page);
  const repositories = await getRepoNames(page);

  await browser.close();

  return repositories;
}

const repositories = controller();
