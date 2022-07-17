import { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Modal, ModalBody, ModalHeader } from "reactstrap";
import Player from "../player/player";
import { getPlayer } from "../../service/index";
import UpdatePlayer from "../update-player/UpdatePlayer";

export default class ViewPlayer extends Component{
    constructor(props){
        super(props);
        console.log(this.props);
        this.state = {
            player: {},
            modal: false
        }
    }

    componentDidMount(){
        getPlayer(window.location.pathname.split('/').pop()).then(res => this.setState({ player: res.data }))
    }

    toggleModal = () => {
        this.setState({ modal: !this.state.modal })
    }

    render(){
        return(
            <Container fluid className="margin-top">
                <Player view player={this.state.player} modal={this.toggleModal} />
                <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
                    <ModalHeader>Update Player Form</ModalHeader>
                    <ModalBody>
                        <UpdatePlayer modal={this.toggleModal} player={this.state.player} />
                    </ModalBody>
                </Modal>
            </Container>
        )
    }
}

// const ViewPlayer = (props) => {
//     const [player, setPlayer] = useState([]);
//     const { id } = useParams();
//     useEffect(() => {
//         getPlayer(id).then(res => setPlayer(res.data.player ))
//     },[])
//     return(
//         <Container fluid className="margin-top">
//             {player && <Player view player={player} />}
//         </Container>
//     )
// }

// export default ViewPlayer;

