// const { expect } = require("chai")

describe('Guardando Elementos', () => {

    it('Repeticion', () => {
        cy.visit("/automation-practice-form")
        // Obten el elemento Padre
		cy.get('input[placeholder="First Name"]').parent()
		//Obetner los elementos Padres en general
		cy.get('input[placeholder="First Name"]').parents()
		// Obten el elemento Padre y el elemento Hijo
		cy.get('input[placeholder="First Name"]').parents().find('label')

		// Obteniendo el elemento padre y el elemento hijo limitando el padre
		cy.get('input[placeholder="First Name"]').parents('form').find('label')

		cy.get('form').find('label')
		//uso incorrrecto de find

    })

     it('Evitar repeticion', () => {
        cy.visit("/automation-practice-form")
        // Obten el elemento Padre
         cy.get('input[placeholder="First Name"]').parents('form')
            .then((form) => {
            
                const inputs = form.find('input')
                const divs = form.find('div')
                const labels = form.find('laber')
                expect(inputs.length).to.eq(15)

            })
		

		cy.get('form').find('label')
		//uso incorrrecto de find

     })
    
})