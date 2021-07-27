import React, { Component } from 'react';
import Frame from './Frame';


class Game extends Component{
render(){
    return(
        <div className="game">
            <div className="game-board">
                <Frame/>
            </div>
            <div className="game-info">
                <div></div>
                <ol></ol>
            </div>

        </div>
    )
}



}
export default Game;
