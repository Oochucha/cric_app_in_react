import { Component } from "react";
import { Button, Card, CardGroup, Form, FormGroup, Input, Label } from "reactstrap";
import { createPlayer, updatePlayer } from "../../service/index";

const categoryList = [
    'Select Category',
    'Batsman',
    'Bowler',
    'Wicket Keeper',
    'All Rounder'
]

export default class UpdatePlayer extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: props.player.id,
            name: props.player.name,
            category: props.player.category,
            country: props.player.country,
            image: props.player.image
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    savePlayer = (event) => {
        event.preventDefault();
        const player = {
            id: this.state.id,
            name: this.state.name,
            category: this.state.category,
            country: this.state.country,
            image: this.state.image
        }
        console.log(player);
        updatePlayer(player).then(res => {
            this.props.modal()
            window.location = '/players'
        });
    }

    getCategoryList = () => categoryList.map((category, index) => <option key={index} value={category}>{category}</option>)

    render() {
        return(
            <Form onSubmit={this.savePlayer} >
                <FormGroup>
                    <Label>ID:</Label>
                    <Input type='text' name='id' placeholder={this.props.player.id} value={this.state.id} onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label>Name:</Label>
                    <Input type='text' name='name' placeholder={this.props.player.name} value={this.state.name} onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label>Category:</Label>
                    <Input type='select' name='category' value={this.state.category} onChange={this.handleChange}>
                        {categoryList.map((category, index) => <option key={index} value={category}>{category}</option>)}
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label>Country:</Label>
                    <Input type='text' name='country' placeholder={this.props.player.country} value={this.state.country} onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label>Image Url:</Label>
                    <Input type='text' name='image' placeholder={this.props.player.image} value={this.state.image} onChange={this.handleChange} />
                </FormGroup>
                <Button type="submit" color="danger">Update Player</Button>
            </Form>
        )
    }
}