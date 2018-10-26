import { Template } from 'meteor/templating'

import { Membres } from '../api/membres.js'

import './body.html'
import './task.js'
import './membre.js'
import './village.js'

Template.body.helpers({
  membres () {
    return Membres.find({})
  }
})

Template.body.events({
  // insertion nouveau membre
  'submit .new-membre' (event) {
    // Prevent default browser form submit
    event.preventDefault()

    // Get value from form element
    const target = event.target
    const nomMembre = target.nomMembre.value
    const descriptifMembre = target.descriptifMembre.value
    const srcMembre = target.srcMembre.value

    // Insert a membre into the collection
    Membres.insert({
      nomMembre,
      descriptifMembre,
      srcMembre,
      createdAt: new Date() // current time
    })

    // Clear form
    target.nomMembre.value = ''
    target.descriptifMembre.value = ''
    target.srcMembre.value = ''
  },

  // Sauvegarde des données dans les champs Modal
  'submit .modifier-membre' (event) {
    event.preventDefault()

    // Get value from form element
    const target = event.target
    const newNomMembre = target.editNomMembre.value
    const newDescriptifMembre = target.editDescriptifMembre.value
    const newSrcMembre = target.editSrcMembre.value
    const id = target.editId.value

    console.log('newNomMembre : '+ newNomMembre)
    console.log('id : '+ id)
    

    // Mettre à jour les membres
    Membres.update(id, {
      $set: { nomMembre: newNomMembre, descriptifMembre: newDescriptifMembre, srcMembre: newSrcMembre }
    })

    // close modal
    $('#exampleModal').modal('hide')
  }
})
