import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Section } from "../../components/Section"
import {EditWrapper,Content,Upload,ImageArea,Ingredients_Price,InfoArea,Description,Form,Button} from "./style"
import { InputSection } from "../../components/InputSection"
import { TagItem } from "../../components/TagItem"
import { Input } from "../../components/Input"
import { Buttonback } from "../../components/ButtonBack"
import {FiUpload} from 'react-icons/fi'
import { useState } from "react"
import { api } from "../../services/api"

export function Create(){
    
    const [ingredients,setIngredient]=useState([])
    const [newingredient,setNewIngredient]= useState('')
    const [title,setTitle]=useState('')
    const [price,setPrice]=useState('')
    const [description,setDescription]=useState('')
    const [avatarfile,setAvatarFile]=useState('')
    const [category,setCategory]=useState('')
    const qtd=0
   
    

    const  HandleIngredient= async()=>{
        setIngredient(prev=>[...prev,newingredient])
        setNewIngredient('')
    }
       
            const HandleNewDish= async ()=>{
            try {
                if(!title|| !price||!description|| !avatarfile){
                    alert('Preencha todos os campos!')
                    return
                }
                const dish=
                {
                    title,
                    price,
                    description,
                    qtd,
                    category,
                    ingredients
                    
                }
             await api.post(`/dishes`,dish).then(response=>HandleSendPicture(response.data))

              async function HandleSendPicture(i){
                const formData= new FormData()
                formData.append("avatar",avatarfile)
        
                  await api.patch(`/dishes/${i}`,formData)
        
                }
                alert(`Prato ${title} adicionado ao cardápio`)
            }
        
              catch (error) {
                if(error.response){
                    alert(error.response.data.message)
                }else{
                     alert(`Não foi possível adicionar o produto ao cardápio`)
                }
                   
                }       
            
        } 
      
    
    return(
        <EditWrapper>
             <Header/>
               <Content>
                   <Buttonback/>
                   <Section title='Cardápio'>
                     <Form >
                            <ImageArea>
                                <div>
                                  <p>Imagem do prato</p>
                         
                                   <Upload>
                                       <label htmlFor="upload">
                                             <FiUpload/>
                                          <input type="file" name="" id="upload" onChange={(e)=>setAvatarFile(e.target.files[0])}/>
                                             Selecione imagem
                                       </label>
                                   </Upload>
                                </div>
                                <Input title='Nome' placeholder='Ex.:Salada Caesar' onChange={(e)=>setTitle(e.target.value)}/>
                            </ImageArea>
                    
                           <Ingredients_Price>
                                <InfoArea>
                                    <p>Ingredientes</p>
                                    <InputSection>
                                        
                                        <TagItem 
                                        isNew 
                                        placeholder='adicionar'
                                        onChange={e=>setNewIngredient(e.target.value)}
                                        value={newingredient}
                                        onClick={HandleIngredient}
                                        />
                                        
                                        {
                                           ingredients.map((item,id)=>(
                                            <TagItem
                                            key={id}
                                            value={item}/>
                                           ))
                                        }
                                    </InputSection>
                                </InfoArea>
                                <div>
                                <Input title='preço' onChange={e=>setPrice(e.target.value)}/>
                                </div>
                          </Ingredients_Price>
                      
                           <InfoArea>
                                <p>Descrição</p>
                                <Description onChange={e=>setDescription(e.target.value)} />
                            </InfoArea>
                            <div className="option_field">
                                <p>Selecione o Cardápio</p>
                            <select className="select_field" onChange={(e)=>setCategory(e.target.value)} name="options_dish" id="options_dish">
                                 <option value=""></option>
                                <option value="principals"> Pratos Principais</option>
                                <option value="drinks">Bebidas</option>
                                <option value="desserts">Sobremesas</option>
                           </select>
                            </div>
                            
                        </Form>
                        <Button onClick={HandleNewDish} >
                            <h1>Adicionar</h1>
                        </Button>
                   </Section>
               </Content>
             <Footer/>
        </EditWrapper>

    )
}