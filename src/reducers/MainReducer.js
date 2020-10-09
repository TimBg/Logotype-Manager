let _ = require('lodash');

export class Logotype {
    constructor(colorOrFont, typeOrFontColor, isFont, num, numOfLogo, textOrEmpty) {
        this.colorOrFont = colorOrFont;
        this.typeOrFontColor = typeOrFontColor;
        this.isFont = isFont;
        this.num = num;
        this.numOfLogo = numOfLogo;
        this.textOrEmpty = textOrEmpty;
    }
}

let initialState = {
    Logotypes: [
        new Logotype('black', 'square', false, 1, 0, 'Name Of Company'),
        new Logotype('Georgia', 'magenta', true, 1, 1, 'Name Of Company'),
        new Logotype('white', 'circle', false, 2, 2, 'Name Of Company'),
        new Logotype('Lucida Sans Unicode', 'red', true, 2, 3, 'Name Of Company'),
        new Logotype('yellow', 'triangle', false, 3, 4, 'Name Of Company'),
        new Logotype('Arial', 'green', true, 3, 5, 'Name Of Company'),
        new Logotype('magenta', 'square', false, 1, 6, 'Name Of Company'),
        new Logotype('Arial', 'grey', true, 1, 7, 'Name Of Company'),
        new Logotype('brown', 'circle', false, 2, 8, 'Name Of Company'),
        new Logotype('Georgia', 'green', true, 2, 9, 'Name Of Company'),
        new Logotype('grey', 'triangle', false, 3, 10, 'Name Of Company'),
        new Logotype('Lucida Sans Unicode', 'black', true, 3, 11, 'Name Of Company')
    ],
    Cookies: [
        new Logotype('black', 'square', false, 1, 0, 'Name Of Company'),
        new Logotype('Georgia', 'magenta', true, 1, 1, 'Name Of Company'),
        new Logotype('white', 'circle', false, 2, 2, 'Name Of Company'),
        new Logotype('Lucida Sans Unicode', 'red', true, 2, 3, 'Name Of Company'),
        new Logotype('yellow', 'triangle', false, 3, 4, 'Name Of Company'),
        new Logotype('Arial', 'green', true, 3, 5, 'Name Of Company'),
        new Logotype('magenta', 'square', false, 1, 6, 'Name Of Company'),
        new Logotype('Arial', 'grey', true, 1, 7, 'Name Of Company'),
        new Logotype('brown', 'circle', false, 2, 8, 'Name Of Company'),
        new Logotype('Georgia', 'green', true, 2, 9, 'Name Of Company'),
        new Logotype('grey', 'triangle', false, 3, 10, 'Name Of Company'),
        new Logotype('Lucida Sans Unicode', 'black', true, 3, 11, 'Name Of Company'),
    ]
};

let MainReducer = (state = initialState, action) => {
    let stateCopy;

    switch (action.type) {
        case 'SAVE_LOGO':
            {
                debugger;
                let newState = _.cloneDeep(state);
                newState.Cookies[action.data.numOfLogo] = action.data;
                stateCopy = newState;
            }; return stateCopy;
        case 'SET_LOGO':
            {
                debugger;
                let newState = _.cloneDeep(state);
                debugger;
                console.log(newState.Cookies);
                newState.Logotypes[action.numOfPage - 2] = newState.Cookies[action.numOfPage - 2];
                newState.Logotypes[action.numOfPage - 1] = newState.Cookies[action.numOfPage - 1];
                console.log(newState.Logotypes);
                stateCopy = newState;
            }; return stateCopy;
        default:
            break;
    }
    return state;
}

export default MainReducer;