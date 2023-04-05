describe('Navegacion', () => {
    
    it ('Navegar a nuestra primer página', ()=> {
    
        cy.visit('https://www.platzi.com')

    })
    
    it('Recargar pagina ', () => {
    
        cy.visit('https://www.platzi.com')
        cy.reload(true)
    
    })
    
    it.only('Navegar hacia atras ', () => {
    
        cy.visit('https://www.google.com')
        cy.visit('https://www.google.com/search?q=platzi&ei=J14jZJLjFJCN5OUPkrGamAg&ved=0ahUKEwjSkq_byv_9AhWQBrkGHZKYBoMQ4dUDCA8&uact=5&oq=platzi&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzINCC4QigUQxwEQ0QMQQzIFCAAQgAQyBQgAEIAEMgUIABCABDILCC4QgAQQxwEQrwEyBQgAEIAEMgoIABCABBCxAxAKMgoIABCABBCxAxAKMgUIABCABDIKCAAQgAQQsQMQCjoNCAAQjwEQ6gIQtAIYAToNCC4QjwEQ6gIQtAIYAToLCAAQgAQQsQMQgwE6EQguEIMBEMcBELEDENEDEIAEOgUILhCABDoNCAAQigUQsQMQgwEQQzoHCAAQigUQQzoTCC4QigUQsQMQgwEQxwEQ0QMQQzoICAAQgAQQsQM6CgguEIoFENQCEEM6CggAEIoFELEDEENKBAhBGABQ1gVY2hRg5xZoAHABeACAAdsIiAHII5IBBzUtNC4xLjGYAQCgAQGwAQrAAQHaAQQIARgK&sclient=gws-wiz-serp')
        cy.go("back")
        cy.go("forward")

    })
    
})