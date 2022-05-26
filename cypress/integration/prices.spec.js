/// <reference types="cypress" />

describe('test handPick combinations',()=>{
    beforeEach(()=>{
        cy.visit('/');
        cy.get('#onetrust-accept-btn-handler').click();
    })

    it('test if card price equal to content price',()=>{
        cy.visit('en/new-york-attractions-c260932/?show=attractions');
        let price;
        cy.get('.BundleCardsSlider__item').first().should(($price)=>{
            price=$price.text;
        }).click();
        cy.wait(1000);
        cy.get('.Price.text-32').should(($price2)=>{
            const price2=$price2.text;
            expect(price).equal(price2);
        });   
    });
});