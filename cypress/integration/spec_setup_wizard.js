describe('Setup wizard', () => {
    it('Setup Bitcoin Core and Tor', () => {
        cy.viewport(1200,660)
        cy.visit('/about')

        cy.get('[href="/setup/start/"]').click()
        cy.contains('Specter Quickstart!')
        cy.get('#start-setup-btn').click()
        cy.contains('Setup Tor daemon')
        cy.get('#setup-tor-button').click()
        cy.wait(60000)
        cy.contains('Would you like to setup a new Bitcoin node or connect to an existing one?')
        cy.get('#setup-node-btn').click()
        cy.contains('Setup Bitcoin Core')
        cy.get('#setup-bitcoind-button').click()
        cy.wait(60000)
        cy.contains('Configure your node')
        cy.get('#quicksync-switch').click()
        cy.get('#setup-bitcoind-dir-button').click()
        cy.wait(3000)
        cy.contains('Starting up Bitcoin Core...')
        cy.wait(60000)
        cy.contains('Setup Completed Successfully!')
        cy.get('#finish-setup-btn').click()
        cy.contains('Connect Specter with Bitcoin Core node.')
        
        cy.get('[href="/settings/"]').click()
        cy.contains('Built in Bitcoin Node Status: Running')
        cy.get('[value="stopbitcoind"]').click()
        cy.contains('Built in Bitcoin Node Status: Down')

        cy.get('[value="startbitcoind"]').click({force: true, timeout: 60000})
        cy.contains('Built in Bitcoin Node Status: Running')
        cy.get('[name="remove_datadir"]').click()
        cy.get('[value="uninstall_bitcoind"]').click()
        cy.contains('Specter can help you get started with your own Bitcoin Core node by setting it all up for you.')
        cy.get('#external_node_view_btn').click()
        cy.get('[value="useexternal"]').click()


        cy.visit('/settings/tor')
        cy.get('[value="starttor"]').click()
        cy.get('#tor-status-text').contains('Status: Running')
        cy.get('[value="stoptor"]').click()
        cy.get('#tor-status-text').contains('Status: Down')
        cy.get('[value="starttor"]').click()
        cy.get('#tor-status-text').contains('Status: Running')
        cy.get('[value="test_tor"]').click()
        cy.contains('Tor requests test completed successfully!')
        cy.get('[value="uninstalltor"]').click()
        cy.get('#setup-tor-button').click()

        cy.visit('/about')

        cy.get('[href="/setup/start/"]').click()
    })
})