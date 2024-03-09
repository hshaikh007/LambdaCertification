import { test, expect } from '@playwright/test';

test.describe('two tests', () => {
//3rd Scenario
    

test('input form submit', async ({ page }) => {
    
     await page.goto('https://www.lambdatest.com/selenium-playground');
     await page.locator("//a[text()='Input Form Submit']").click();
          
  page.on('dialog', async dialog=>{

    expect(dialog.type()).toContain('alert')
    expect(dialog.message()).toContain('Please fill out this field.');

  })
  await page.click("//button[text()='Submit']");
  await page.locator("#name").fill("Hakim Shaikh");
  await page.locator("//input[@placeholder='Email']").fill("shaikhakeem996@gmail.com");
  await page.locator("//input[@placeholder='Password']").fill("Password@123");
  await page.locator("#company").fill("Evoke Technologies");
  await page.locator("#websitename").fill("evoketechnologies.com");
  await page.selectOption("//select[@name='country']", {
    value: "IN"
  })
  await page.locator("#inputCity").fill("Hyderabad");
  await page.locator("#inputAddress1").fill("128/B, Aditya Nagar");
  await page.locator("#inputAddress2").fill("Miyapur");
  await page.locator("#inputState").fill("Telangana");
  await page.locator("#inputZip").fill("500049");
  await page.click("//button[text()='Submit']");
  
  const expectedTextMessage = await expect(page.locator("//p[@class='success-msg hidden']")).toHaveText("Thanks for contacting us, we will get back to you shortly.");
  
});

//1st Scenario
test('has title', async ({ page }) => {
    const certification = "Lambda Test";
  await page.goto('https://www.lambdatest.com/selenium-playground');
  await page.getByRole('link', { name: 'Simple Form Demo' }).click();
  await page.getByPlaceholder('Please enter your Message').fill(certification);
  await page.locator("#showInput").click();
  
  const expectedTextMessage = await expect(page.locator("#message")).toHaveText(certification);


  console.log(expectedTextMessage);
  
});

//2nd Scenario
test('drag & drop sliders', async ({ page }) => {
    //const certification = "Lambda Test";
  await page.goto('https://www.lambdatest.com/selenium-playground');
  await page.getByRole('link', { name: 'Drag & Drop Sliders' }).click();
  await page.waitForSelector("#slider3");
  const s = await page.locator("#slider3");
  let ele = page.locator("#rangeSuccess")
  let text = await ele.inputValue();
  console.log('Initial text: ' + text);
  let targetAmount = "95";
  let isCompleted = false;
  if (s) {
      while (!isCompleted) {
          let srcBound = await s.boundingBox();
          if (srcBound) {
              await page.mouse.move(srcBound.x + srcBound.width / 5,
                  srcBound.y + srcBound.height / 5)
              await page.mouse.down();
              await page.mouse.move(srcBound.x + 15, srcBound.y + srcBound.height / 5);
              await page.mouse.up();
              let text = await ele.inputValue();
              if (text == targetAmount) {
                  isCompleted = true;
              }
              }
            }
        }  
        await page.waitForTimeout(5000)

    });
});

