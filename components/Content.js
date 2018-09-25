import * as Pages from './Pages';

export default function Content(state){
    const page = state[state.active];
    
    return `
        <div id="content> 
            <div class="container">
                ${Pages[page.body](state.posts)}
            </div>
        </div>
    `;
}


// blog(state) - pass in state.map / state.join (state.posts then pass in state)
// takig in pages object then pulling out an individual state of that