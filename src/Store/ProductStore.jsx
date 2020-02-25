import React, {createContext, useReducer} from 'react';

const products = [
    {
        id: 1,
        alt: "Strawberries",
        src: "/ShopProducts/strawberries-528791_1920.jpg",
        hoverSrc: "/ShopProducts/appetite-1238257_1920.jpg",
        name: "Strawberries",
        slug: "strawberries",
        price: 10,
        quantity: 0,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt praesent semper feugiat nibh sed pulvinar. At in tellus integer feugiat scelerisque. Aliquam id diam maecenas ultricies mi eget mauris pharetra. Magna fringilla urna porttitor rhoncus dolor purus non enim. Scelerisque purus semper eget duis at tellus at urna. A pellentesque sit amet porttitor eget dolor. Enim blandit volutpat maecenas volutpat. Turpis massa sed elementum tempus egestas sed sed risus pretium. Enim praesent elementum facilisis leo vel fringilla est. Enim tortor at auctor urna nunc id cursus. Odio tempor orci dapibus ultrices in iaculis nunc sed augue. Vitae congue mauris rhoncus aenean vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget."
    },
    {
        id: 2,
        alt: "Avocadoes",
        src: "/ShopProducts/appetite-1238257_1920.jpg",
        name: "Avocadoes",
        hoverSrc: "/ShopProducts/lychee-520481_1920.jpg",
        slug: "kiwi",
        price: 10,
        quantity: 0,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt praesent semper feugiat nibh sed pulvinar. At in tellus integer feugiat scelerisque. Aliquam id diam maecenas ultricies mi eget mauris pharetra. Magna fringilla urna porttitor rhoncus dolor purus non enim. Scelerisque purus semper eget duis at tellus at urna. A pellentesque sit amet porttitor eget dolor. Enim blandit volutpat maecenas volutpat. Turpis massa sed elementum tempus egestas sed sed risus pretium. Enim praesent elementum facilisis leo vel fringilla est. Enim tortor at auctor urna nunc id cursus. Odio tempor orci dapibus ultrices in iaculis nunc sed augue. Vitae congue mauris rhoncus aenean vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget."
    },
    {
        id: 3,
        alt: "Lychee",
        src: "/ShopProducts/lychee-520481_1920.jpg",
        hoverSrc: "/ShopProducts/berry-1239425_1920.jpg",
        name: "Lychee",
        slug: "lychee",
        price: 10,
        quantity: 0,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt praesent semper feugiat nibh sed pulvinar. At in tellus integer feugiat scelerisque. Aliquam id diam maecenas ultricies mi eget mauris pharetra. Magna fringilla urna porttitor rhoncus dolor purus non enim. Scelerisque purus semper eget duis at tellus at urna. A pellentesque sit amet porttitor eget dolor. Enim blandit volutpat maecenas volutpat. Turpis massa sed elementum tempus egestas sed sed risus pretium. Enim praesent elementum facilisis leo vel fringilla est. Enim tortor at auctor urna nunc id cursus. Odio tempor orci dapibus ultrices in iaculis nunc sed augue. Vitae congue mauris rhoncus aenean vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget."
    },
    {
        id: 4,
        alt: "Grapes",
        src: "/ShopProducts/berry-1239425_1920.jpg",
        hoverSrc: "/ShopProducts/cabbage-1353192_1920.jpg",
        name: "Grapes",
        slug: "grapes",
        price: 10,
        quantity: 0,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt praesent semper feugiat nibh sed pulvinar. At in tellus integer feugiat scelerisque. Aliquam id diam maecenas ultricies mi eget mauris pharetra. Magna fringilla urna porttitor rhoncus dolor purus non enim. Scelerisque purus semper eget duis at tellus at urna. A pellentesque sit amet porttitor eget dolor. Enim blandit volutpat maecenas volutpat. Turpis massa sed elementum tempus egestas sed sed risus pretium. Enim praesent elementum facilisis leo vel fringilla est. Enim tortor at auctor urna nunc id cursus. Odio tempor orci dapibus ultrices in iaculis nunc sed augue. Vitae congue mauris rhoncus aenean vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget."
    },
    {
        id: 5,
        alt: "Cabbage",
        src: "/ShopProducts/cabbage-1353192_1920.jpg",
        hoverSrc: "/ShopProducts/appetite-1238257_1920.jpg",
        name: "Cabbage",
        slug: "cabbage",
        price: 10,
        quantity: 0,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt praesent semper feugiat nibh sed pulvinar. At in tellus integer feugiat scelerisque. Aliquam id diam maecenas ultricies mi eget mauris pharetra. Magna fringilla urna porttitor rhoncus dolor purus non enim. Scelerisque purus semper eget duis at tellus at urna. A pellentesque sit amet porttitor eget dolor. Enim blandit volutpat maecenas volutpat. Turpis massa sed elementum tempus egestas sed sed risus pretium. Enim praesent elementum facilisis leo vel fringilla est. Enim tortor at auctor urna nunc id cursus. Odio tempor orci dapibus ultrices in iaculis nunc sed augue. Vitae congue mauris rhoncus aenean vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget."
    },
    {
        id: 6,
        alt: "Avocadoes",
        src: "/ShopProducts/appetite-1238257_1920.jpg",
        hoverSrc: "/ShopProducts/tomato-498721_1920.jpg",
        name: "Avocadoes",
        slug: "avocadoes",
        price: 10,
        quantity: 0,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt praesent semper feugiat nibh sed pulvinar. At in tellus integer feugiat scelerisque. Aliquam id diam maecenas ultricies mi eget mauris pharetra. Magna fringilla urna porttitor rhoncus dolor purus non enim. Scelerisque purus semper eget duis at tellus at urna. A pellentesque sit amet porttitor eget dolor. Enim blandit volutpat maecenas volutpat. Turpis massa sed elementum tempus egestas sed sed risus pretium. Enim praesent elementum facilisis leo vel fringilla est. Enim tortor at auctor urna nunc id cursus. Odio tempor orci dapibus ultrices in iaculis nunc sed augue. Vitae congue mauris rhoncus aenean vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget."
    },
    {
        id: 7,
        alt: "Tomato",
        src: "/ShopProducts/tomato-498721_1920.jpg",
        hoverSrc: "/ShopProducts/lychee-520481_1920.jpg",
        name: "Tomato",
        slug: "tomato",
        price: 10,
        quantity: 0,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt praesent semper feugiat nibh sed pulvinar. At in tellus integer feugiat scelerisque. Aliquam id diam maecenas ultricies mi eget mauris pharetra. Magna fringilla urna porttitor rhoncus dolor purus non enim. Scelerisque purus semper eget duis at tellus at urna. A pellentesque sit amet porttitor eget dolor. Enim blandit volutpat maecenas volutpat. Turpis massa sed elementum tempus egestas sed sed risus pretium. Enim praesent elementum facilisis leo vel fringilla est. Enim tortor at auctor urna nunc id cursus. Odio tempor orci dapibus ultrices in iaculis nunc sed augue. Vitae congue mauris rhoncus aenean vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget."
    },
    {
        id: 8,
        alt: "Lychee",
        src: "/ShopProducts/lychee-520481_1920.jpg",
        hoverSrc: "/ShopProducts/jalapenos-1320629_1920.jpg",
        name: "Lychee",
        slug: "melon",
        price: 10,
        quantity: 0,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt praesent semper feugiat nibh sed pulvinar. At in tellus integer feugiat scelerisque. Aliquam id diam maecenas ultricies mi eget mauris pharetra. Magna fringilla urna porttitor rhoncus dolor purus non enim. Scelerisque purus semper eget duis at tellus at urna. A pellentesque sit amet porttitor eget dolor. Enim blandit volutpat maecenas volutpat. Turpis massa sed elementum tempus egestas sed sed risus pretium. Enim praesent elementum facilisis leo vel fringilla est. Enim tortor at auctor urna nunc id cursus. Odio tempor orci dapibus ultrices in iaculis nunc sed augue. Vitae congue mauris rhoncus aenean vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget."
    },
    {
        id: 9,
        alt: "Jalapenos",
        src: "/ShopProducts/jalapenos-1320629_1920.jpg",
        hoverSrc: "/ShopProducts/strawberries-528791_1920.jpg",
        name: "Jalapenos",
        slug: "jalapenos",
        price: 10,
        quantity: 0,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt praesent semper feugiat nibh sed pulvinar. At in tellus integer feugiat scelerisque. Aliquam id diam maecenas ultricies mi eget mauris pharetra. Magna fringilla urna porttitor rhoncus dolor purus non enim. Scelerisque purus semper eget duis at tellus at urna. A pellentesque sit amet porttitor eget dolor. Enim blandit volutpat maecenas volutpat. Turpis massa sed elementum tempus egestas sed sed risus pretium. Enim praesent elementum facilisis leo vel fringilla est. Enim tortor at auctor urna nunc id cursus. Odio tempor orci dapibus ultrices in iaculis nunc sed augue. Vitae congue mauris rhoncus aenean vel. Aliquam ultrices sagittis orci a scelerisque purus semper eget."
    }
];
const store = createContext(products);
const { Provider } = store;

let ProductId;
const StateProvider = ( { children } ) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
        case "addProductToCart": {
            return state.map(product => {
                if (product.id === action.id) {
                    return { ...product, quantity: product.quantity + 1 };
                } else {
                    return product;
                }
            });
        }
        case "removeProductFromCart": {
            return state.map(product => {
                if (product.id === action.id) {
                    return { ...product, quantity: 0 }
                } else {
                    return product;
                }
            });
        }
        case "setProductToCart" :{
            return state.map(product => {
                if (product.id === action.id) {
                    return { ...product, quantity: action.quantity };
                } else {
                    return product;
                }
            });
        }
        default: {
            throw new Error(`Unhandled type: ${action.type}`);
        }
    };
  }, products);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }