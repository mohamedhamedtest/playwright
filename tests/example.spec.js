
import { test ,expect} from '@playwright/test';

test.describe('My First Test Suite', () => {

test('has title', async ({page}) => {
  await page.goto('https://qacart-todo.herokuapp.com/');
  await page.screenshot({path:'example.png'});  
  console.log(await page.title());
  await expect(page).toHaveTitle("QAcart Todo App - Login page"); 

  });

  
 test('has login ', async ({page}) => {
  await page.goto('https://qacart-todo.herokuapp.com/login');
  console.log(await page.url());
  await expect(page).toHaveURL("https://qacart-todo.herokuapp.com/login");

  });

 test('has visible by text ', async ({page}) => {
  await page.goto('https://qacart-todo.herokuapp.com/login');

  const header=page.locator("text=Login to Application");
  await expect(header).toBeVisible();
  console.log(await header.textContent());
});


 test('login page UI and login flow', async ({ page }) => {
  // 1- افتح صفحة اللوجين
  await page.goto('https://qacart-todo.herokuapp.com/login');

  // 2- اتأكد إن الهيدر موجود ومرئي   by text
  const header = page.locator("text=Login to Application");
  await expect(header).toBeVisible();

  // 3- اتأكد من وجود فيلد الـ Email   xpath
  
  const emailInput = page.locator('//*[@id="email-label"]');
  await expect(emailInput).toBeVisible();

  // 4- اتأكد من وجود فيلد الـ Password    id
  const passwordInput = page.locator('[id="password"]');
  await expect(passwordInput).toBeVisible();

  // 5- اتأكد من وجود زرار Login    css or id
  const loginBtn = page.locator('#submit');
  await expect(loginBtn).toBeVisible();

  // 6- جرّب تعمل لوجين بيوزر وباسورد (مثال)
  await emailInput.fill("mohamedhamed77770@gmail.com");
  await passwordInput.fill("P@ssw0rd");
  await loginBtn.click();
  
  // 7- اتأكد إن بعد اللوجين بيروّح على الصفحة الرئيسية (مثلاً يظهر عنوان Todos)
  const todoHeader = page.locator("text= We could not find the email in the database");
  await expect(todoHeader).toBeVisible();
    console.log(await page.url());

  await expect(page).toHaveURL("https://qacart-todo.herokuapp.com/login",{timeout:5000});


  

  });



});



















/*test.describe('My First Test Suite', () => {

  test.b("w",async () => {
    console.log("Before all tests");
  });
  test.afterAll(async () => {
    console.log("After all tests");
  }); 

test('has title', async () => {
  console.log("Test started");
  
  
});
test('second test', async () => {
  console.log("Second Test started");   
})

});*/

