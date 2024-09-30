
export class PortofolioPage {

    constructor(page) {
        this.page = page
        this.header = page.locator('.hero-line.is-portfolio')
        this.countryDropdown = page.locator('.multi-select-country')
        this.polandOption = page.locator('span[data-value="Poland"]')
        this.netherlandsOption = page.locator('span[data-value="Netherlands"]')
        this.container = page.locator('.collection-item')
        this.paginatorPage = page.locator('.projects-pagination-page-button.w-inline-block')
        this.industryDropdown = page.locator('.multi-select-industry')
        this.hospitalityOption = page.locator('span[data-value="Hospitality"]')
        this.netherlandsTag = page.locator('.multi-select-tag', { hasText: 'Netherlands'})
        
    }
}