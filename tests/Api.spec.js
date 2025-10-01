import { test, expect } from '@playwright/test';



test('My First Test Suite',async ({request}) => {
      const response = await request.post("https://todo.qacart.com/api/v1/users/login",
        {
            data: {
                email: "mohamedhamed77770@gmail.com",
                password: "123456@@aa"


        }}
    );
    console.log(response.ok())
    console.log(response.status())
    expect(response.ok()).toBeTruthy();
    const responseBody = await response.json();
    console.log(responseBody);
  console.log(responseBody.access_token);


    

    

    
});
