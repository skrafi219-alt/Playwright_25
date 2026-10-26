import {test,expect,request} from '@playwright/test';
const loginPayLoad="";
test.beforeAll("login API", async ({})=>{

    const apiContext=await request.newContext();
    const apiRes=await apiContext.post("",{data:loginPayLoad});
});