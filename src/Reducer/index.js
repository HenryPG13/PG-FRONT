
const initialState = {
  zapas: [],
  allZapas: [],
  detail: {},
  cart: JSON.parse(localStorage.getItem('carrito')) || [],
  favorite: [],
  users: [],
  user: {},
  userLog: {},
  reviews: [],
  orders: [],
  order: {},
  ofertas: [],
  reviews: [],
}

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ZAPAS":
      return {
        ...state,
        zapas: action.payload,
        allZapas: action.payload,
      };

    case "GET_MODELO_ZAPAS":
      return {
        ...state,
        zapas: action.payload,
      };
    case "GET_ZAPA_BY_ID":
      return {
        ...state,
        detail: action.payload,
      };

    case "GET_FILTERS":
      return {
        ...state,
        zapas: action.payload,
      };

    case "POST_PRODUCT":
      return {
        ...state,
      };

    case "ADD_TO_CART":
      const item = state.cart.find((item) =>
        item._id === action.payload._id ? true : false
      );

      return {
        ...state,
        cart: item
          ? state.cart.map((item) =>
            item._id === action.payload._id
              ? { ...item, qty: item.qty + 1 }
              : item
          )
          : [...state.cart, { ...action.payload, qty: 1 }],
      };

    case "REMOVE_TO_CART":
      return {
        ...state,
        cart: state.cart.filter((e) => e._id !== action.payload),
      };

    case "CLEAR_CART":
      return {
        cart: []
      };
    case "ADD_TO_FAV":
      const item2 = state.favorite.find((item) =>
        item._id === action.payload._id ? true : false
      );

      return {
        ...state,
        favorite: item2
          ? state.favorite.map((item) =>
            item._id === action.payload._id
              ? { ...item, qty: item.qty + 1 }
              : item
          )
          : [...state.favorite, { ...action.payload, qty: 1 }],
      };

    case "REMOVE_TO_FAV":
      return {
        ...state,
        favorite: state.favorite.filter((e) => e._id !== action.payload),
      };

    case "POST_PRODUCT":
      return {
        ...state,
        detail: action.payload,
      };

    case "CREATE_USER":
      return {
        ...state,
        user: action.payload
      };
    case "GET_USER":
      return {
        ...state,
        users: action.payload,
      };
    case "LOG_USER":
      return {
        ...state,
        userLog: { userInfo: action.payload },
        user: action.payload
      };
    case "ERR_LOGEO":
      return {
        ...state,
        userLog: { error: action.payload },
      };
    case "UPDATE_USER":
      return {
        ...state,
      };
    case "UPDATE_PRODUCT":
      return {
        ...state,
      };
    case "GET_REVIEWS":
      return {
        ...state,
        reviews: action.payload,
      };
    case "GET_ORDERS":
      return {
        ...state,
        orders: action.payload,
      };
    case "ADD_ORDER":
      return {
        ...state,
        // order: action.payload,
        orders: [...state.orders, action.payload],
      };
    case "UPDATE_ORDER":
      return {
        ...state,
      };
    case "GET_SINGLE_ORDER":
      return {
        ...state,
        order: action.payload,
      };
    case "SINGLE_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "UPDATE_USER":
      return {
        ...state,
      };

    case "GET_OFERTAS_ZAPAS":
      const ofertasZapas = action.payload;
      return {
        ...state,
        ofertas: ofertasZapas,
      };

    case "GET_ALL_REVIEWS":
      return {
        ...state,
        reviews: action.payload
      };
    case "ADD_REVIEWS":
      return {
        ...state
      };
    case 'ADD_FAVORITES':
      return {
        ...state,
      };
    case 'REMOVE_FAVORITES':
      return {
        ...state
      };
    case "REMOVE_REVIEW":
      return {
        ...state
      };

    default:
      return state;
  }
};

export default rootReducer;