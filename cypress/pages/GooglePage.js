class GooglePage {
    elements = {
        btnAcceptConditionsXpath:()=>cy.xpath("//button//*[text()[contains(.,'Aceptar todo')]]"),
        inputMakeAnEntry:()=>cy.get("input[name='q']"),
        titleSearchXpath:()=>cy.xpath("//h3[contains(text(),'Dogs') or contains(text(),'dogs') or contains(text(),'Dog') or contains(text(),'Dogs') or contains(text(),'DOGS')]")

    };

    visitPage(){
        cy.visit("/");
    }

    acceptConditions(){
        this.elements.btnAcceptConditionsXpath().click();
    }

    doSearch(search){
        this.elements.inputMakeAnEntry().clear().type(search).type("{enter}");
    }

    verifySearch(){
            this.elements.titleSearchXpath().each(($ele) => {
            console.log($ele.text());
            const text = $ele.text().toLowerCase();
            console.log(text);
            expect(text).includes("dog");
        })
      
    }

}

module.exports = new GooglePage();