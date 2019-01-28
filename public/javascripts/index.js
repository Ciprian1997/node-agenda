var phonetoEdit = '';

function loadContacts() {
    $.ajax('data/contacts.json').done(function(contacts){
        console.info('contacts loaded', contacts);
        window.globalContacts = contacts;
        displayContacts(contacts);
    });
}

function getNewRow() {
    return `<tr>
            <td><input type='text' name="firstName" placeholder="First Name"/></td>
            <td><input type='text' name="lastName" placeholder="Last Name"/></td>
            <td><input type='text' name="phone" placeholder="Phone"/></td>
            <td><button onClick="saveContact()">Save</button></td>
       </tr>`;
}

function displayContacts(contacts){
    var rows = contacts.map(function(contact) {
       console.log('transform contact', contact);
       return `<tr>
            <td>${contact.firstName}</td>
            <td>${contact.lastName}</td>
            <td>${contact.phone}</td>
            <td>
                <a href="/contacts/delete?phone=${contact.phone}">&#10006;</a>
                <a href="#" class="edit" data-id="${contact.phone}">&#9998;</a>
            </td>
       </tr>`; 
    });
    

    //rows.push(getNewRow());
    var action = getNewRow();
    //rows.push(actions);

    document.querySelector('tbody').innerHTML = rows.join('');
}

function initEvents() {
    $( "tbody" ).delegate( "a.edit", "click", function() {
        phonetoEdit = this.getAttribute('data-id');

        var contact = globalContacts.find(function(contact){
            return contact.phone == phonetoEdit;
        })
        $('input[name=phone]').val(phonetoEdit);

        document.querySelector('input[name=firstName]').value = contact.firstName;
        $('input[name=lastName]').val(contact.lastName);
        $('input[name=phone]').val(contact.phone);
    });

    document.getElementById('search').addEventListener('input', doSearch);
}

function doSearch() {
    var value = this.value;
    console.warn('please search', value);
}


// - start app

loadContacts();
initEvents();