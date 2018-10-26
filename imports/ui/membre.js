import { Template } from 'meteor/templating'
import { Membres } from '../api/membres.js'
import './membre.html'


Template.membreT.events({
    'click .btn-edit-membre' (event) {
    
      // Prevent default browser form submit
      event.preventDefault()
  
      // Get value from form element
      const target = event.target
      const idMembre = target.getAttribute('data-id');
      console.log(idMembre);
  
      // Recuperer la ligne avec les bonnes données
      const membre = Membres.findOne({_id:idMembre});
  
      // Insert the data in the form's fields
      const modalInputNom = document.querySelector('#edit-nom');
      const modalInputDescriptif= document.querySelector('#edit-descriptif');
      const modalInputSrc= document.querySelector('#edit-src');
      const modalInputId = document.querySelector('#edit-id');
      
      modalInputNom.value = membre.nomMembre;
      modalInputDescriptif.value = membre.descriptifMembre;
      modalInputSrc.value = membre.srcMembre;
      modalInputId.value = membre._id;

      console.log(membre.nomMembre);
    },

    'click .delete'() {
      Membres.remove(this._id);
    },
  })


