const { Selector } = require("testcafe");
import { fixture } from 'testcafe';

fixture`Fixture import`.test("https://dev.deepthought.education/login")
test("valid login",async(t)=>{
    await t 
    .typeText("@username","jaykumarbariya")
    .typeText("@password","oee906122")
    .click("@login-button")
    .expect(Selector(".title").innerText).eql("jaykumarbariya | DeepThought")
});