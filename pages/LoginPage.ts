import {Page,Locator} from '@playwright/test';

export class LoginPage{

    readonly page:Page;
    readonly username_sause:Locator;
    readonly password_sause:Locator;
    readonly loginButton_sause:Locator;

    readonly username_rahul:Locator;
    readonly password_rahul:Locator;
    readonly loginButton_rahul:Locator;

    constructor(page:Page){
        this.page=page;
        this.username_sause=page.locator("#user-name");
        this.password_sause=page.locator("#password");
        this.loginButton_sause=page.locator("#login-button");

        this.username_rahul=page.locator("#userEmail");
        this.password_rahul=page.locator("#userPassword");
        this.loginButton_rahul=page.locator("#login");
    }

    async login_sause(username:string,password:string){

        await this.username_sause.fill(username);
        await this.password_sause.fill(password);
        await this.loginButton_sause.click();
    }

    async login_rahul(username:string,password:string){

        await this.username_rahul.fill(username);
        await this.password_rahul.fill(password);
        await this.loginButton_rahul.click();
    }
}