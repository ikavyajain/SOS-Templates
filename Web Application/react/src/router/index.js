import React from 'react'


//router
import { Switch,Route } from 'react-router'
//layoutpages
// import Index from '../views/index'
import Default from '../layouts/dashboard/default'
import Simple from '../layouts/dashboard/simple'

const IndexRouters = () => {
    return (
        <>
            <Switch>
                {/* <Route exact path="/" component={Index}></Route> */}
                
               
                <Route  path="/auth" component={Simple}></Route>
                <Route  path="/errors" component={Simple}></Route>
                <Route  path="/" component={Default}></Route>
            </Switch>
        </>
    )
}

export default IndexRouters
