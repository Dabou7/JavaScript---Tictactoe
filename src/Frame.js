import React, { Component } from 'react';
import Cell from './Cell';


class Frame extends Component {
   
    constructor(props){
        super(props);
        this.state={
            cells: Array(9).fill(null),
        };
    }

    renderCell(i){
        return( 
        <Cell 
        value={this.state.cells[i]}
        onClick={() => this.handleClick(i)}
        />
        );
    }

    render() {
        const status="Next player: X";
        return (
            <div>
                <p>Tictactoe</p>
                      
               <div className="status">{status}</div>
               <div className="board.row">
                   {this.renderCell(0)}
                   {this.renderCell(1)}
                   {this.renderCell(2)}

               </div>
               <div className="board.row">
                   {this.renderCell(3)}
                   {this.renderCell(4)}
                   {this.renderCell(5)}

               </div>
               <div className="board.row">
                   {this.renderCell(6)}
                   {this.renderCell(7)}
                   {this.renderCell(8)}

               </div>
            </div>
        )
    }
}

export default Frame;
