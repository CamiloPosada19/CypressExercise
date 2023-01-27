import { Given, When, And, Then, } from "@badeball/cypress-cucumber-preprocessor";
const googlePage=require("../../pages/GooglePage")

Given("I navigate to Google", () => {
    googlePage.visitPage();
    googlePage.acceptConditions(); 
});

When("I search for {string}", (search) => {
   googlePage.doSearch(search);
  
});

Then("I expect to see results for dogs", () => {
    googlePage.verifySearch();
   
 });

