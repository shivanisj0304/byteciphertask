import React from "react";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const CardContainer = styled.div`
   margin-bottom: 8px
`

const styles={
    root: {
        maxWidth: 345,
        marginBottom: 8,
        padding:8
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
      avatar: {
        backgroundColor: red[500],
      },
      cardContainer: {
          marginBottom: 8
      }
};

const TrelloCard =({text , id , index, img})=>{
    return(
        <Draggable draggableId={String(id)} index={index} >
            {provided =>(
                <CardContainer ref={ provided.innerRef } {...provided.draggableProps} {...provided.dragHandleProps}>
                    
                      <Card >
                         <CardHeader
                            avatar={
                                <Avatar aria-label="recipe" className={styles.avatar}>
                                     R
                                 </Avatar>
                              }
                            action={
                               <IconButton aria-label="settings">
                                   <MoreVertIcon />
                               </IconButton>
                              }
                                 title="Shrimp and Chorizo Paella"
                                 subheader="September 14, 2016"
                              />
                         <CardMedia
                           className={styles.media}
                           image="/static/images/cards/paella.jpg"
                           title="Paella dish"
                         />
                   <CardContent>
                       <Typography variant="body2" color="textSecondary" component="p">
                          {text}
                       </Typography>
                       <Typography variant="body2" color="textSecondary" component="p">
                          {img}
                       </Typography>
                  </CardContent>
                   
              </Card>
              </CardContainer>
             
              

            )}
    </Draggable>
    
    ) ;
    
};

export default TrelloCard;