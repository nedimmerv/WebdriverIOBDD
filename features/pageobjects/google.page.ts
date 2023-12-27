
import { $ } from '@wdio/globals'
import Page from './page';

class GooglePage extends Page {


public get clickOnPopup () {
    return $("//*[text()= 'Aceptar todo']");
}

	public get sendTextToSearch(){
        return $("//*[@name='q']")
    }
	
	
public get enterKey(){
    return browser.keys('Enter')
}

public get waitfor(){
   return  browser.pause(2000)
}
	
public get screenshot(){
    return  browser.takeScreenshot()
}
	
	
public async  openBrowser(){
    return  browser.url("https://www.google.es/")
	
}

public async clickOnPopUpMessage () {
    (await this.clickOnPopup).click()
    
}
public async sendTextToSearchEngine (text) {
    (await this.sendTextToSearch).setValue(text)
    await this.enterKey
    await this.waitfor
}

}
export default new GooglePage();