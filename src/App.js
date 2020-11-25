import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import contacts from './contacts.json';

class App extends React.Component {

state = {
  contacts: contacts.slice(0, 5)
}

addContactHandler = () => {

  
    const newContacts = contacts.slice(5) 
    const randomContacts = Math.floor(Math.random()*newContacts.lenght);
    const randomContactsIndex = newContacts[randomContacts];
    const contactsCopy = this.state.contacts.concat(randomContactsIndex)


  this.setState({
    contacts: contactsCopy
  });
}

sortNameHandler = () => {
let sortedContacts = this.state.contacts.sort(function(a,b) {
  if(a.name < b.name) {
    return -1
  } else if (a.name > b.name){
    return 1
  } else return 0;
})

  this.setState({
    contacts: sortedContacts
  })

}


sortPopularityHandler = () => {
let sortedPopularity = this.state.contacts.sort(function(a,b) {
  if(a.popularity > b.popularity) {
    return -1
  } else if (a.popularity < b.popularity){
    return 1
  } else return 0;
})

this.setState({
  contacts: sortedPopularity
})
}

deleteContactHandler = (id) => {
  const contactsCopy = [...this.state.contacts];
  const contactToRemoveIndex = contactsCopy.findIndex((item) => {
    return item.id === id;
  });

  contactsCopy.splice(contactToRemoveIndex, 1);

  this.setState({
    contacts: contactsCopy
  })
}

render() {
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={this.addContactHandler}>Add Contact</button>
      <button onClick={this.sortNameHandler}>Sort by Name</button>
      <button onClick={this.sortPopularityHandler}>Sort by Popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {this.state.contacts.map(contact => {
            return (
              <tr key={contact.id}>
                <td>
                  <img src={contact.pictureUrl} alt={contact.name} />
                </td>
            <td>{contact.name}</td>
            <td>{Math.round(contact.popularity)}</td>
            <td>
              <button onClick={this.deleteContactHandler}>Delete</button>
            </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      
    </div>
  );
}
}
export default App;
