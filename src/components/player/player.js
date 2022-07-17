import React from "react";
import { Button, ButtonGroup, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap";
import { deletePlayer } from "../../service/index";

const buttons = (view, id, modal) => {
    if(!view){
        return <Button color="danger" onClick={() => window.location=`/players/${id}`} >View Player</Button>
    }
    return(
        <ButtonGroup>
            <Button color="outline-info" onClick={modal}>Edit Player</Button>
            <Button color="outline-danger" onClick={() => deletePlayer(id).then(res => window.location = '/players')}>Delete Player</Button>
        </ButtonGroup>
    )
}

const Player = (props) => {
    return(
        <Card className="md-4" style={{ width: '300px'}}>
            <CardImg src={props.player.image} alt='Player Image' />
            <CardBody>
                <CardTitle tag="h5">{props.player.name}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">{props.player.id}</CardSubtitle>
                <CardText>{props.player.category}, {props.player.country}</CardText>
                {buttons(props.view, props.player.id, props.modal)}
            </CardBody>
        </Card>
    )
}

export default Player;