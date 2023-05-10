import {Routes,Route} from 'react-router-dom'
import {DishDetails} from '../pages/DishDetails'
import {Create} from '../pages/Create'
import { Edit } from '../pages/Edit'
import {Home} from '../pages/Home'
import {PaymentArea} from '../pages/PaymentArea'

export function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/create' element={<Create/>}/>
            <Route path='/edit' element={<Edit/>}/>
            <Route path='/details' element={<DishDetails/>}/>
            <Route path='/payment' element={<PaymentArea/>}/>
        </Routes>
    )
}