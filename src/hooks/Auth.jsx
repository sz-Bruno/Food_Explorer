import { useState } from "react";
import { createContext  } from "react";



export const AuthContext= createContext({})

function AuthProvider({children}){
    const [dish,setDish]= useState([])
    const [selectedDishs,setSelectedDishs]=useState([])
    const [count,setcount]=useState(0)
    
   

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
        const item= selectedDishs.find(product=>product.name===name)
       
         if(!item){
            selectedDishs.push({
                id:id,
                name:name,
                price:price,
                image:image,
                qtd:1,
              
            })
            
         }else{
            item.qtd=item.qtd+1
         }

         setSelectedDishs(selectedDishs)
         
       
    }
    
    function HandleReduce(name,qtd){
        
        setcount(count-1)
        if(count<1){
            setcount(0)
        }
        const item= selectedDishs.find(product=>product.name===name)
        if(!item){
            alert('Selecione uma quantidade do produto')
            return
        }
        if(item.qtd>1){
            item.qtd=item.qtd-1
            
        }else{
            const newselected= selectedDishs.filter((item=>item.name!==name))
            setSelectedDishs(newselected)
            
         
        }
      
        
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
        <AuthContext.Provider value={{dish,count,setcount,selectedDishs,setSelectedDishs,setDish,HandleDetails,HandleAddDishs,HandleDeleteDishs,HandleClickAddQtd,HandleReduce}}>
            {children}
        </AuthContext.Provider>
    )
}





export {AuthProvider}