import { useState } from "react";
import { createContext  } from "react";


export const AuthContext= createContext({})

function AuthProvider({children}){
    const [dish,setDish]= useState([])
    const [selectedDishs,setSelectedDishs]=useState('')
    const [copyselectedDishs,setCopyseelctedDishs]= useState([...selectedDishs])
    const [count,setcount]=useState(0)

    function HandleDetails(name,description,image,price){
        const newdish={
            name:name,
            description:description,
            image:image,
            price:price,
            qtd:1
            
        }
        setDish(newdish)
        
        
    }

        
    function HandleClickAddQtd(id,name,price,image){
       setcount(count+1)
        const item= copyselectedDishs.find(product=>product.id===id)
       
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

    console.log(selectedDishs)

    function HandleAddDishs(name,description,image,price,qtd){
        
        if(qtd===0){
            alert('Selecione a quantidade de itens')
            return
        }
       
        alert(`${name} incluído no carrinho!`)
    }
   

    function HandleDeleteDishs(id){
        selectedDishs.splice((item=> item.id === id),1)
        
        setSelectedDishs(prev=>[...prev])
    }
    
    return(
        <AuthContext.Provider value={{dish,count,setcount,selectedDishs,setSelectedDishs,setDish,HandleDetails,HandleAddDishs,HandleDeleteDishs,HandleClickAddQtd}}>
            {children}
        </AuthContext.Provider>
    )
}





export {AuthProvider}