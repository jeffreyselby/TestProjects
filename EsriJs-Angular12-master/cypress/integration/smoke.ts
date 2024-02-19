describe('Test de Humo', () => {
  it('Visitar página inicial', () => {
    cy.visit('/')
    .then(() => {
      cy.document()
        //.contains('Expedientes')
        .toMatchImageSnapshot();
    });
  })
})
