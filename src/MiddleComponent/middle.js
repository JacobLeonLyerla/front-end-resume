import React from 'react';
import Header from './MiddleHeader'
// stateless component because nothing is set on the state.
const MiddlePanel = () =>{
    return(
        // just returns the header component, i really could have written the header stuff here, but i wanted a clean example of a component rendering another.

        <Header/>
    )
}
export default MiddlePanel;