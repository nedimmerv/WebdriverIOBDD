
import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import GooglePage from '../pageobjects/google.page';
//import SecurePage from '../pageobjects/secure.page';
//import googlePage from '../pageobjects/google.page';

const pages = {
    google: GooglePage
}
/*

Given(/^User navigates to url$/, async ()  => {
	await browser.url("https://www.google.es/")
	await browser.pause(2000)
});

When(/^User  enters "([^"]*)" on search$/, async (search) => {
	await $("//*[text()= 'Aceptar todo']").click()
	await browser.pause(2000)
	await $("//*[@name='q']").setValue(search)
});

Then(/^User is able to see results$/, async() => {
	await browser.pause(2000)
	//await $("(//*[text()='iphone'])[1]").click()
	browser.keys('Enter')
	await browser.pause(2000)
	await browser.takeScreenshot()
	await expect ($("//*[@id='jZ2SBf']/div[1]/span/b")).toHaveTextContaining('15')
	await browser.pause(2000)
});
*/

Given(/^User navigates to url$/, async ()  => {
	await pages.google.openBrowser()
	await browser.pause(2000)
});

When(/^User  enters "([^"]*)" on search$/, async (search) => {
	await pages.google.clickOnPopUpMessage()
	await pages.google.sendTextToSearchEngine(search)
	await browser.pause(2000)
});

Then(/^User is able to see results$/, async() => {
	
});
