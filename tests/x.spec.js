import { test, expect } from '@playwright/test';



test.describe('My First Test Suite', () => {

    test.use({
        storageState: 'state.json'

    })

test.beforeEach(async ({ page }) => {
    await page.goto('https://qacart-todo.herokuapp.com/login');

//   // 2- املى الايميل والباسورد
//   await page.locator('//*[@id="email"]').fill("mohamedhamed77770@gmail.com");
//   await page.locator('//*[@id="password"]').fill("123456@@aa");
//   // 3- دوس على زرار اللوجين
//   await page.locator('//*[@id="submit"]').click();
});


    test('login page UI and login flow', async ({ page }) => {
  
  
        // 1- افتح صفحة اللوجين
  /*await page.goto('https://qacart-todo.herokuapp.com/login');

  // 2- املى الايميل والباسورد
  await page.locator('//*[@id="email"]').fill("mohamedhamed77770@gmail.com");
  await page.locator('//*[@id="password"]').fill("123456@@aa");
  // 3- دوس على زرار اللوجين
  await page.locator('//*[@id="submit"]').click();*/




   // 4- اضغط على زرار Add Todo
  await page.locator('[data-testid="add"]').click();
 const todoText = "dzddbdzsedwd5aaesxzar";
  // 5- اكتب التودو الجديد
  await page.locator('[data-testid="new-todo"]').fill(todoText);
  await page.locator('[data-testid="submit-newTask"]').click();
  // 6- اتأكد إن التودو الجديد اتضاف بالاسم اللي أنا كاتبه
  const newTodo = page.locator('[data-testid="todo-item"]', { hasText: todoText });
  await expect(newTodo).toBeVisible();

  // 7- دوس على complete جوة نفس العنصر
  await newTodo.locator('[data-testid="complete-task"]').click();

  // 8- اتأكد إن لون الخلفية اتغير (Completed)
  await expect(newTodo).toHaveCSS("background-color", "rgb(33, 76, 97)");

  /*
   await page.locator('[data-testid="new-todo"]').fill(e   ewfcw fq3e);
  await page.locator('[data-testid="submit-newTask"]').click();
  // 7- اعمل complete للـ task
  await page.locator('[data-testid="complete-task"]').nth(0).click();

  // 8- اتأكد من لون الخلفية بعد ما تبقى Completed
  const todoHeader = page.locator('[data-testid="todo-item"]').nth(0);
  await expect(todoHeader).toHaveCSS("background-color", "rgb(33, 76, 97)");*/



});

 test('has login ', async ({page}) => {
     
  //await page.goto('https://qacart-todo.herokuapp.com/login');
  console.log(await page.url());
  await expect(page).toHaveURL("https://qacart-todo.herokuapp.com/todo");

  });
});
