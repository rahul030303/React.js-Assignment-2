import React,{Component,Suspense,lazy} from 'react';

import FetchData from './fetchData';


// const FetchData = lazy(()=>import('./fetchData'));
// const Dashboard = React.lazy(()=>import('./dashboard'));

 function LazyRender(){
    return(
        <div> 
        <FetchData/>
        </div>
    )
}

export default  LazyRender;

