import { Component, useEffect, useState } from "react";
import { CardGroup } from "reactstrap";
import Player from "../player/player";
import { getPlayers } from "../../service/index";

export default class Players extends Component{
  constructor(props){
    super(props);
    this.state={
      playersList: []
    }
  }
  componentDidMount() {
    getPlayers().then((res) =>{
        this.setState({ playersList: res.data })
        console.log(res);
    });
  }
  render(){
    return(
        <div>
            <h1>Players Component!!</h1>
            <CardGroup>
            {this.state.playersList.map(player => <Player player={player} />)}
            </CardGroup>
      </div>
      
    )
  }
}


// const Players = () => {

//     const [ playersList, setPlayersList ] = useState([]);

//     useEffect(() => {
//         getPlayers().then((res) =>
//             setPlayersList(res.data.players)
//         )
//     },[])

//     return(
//         <div>
//              <h1>Players Component!!</h1>
//              <CardGroup>
//                 {playersList && playersList.map(player => <Player player={player} />)}
//              </CardGroup>
//        </div>
//     )
// }

// export default Players;