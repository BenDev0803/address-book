let wrapper = document.querySelector('#wrapper');

let showContacts = document.querySelector('#showContacts');

let confirm = true;

let btnAddContact = document.querySelector('#btnAddContact')

let btnRemoveContact = document.querySelector('#btnRemoveContact')



let rubrica = {
    
    'contacts' : [
        {'name' : 'Mario', 'number' : '0123456789'},
        {'name' : 'Mauro', 'number' : '0123456688'},
        {'name' : 'Maurizio', 'number' : '0123355787'},
        {'name' : 'Maria', 'number' : ' 0122358749'},
    ],
    
    'showContacts' : function (){
        wrapper.innerHTML = ''
        console.log('addContact');
        this.contacts.forEach( contact => {
            
            let div = document.createElement('div');
            div.classList.add('row', 'justify-content-center')
            div.innerHTML = `
            <div class="col-3 text-center b-custom p-2 mt-2">
            <p class="lead">${contact.name}</p>
            </div>
            <div class="col-3 text-center box-custom p-2 mt-2">
            <p class="lead">${contact.number}</p>
            </div>`
            
            wrapper.appendChild(div)
        })
    },
    
    'addContact' : function(nome , numero){
        this.contacts.push({'name' : nome, 'number' : numero})
        this.showContacts()
    } 
    
}
btnAddContact.addEventListener(`click`,() =>{
        const name =  document.querySelector("#nameInput").value
        const number = document.querySelector('#numberInput').value
        rubrica.addContact(name,number) 

})   

 btnRemoveContact.addEventListener(`click`, () =>{
    rubrica.contacts = rubrica.contacts.filter(contact => {
        const nameToRemove =  document.querySelector("#nameInput").value
        const numberToRemove = document.querySelector('#numberInput').value
        if (nameToRemove === contact.name && numberToRemove === contact.number) {
            return false;
        }
        return true
    })
    rubrica.showContacts()
} )
     
    
    
    showContacts.addEventListener(`click` , () => {
        if (confirm == true){
            rubrica.showContacts();
            confirm = false;
            showContacts.innerHTML = 'Nascondi'
        }else{
            wrapper.innerHTML = ''
            confirm = true;
            showContacts.innerHTML = 'Mostra'
        }
    })
    
    
