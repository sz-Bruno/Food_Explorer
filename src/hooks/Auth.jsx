import { useState } from "react";
import { createContext  } from "react";


export const AuthContext= createContext({})

function AuthProvider({children}){
    const [dish,setDish]= useState([])
    const [selectedDishs,setSelectedDishs]=useState([])
    const [copyselectedDishs,setCopyseelctedDishs]= useState([...selectedDishs])
    const [count,setcount]=useState(0)
    const [dish_status,setdish_status]=useState('Pendente')

    function HandleDetails(id,name,description,image,price){
        const newdish={
            id:id,
            name:name,
            description:description,
            image:image,
            price:price,
            qtd:count
            
        }
        setDish(newdish)
        
        
    }

        
    function HandleClickAddQtd(id,name,price,image){
        setcount(count+1)
        const item= copyselectedDishs.find(product=>product.name===name)
       
         if(!item){
            copyselectedDishs.push({
                id:id,
                name:name,
                price:price,
                image:image,
                qtd:1,
              
            })
            
         }else{
            item.qtd=item.qtd+1
         }

         setSelectedDishs(copyselectedDishs)
      
       
    }
    
    function HandleReduce(name,qtd){
        setcount(count-1)
        if(count<1){
            setcount(0)
        }
        const item= copyselectedDishs.find(product=>product.name===name)
        if(!item){
            alert('Selecione uma quantidade do produto')
            return
        }
        if(item.qtd>1){
            item.qtd=item.qtd-1
            
        }else{
            copyselectedDishs.splice((item=>item.name===name),1)
        }
        setSelectedDishs(copyselectedDishs)
        
    }
    console.log(selectedDishs)

    function HandleAddDishs(name,qtd){
        
        if(qtd===0){
            alert('Selecione a quantidade de itens')
            return
        }
       
        alert(`${name} incluído no carrinho!`)
    }
   

    function HandleDeleteDishs(name){
        const new_options=selectedDishs.filter(item=> item.name !== name)
        
        setSelectedDishs(new_options)
    }
    
    return(
        <AuthContext.Provider value={{dish,count,dish_status,setdish_status,setcount,selectedDishs,setSelectedDishs,setDish,HandleDetails,HandleAddDishs,HandleDeleteDishs,HandleClickAddQtd,HandleReduce}}>
            {children}
        </AuthContext.Provider>
    )
}





export {AuthProvider}