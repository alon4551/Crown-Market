import { shopTypes } from './shop.types';
const INITIAL_STATE = {
}

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopTypes.GET_SHOP_PREVIEW: {
      return {...state,
        data:state.map(section=>{return {
          ...section,
          items:section.items.filter((item, ind) => ind < 4)
        }
      })
      }
    }
    case shopTypes.UPDATE_STATE:
      return {
        ...action.payload
    }
    case shopTypes.GET_SECTION:{
      
      return {
        ...state,
        data:Object.keys(state).filter((item)=>item.routeName===action.payload)
      }
    }
    default:
      return {
        ...state
      }
  }

}
export default shopReducer;
