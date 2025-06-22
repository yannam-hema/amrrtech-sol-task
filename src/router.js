import {createBrowserRouter} from 'react-router-dom';
import ItemPage from '../src/Components/ItemPage';
import ViewItem from './Components/ViewItem';
const router= createBrowserRouter([
    {
        path:'/',
        element:<ItemPage/>
    },
    {
        path:'/viewpage',
        element:<ViewItem/>
    }
])

export default router;