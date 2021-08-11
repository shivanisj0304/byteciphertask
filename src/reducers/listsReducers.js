import { CONSTANTS } from "../actions";
let listID = 2;
let cardID = 5;

const initialState =[
    {
     title: "Handcrafted Program Sausages",
     id: `list-${0}`,
     cards: [
        {
            id: `card-${0}`,
            text: "we created a static list",
            img: `logo512.jpg`,
        },
        {
            id: `card-${1}`,
            text: "travelling from where to there"
        }
    ]
   },

   {
    title: "Incredible matal Shirt",
    id: `list-${1}`,
    cards: [
       {
           id: `card-${2}`,
           text: "we created a static list"
       },
       {
           id: `card-${3}`,
           text: "we used a mixed card"
       },
       {
        id: `card-${4}`,
        text: "we used a mixed card"
       }
   ]
  }
];

const listsReducer = (state = initialState , action ) => {
 switch (action.type) {

    case CONSTANTS.ADD_LIST:
        const newList = {
            title: action.payload,
            cards: [],
            id: `list-${listID}`
        };
        listID += 1;
        return [...state, newList];

        case CONSTANTS.ADD_CARD:{
            const newCard = {
                text: action.payload.text,
                id: `card-${cardID}`
            };
            cardID += 1;

            console.log("action received ", action)

            const newState = state.map(list => {
                if(list.id === action.payload.listID)
                {
                    return{
                        ...list,
                        cards: [...list.cards,newCard]
                    }
                }
                else{
                    return list;
                }
            });

            return newState;
        }

            case CONSTANTS.DRAG_HAPPENED:

            const { 
                 droppableIdStart,
                 droppableIdEnd,
                 droppableIndexEnd,
                 droppableIndexStart,
                 draggableId
             } = action.payload;
                const newState = [...state];

                if(droppableIdStart === droppableIdEnd) {
                    const list = state.find(list => droppableIdStart === list.id)
                    const card = list.cards.splice(droppableIndexStart, 1)
                    list.cards.splice(droppableIndexEnd, 0 , ...card)
                }
                return newState;

  default:
     return state;

}

}

export default listsReducer;