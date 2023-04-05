describe('Tipos de localizadores', () => {

    it('Obtener por medio de un tag', () => {

        cy.visit("/automation-practice-form")
        cy.get('input')

    })

    it('Obtener por medio de un atributo', () => {

        //cy.visit("/automation-practice-form")
        cy.get('[placeholder="First Name"]')

    })

    it('Obtener por medio de un atributo y un tag', () => {

        //cy.visit("/automation-practice-form")
        cy.get('input[placeholder="First Name"]')

    })

    it('Obtener por medio de un id', () => {

        //cy.visit("/automation-practice-form")
        cy.get('#firstName')

    })

    it('Obtener por medio de un class', () => {

        //cy.visit("/automation-practice-form")
        cy.get('.mr-sm-2.form-control')

    })

    it('Usando contains', () => {

        //cy.visit("/automation-practice-form")
        cy.contains('Reading')
        cy.contains('.header-wrapper', 'Widgets')

    })

    it('Usando parent', () => {

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

})