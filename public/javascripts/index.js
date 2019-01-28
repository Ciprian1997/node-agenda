function loadContacts() {
    $.ajax('data/contacts.json').done(function(contacts){
        console.info('contacts loaded', contacts);
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

function saveContact() {
    console.debug('saveContact.....')
    var firstName = document.querySelector('input[name=firstName]').value;
    var lastName = $('input[name=lastName]').val();
    var phone = $('input[name=phone]').val();
    console.debug('saveContact...', firstName, lastName, phone);
    $.post('contacts/create', {
        firstName, // shortcut from ES6 (key is the same)
        lastName,
        phone: phone // ES5(key = value)
    }).done(function(){
        console.warn('done create contact', response);
        if (response.success) {
            loadContacts();
        }
    });
}

function displayContacts(contacts){
    var rows = contacts.map(function(contact) {
       console.log('transform contact', contact);
       return `<tr>
            <td>${contact.firstName}</td>
            <td>${contact.lastName}</td>
            <td>${contact.phone}</td>
            <td><a href="/contacts/delete?phone=${contact.phone}">x</a></td>
       </tr>`; 
    });
    console.warn('rows', rows);
    //rows.push(getNewRow());
    var action = getNewRow();
    rows.push(actions);

    document.querySelector('tbody').innerHTML = rows.join('');
}

// - start app

loadContacts();