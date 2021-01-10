import React, { Component } from 'react'
import Header from './components/Header'
import About from './components/About'
import Documentation from './components/Documentation'
import Contact from './components/Contact'
import Footer from './components/Footer'
import orgData from './orgData'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header orgData={orgData} />
        <About orgData={orgData} />
        <Documentation orgData={orgData} />
        <Contact orgData={orgData} />
        <Footer orgData={orgData} />
      </div>
    )
  }
}

export default App
