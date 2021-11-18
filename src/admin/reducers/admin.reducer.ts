import cards from './cards';
import Person from "../../comparable/Person";

export interface State {
  cards: Person[];
}

export default function(state: State = { cards: cards }, action: any): State {
  switch (action.type) {
    
    case "delete_all": {
      const newState = {...state};
      newState.cards = [];
      return newState;
    }

    case "delete_card": {
      const newCards = [...state.cards];
      newCards.splice(action.payload.index, 1);
      const newState = {...state};
      newState.cards = newCards;
      return newState;
    }

    default:
      return state;
  }
}
