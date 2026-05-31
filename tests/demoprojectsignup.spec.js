import { test, expect } from "@playwright/test";
import { DemoProjectSignupPage } from "../Pages/DemoProjectSignupPage";
import { DemoProjectGeneral } from "../Pages/DemoProjectGeneral";
const credentialsList = require("../utils/demoprojecttestdata.json");

test.describe("Signup Suite", () => {
  let demoprojectgeneral;
  let demoprojectsignuppage;

  test.beforeEach(async ({ page }) => {
    const url = credentialsList.siteUrl.url;
    demoprojectgeneral = new DemoProjectGeneral(page);
    await demoprojectgeneral.goto(url);
    demoprojectsignuppage = new DemoProjectSignupPage(page);
    await demoprojectsignuppage.signinbuttonClick();
  });

  test("Demoproject Signup submission", async ({ page }) => {
    page.on("dialog", async (dialog) => {
      expect(dialog.type()).toBe("alert");
      expect(dialog.message()).toBe("Sign up successful.");
      await dialog.accept();
    });

    const randomUserDetails = demoprojectgeneral.randomUserGenerationAndUpdate();
    await demoprojectsignuppage.signupFormFilling(
      randomUserDetails.username,
      randomUserDetails.password,
    );
    await demoprojectsignuppage.signupFormSubmission();
  });

  test("DemoProject Signup Cancel", async ({ page }) => {
    await demoprojectsignuppage.signupFormCancel();

    const contactText = page.locator("//a[text()='Contact']");
    await expect(page.locator("//a[text()='Contact']")).toBeVisible();
  });
});
