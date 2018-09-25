// import * as State from './index';
// class Store{
//     constructor(state){
//         this.state = Object.assign({}, state);
// this.listeners = [];
//     }

// dispatch(reducer){
//     this.state = reducer(this.state);
//     this.listeners.forEach(listener) => listener()); //need to get rid of your renders below
// }

//     getState(){
//         return this.state;
//     }

// addListeners(listener){
//     this.listeners.push(listener);
// }

// export default new Store(State);