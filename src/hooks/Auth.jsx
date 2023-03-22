import { useState } from "react";
import { createContext  } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";



export const AuthContext= createContext({})

function AuthProvider({children}){
    const [dish,setDish]= useState([])
    const [selectedDishs,setSelectedDishs]=useState([])
    const [count,setcount]=useState(0)
    const [dish_id,setDish_id]= useState('')
    const [array_dish, setArray_dish]=useState('')
    const [ingredients, setIngredients]= useState([])
   async function updateDish({dish_created,id,avatar}){
    const fileuploadform= new FormData()
    fileuploadform.append('avatar',avatar)

    const response= await api.patch(`/principals/${id}`,fileuploadform)
    dish_created.avatar= response.data.avatar
    console.log(response)
   }

     async function HandleDetails(id){
         const dish= await api.get(`/Dishes/${id}`)
         const url="http://localhost:3000/files/"
          const newdish={ 
            id:dish.data.id,
            avatar:`${url}${dish.data.avatar}`,
            title:dish.data.title,
            description:dish.data.description,
            price:dish.data.price,
            qtd:dish.data.qtd,}
       setDish([newdish])
        setIngredients(dish.data.ingredients)
        
        
    }

    function HandleClickAddDetails(id,title,price,image,qtd,array){
       const product= array.find(item=>item.title===title)
      setcount(count+1)
       product.qtd= product.qtd+1
       
        
        const item= selectedDishs.find(product=>product.title===title)
       
         if(!item){
            selectedDishs.push({
                id:id,
                title:title,
                price:price,
                image:image,
                qtd:qtd+1,
              
            })
            
         }else{
            item.qtd=item.qtd+1
         }

         setSelectedDishs(selectedDishs)
         
       
    }    
    function HandleClickAddQtd(id,title,price,image,qtd,array){
        
        const card= array.find(item=>item.title===title)
        setcount(count+1)
        card.qtd=card.qtd+1
        
        const item= selectedDishs.find(product=>product.title===title)
       
         if(!item){
            selectedDishs.push({
                id:id,
                title:title,
                price:price,
                image:image,
                qtd:qtd+1,
              
            })
            
         }else{
            item.qtd=item.qtd+1
         }

         setSelectedDishs(selectedDishs)
         
       
    }
    
    function HandleReduce(title,qtd,array){
       
        const card= array.find(item=>item.title===title)
            setcount(count-1)
            card.qtd=card.qtd-1

        if(card.qtd<1){
           setcount(0)
             card.qtd=0
        }
        const item= selectedDishs.find(product=>product.title===title)
            
            item.qtd=item.qtd-1
            
        
        if(item.qtd<1){
            
           
            const newselected= selectedDishs.filter(item=>item.title!==title)
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
   

    function HandleDeleteDishs(title){
        const new_options=selectedDishs.filter(item=> item.title !== title)
        
        setSelectedDishs(new_options)
    }
    
     
       
       
       

    
    
    return(
        <AuthContext.Provider value={{dish,ingredients,setIngredients,count,setcount,dish_id,setDish_id,array_dish, setArray_dish,selectedDishs,setSelectedDishs,setDish,HandleDetails,HandleAddDishs,HandleDeleteDishs,HandleClickAddQtd,HandleReduce,HandleClickAddDetails,updateDish}}>
            {children}
        </AuthContext.Provider>
    )
}





export {AuthProvider}