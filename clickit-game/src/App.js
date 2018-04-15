import React, { Component } from 'react';
import LlamaCard from "./components/LlamaCard";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import llamas from "./llamas.json";
import './App.css';

class App extends Component {
  // Setting this.state.characters to the characterse json array.
  state = {
    llamas
  };

  removeLlama = id => {
    const llamas = this.state.llamas.filter(llama => llama.id !== id);
    this.setState({ llamas });
  };

  render() {
    return (
      <Wrapper>
        <Title>Llamma Click</Title>
        {this.state.llamas.map(llama => (
          <LlamaCard
          removeFriend={this.removeFriend}
          id={llama.id}
          name={llama.name}
          image={llama.image}
          location={llama.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
