import React, { Component } from 'react';
import llamas from "./llamas.json";
import './App.css';
import LlamaCard from "./components/LlamaCard";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";

class App extends Component {
  // Setting this.state.characters to the characterse json array.
  state = {
    message: "Click a Llama to begin",
    topScore: 0,
    curScore: 0,
    llama: llamas,
    unselectedLlamas: llamas
  };
    //
    // componentDidMount() {
    // }
    //
    // shuffleArray = array => {
    //     for (let i = array.length - 1; i > 0; i--) {
    //         let j = Math.floor(Math.random() * (i + 1));
    //         [array[i], array[j]] = [array[j], array[i]];
    //     }
    // }
    //
    // selectLlama = breed => {
    //     const findLlama = this.state.unselectedLlamas.find(item => item.breed === breed);
    //
    //     if(findLlama === undefined) {
    //         // failure to select a new llama
    //         this.setState({
    //             message: "You guessed incorrectly!",
    //             topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
    //             curScore: 0,
    //             llamas: llamas,
    //             unselectedLlamas: llamas
    //         });
    //     }
    //     else {
    //         // success to select a new llama
    //         const newLlamas = this.state.unselectedLlamas.filter(item => item.breed !== breed);
    //
    //         this.setState({
    //             message: "You guessed correctly!",
    //             curScore: this.state.curScore + 1,
    //             llamas: llamas,
    //             unselectedLlamas: newLlamas
    //         });
    //     }
    //
    //     this.shuffleArray(llamas);
    // };

    componentDidMount() {
    }

    shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    selectLlama = breed => {
        const findLlama = this.state.unselectedLlamas.find(item => item.breed === breed);

        if(findLlama === undefined) {
            // failure to select a new Llama
            this.setState({
                message: "You guessed incorrectly!",
                topScore: (this.state.curScore > this.state.topScore) ? this.state.curScore : this.state.topScore,
                curScore: 0,
                llamas: llamas,
                unselectedllamas: llamas
            });
        }
        else {
            // success to select a new Llama
            const newLlamas = this.state.unselectedLlamas.filter(item => item.breed !== breed);

            this.setState({
                message: "You guessed correctly!",
                curScore: this.state.curScore + 1,
                llamas: llamas,
                unselectedLlamas: llamas
            });
        }

        this.shuffleArray(llamas);
    };


render() {
    return (
        <Wrapper>
            <Navbar
                message={this.state.message}
                curScore={this.state.curScore}
                topScore={this.state.topScore}
            />
            <Title />
            {
                this.state.llama.map(llama => (
                    <LlamaCard
                        id={llama.id}
                        key={llama.id}
                        image={llama.image}
                        name={llama.name}
                        location={llama.location}
                        selectLlama={this.selectLlama}
                        curScore={this.state.curScore}
                    />
                ))
            }
        </Wrapper>
    );
}
}



export default App;
