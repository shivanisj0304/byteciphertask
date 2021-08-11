import React from "react";
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import Textarea from 'react-textarea-autosize';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { connect } from "react-redux";
import {addList, addCard} from "../actions"


const styles = {
    openForButtonGroup: {
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: 3,
        height: 36,
        width: 272,
        paddingLeft: 10
    },
    formButtonGroup: {
        marginTop: 8,
        display: "flex",
        alignItems: "center"
    }
}


class TrelloActionButton extends React.Component{

    state = {
        formOpen: false
    };

    openForm = () => {
        this.setState({
            formOpen: true
        })
    };

    closeForm = (e) => {
        this.setState({
            formOpen: false
        })
    };

    handleInputChange =(e)=>{
        this.setState({
            text: e.target.value
        })
    };

    handleAddList = ()  => {
        const { dispatch } =this.props;
        const {text} = this.state;

        if(text) {
            this.setState({
                text: ""
            })
            dispatch(addList(text))
        }
        return;
    };

    handleAddCard = () => {
        const { dispatch , listID } =this.props;
        const {text} = this.state;
        
        if(text) {
            this.setState({
                text: ""
            })
            dispatch(addCard(listID , text));
        }
        return;

    }

    renderAddButton = () => {
        const { list } = this.props;

        const buttonText = list ? "Add another list" : "Add another card"
        const buttonTextOpacity = list ? 1 : 0.5;
        const buttonTextColor = list ? "white" : "inherit" ;
        const buttonTextBackground =list ? "rgba(0,0,0,.15)" : "inherit";

        return (
            <div 
            onClick={this.openForm}
            style={{
                ...styles.openForButtonGroup,
                opacity: buttonTextOpacity , color: buttonTextColor, backgroundColor: buttonTextBackground }}>
                <Icon>add</Icon>
                <p>{buttonText}</p>
            </div>
        )
    }

    renderForm = ()=>{
        const { list } = this.props;

        const placeholder = list ? "Enter list title" : "Enter a title for this card...";

        const buttonTitle = list ? "Add  List" : "Add card" ;
        return <div>
             <Card
                style={{
                   overflow: "visible",
                   minHeight: 80,
                   minWidth: 272,
                   padding: "6px 8px 2px"
                 }}>
                                  
                <CardHeader
                       avatar={
                        <Avatar variant="rounded" src={"logo192.jpg"} style={{width:50,height:50}}/>
                       }
            />
           
          <Textarea placeholder={placeholder} 
                  autoFocus 
                  onBlur={this.closeForm}
                  value={this.state.text}
                  onChange={this.handleInputChange}
                  style={{
                      resize: "none",
                      width: "100%",
                      overflow: "hidden",
                      outline: "none",
                      border: "none"
                  }}
                />

             </Card>
             <div style={styles.formButtonGroup}>
                 <Button
                    onMouseDown={ list ? this.handleAddList : this.handleAddCard}
                    variant="contained" style={{color: "white", backgroundColor: "#5aac44"}}>
                     {buttonTitle}{""}
                 </Button> 
                 <Icon style={{marginLeft: 8, cursor: "pointer"}}>close</Icon>
             </div>
        </div>
    }


    render() {
        return this.state.formOpen ?this.renderForm() : this.renderAddButton();
    }
}

export default connect() (TrelloActionButton);