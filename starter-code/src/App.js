import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'


class App extends Component {
  
  state = {
    firstFive: contacts.splice(0,5),
    reverse: false
  }
  sortByName = () => {
    const copyOfContacts=[...this.state.firstFive]
    let estado=true
    if (this.state.reverse){
    copyOfContacts.sort((a,b)=> (a.name>b.name) ? 1:-1)
    estado=false
    }
    if (!this.state.reverse){
      copyOfContacts.sort((a,b)=> (a.name<b.name) ? 1:-1)
      estado=true
      }
    this.setState({
      firstFive: copyOfContacts,
      reverse: estado
    })
  }
  
  sortByPopularity = () => {
    const copyOfContacts=[...this.state.firstFive]
    let estado=true
    if (this.state.reverse){
    copyOfContacts.sort((a,b)=> (a.popularity<b.popularity) ? 1:-1)
    estado=false
    }
    if (!this.state.reverse){
    copyOfContacts.sort((a,b)=> (a.popularity>b.popularity) ? 1:-1)
    estado=true
    }
    this.setState({
      firstFive: copyOfContacts,
      reverse: estado
     })
  }

  addRandomContact = () => {
    const copyOfContacts=[...contacts].slice(5)
    var randomContact = copyOfContacts[Math.floor(Math.random()*copyOfContacts.length)]
    let copyArrayOf=[...this.state.firstFive]
    copyArrayOf.push(randomContact)
  
    this.setState({
     firstFive: copyArrayOf
    })
  }

  removeContact = (i) => {
    const copyOfContacts=[...this.state.firstFive]
    copyOfContacts.splice(i,1)
   
  
    this.setState({
     firstFive: copyOfContacts
    })
  }

  render() {
    // this.filteredContacts=this.state.firstFive.filter(eachContact=>)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"><span class="shiny"><span class="inner shiny">IronContacts</span></span></h1>
        </header>
        <div class="buttons">
        <button onClick={this.addRandomContact}>Add</button>
        <button onClick={this.sortByName}>Sort by Name</button>
        <button onClick={this.sortByPopularity}>Sort by Popularity</button>
        </div>
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
           {this.state.firstFive.map((eachContact, index)=>
              <tr key={index}>
                <td><img src={eachContact.pictureUrl} alt="youSuck"/></td>
                <td>{eachContact.name}</td>
                <td>{eachContact.popularity.toFixed(2)}</td>
                <td><button onClick={()=>this.removeContact(index)}>Delete</button></td>
              </tr>
           )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
