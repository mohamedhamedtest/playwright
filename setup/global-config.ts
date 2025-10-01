


import { chromium ,expect} from "@playwright/test";  

async function globalSetup() {

const browserPromise =  await chromium.launch();
const page = await browserPromise.newPage();

  
  await page.goto('https://qacart-todo.herokuapp.com/login');
  // 2- املى الايميل والباسورد
  await page.locator('//*[@id="email"]').fill("mohamedhamed77770@gmail.com");
  await page.locator('//*[@id="password"]').fill("123456@@aa");
  // 3- دوس على زرار اللوجين
  await page.locator('//*[@id="submit"]').click();

  //wait for navigation to complete


  const homePageHeader = page.locator('[data-testid="welcome"]');


   console.log(await expect(homePageHeader).toBeVisible());



  await page.context().storageState({ 
    path: 'state.json' });



}
export default globalSetup;