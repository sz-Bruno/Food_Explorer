import { useState } from "react";
import { createContext  } from "react";
import { api } from "../services/api";



export const AuthContext= createContext({})

function AuthProvider({children}){
    const [dish,setDish]= useState([])
    const [selectedDishs,setSelectedDishs]=useState([])
    const [count,setcount]=useState(0)
    
   async function updateDish({dish_created,id,avatar}){
    const fileuploadform= new FormData()
    fileuploadform.append('avatar',avatar)

    const response= await api.patch(`/principals/${id}`,fileuploadform)
    dish_created.avatar= response.data.avatar
    console.log(response)
   }

    function HandleDetails(id,name,description,image,price,qtd){
        const newdish={
            id:id,
            name:name,
            description:description,
            image:image,
            price:price,
            qtd:qtd
            
        }
        setDish([newdish])
        
        
    }

    function HandleClickAddDetails(id,name,price,image,qtd,array){
       const product= array.find(item=>item.name===name)
      setcount(count+1)
       product.qtd= product.qtd+1
       
        
        const item= selectedDishs.find(product=>product.name===name)
       
         if(!item){
            selectedDishs.push({
                id:id,
                name:name,
                price:price,
                image:image,
                qtd:qtd+1,
              
            })
            
         }else{
            item.qtd=item.qtd+1
         }

         setSelectedDishs(selectedDishs)
         
       
    }    
    function HandleClickAddQtd(id,name,price,image,qtd,array){
        
        const card= array.find(item=>item.name===name)
        setcount(count+1)
        card.qtd=card.qtd+1
        
        const item= selectedDishs.find(product=>product.name===name)
       
         if(!item){
            selectedDishs.push({
                id:id,
                name:name,
                price:price,
                image:image,
                qtd:qtd+1,
              
            })
            
         }else{
            item.qtd=item.qtd+1
         }

         setSelectedDishs(selectedDishs)
         
       
    }
    
    function HandleReduce(name,qtd,array){
       
        const card= array.find(item=>item.name===name)
            setcount(count-1)
            card.qtd=card.qtd-1

        if(card.qtd<1){
           setcount(0)
             card.qtd=0
        }
        const item= selectedDishs.find(product=>product.name===name)
            
            item.qtd=item.qtd-1
            
        
        if(item.qtd<1){
            
           
            const newselected= selectedDishs.filter(item=>item.name!==name)
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
        <AuthContext.Provider value={{dish,count,setcount,selectedDishs,setSelectedDishs,setDish,HandleDetails,HandleAddDishs,HandleDeleteDishs,HandleClickAddQtd,HandleReduce,HandleClickAddDetails,updateDish}}>
            {children}
        </AuthContext.Provider>
    )
}





export {AuthProvider}