import { test, expect } from '@playwright/test'
import { URLS } from '../data/Constants';
import { Navbar } from '../tools/Navbar'
import { PortofolioPage } from '../pages/PortofolioPage';


test.describe ('Interview test', () => {
    let navbar;
    let portofolioPage;

    test.beforeEach( async ({ page }) => {
        navbar = new Navbar (page)
        portofolioPage = new PortofolioPage (page)
        await page.goto(URLS.HOME_URL)
    })

    test('As a user, I should be able to use filters in portofolio section', async () => {
        await navbar.portofolioOption.click()
        await expect(portofolioPage.header).toBeVisible()
        await portofolioPage.countryDropdown.click()
        await portofolioPage.polandOption.click()
        await portofolioPage.countryDropdown.click()
        await portofolioPage.netherlandsOption.click()
        await expect(portofolioPage.container).toHaveCount(4) // Checks that there are 4 results in the page
        await expect(portofolioPage.paginatorPage).toHaveCount(3) // Checks that there are 3 pages
        await portofolioPage.industryDropdown.click()
        await portofolioPage.hospitalityOption.click()
        await expect(portofolioPage.container).toHaveCount(1) // Checks that there is only 1 result
        await expect(portofolioPage.paginatorPage).toHaveCount(1) // Checks that there are not additional pages
        await portofolioPage.netherlandsTag.click()
        await expect(portofolioPage.container).toHaveCount(0) // Checks that the locator is not visible, so there are no results
        await expect(portofolioPage.paginatorPage).toHaveCount(1) // Checks that there are not additional pages

    })

})