import {Routes,Route} from 'react-router-dom'
import { AdminOrderStatus } from '../pages/AdminOrderStatus'
import {DishDetails} from '../pages/DishDetails'
import {EditOrder} from '../pages/EditOrder'
import { Edit } from '../pages/Edit'
import {Home} from '../pages/Home'
import {OrderStatus} from '../pages/OrderStatus'
import {PaymentArea} from '../pages/PaymentArea'

export function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/edit' element={<EditOrder/>}/>
            <Route path='/edit2' element={<Edit/>}/>
            <Route path='/details' element={<DishDetails/>}/>
            <Route path='/status' element={<OrderStatus/>}/>
            <Route path='/admstatus' element={<AdminOrderStatus/>}/>
            <Route path='/payment' element={<PaymentArea/>}/>
        </Routes>
    )
}