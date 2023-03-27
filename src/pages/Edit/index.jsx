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
import { useContext } from "react"
import { AuthContext } from "../../hooks/Auth"
export function Edit(){
    const {updateDish,dish_id,array_dish}= useContext(AuthContext)
    
    const [ingredients,setIngredient]=useState([])
    const [newingredient,setNewIngredient]= useState('')
    const [title,setTitle]=useState('')
    const [price,setPrice]=useState('')
    const [description,setDescription]=useState('')
    const [avatarfile,setAvatarFile]=useState('')
    const qtd=0
   
    const Url="http://localhost:3000/files/"

    const  HandleIngredient= async()=>{
        setIngredient(prev=>[...prev,newingredient])
        setNewIngredient('')
    }
       
            const HandleNewDish= async ()=>{
                if(!title|| !price||!description|| !avatarfile){
                    alert('Preencha todos os campos!')
                    return
                }
               
                try {
                  
                const dish=
                {
                    title,
                    price,
                    description,
                    qtd,
                    ingredients
                }
               
             await api.put(`/dishes/${dish_id}`,dish).then(HandleSendPicture(dish_id))

              async function HandleSendPicture(i){
                const formData= new FormData()
                formData.append("avatar",avatarfile)
        
                  await api.patch(`/dishes/${i}`,formData)
                      
                }
                
                alert(`Prato ${title} editado com sucesso`)
                
            }
        
              catch (error) {
                if(error.response){
                    alert(error.response.data.message)
                }else{
                     alert(`Não foi possível editar o produto`)
                }
                   
                }       
            
        } 
      
    
    return(
        <EditWrapper>
             <Header/>
               <Content>
                   <Buttonback/>
                   <Section title='Editar prato'>
                     <Form >
                            <ImageArea>
                                <div>
                                  <p>Nova imagem do prato</p>
                         
                                   <Upload>
                                       <label htmlFor="upload">
                                             <FiUpload/>
                                          <input type="file" name="" id="upload" onChange={(e)=>setAvatarFile(e.target.files[0])}/>
                                             Selecione imagem
                                       </label>
                                   </Upload>
                                </div>
                                <Input title='Novo nome' placeholder='Ex.:Salada Caesar' onChange={(e)=>setTitle(e.target.value)}/>
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
                                <Input title='Novo preço' onChange={e=>setPrice(e.target.value)}/>
                                </div>
                          </Ingredients_Price>
                      
                           <InfoArea>
                                <p>Nova descrição</p>
                                <Description onChange={e=>setDescription(e.target.value)} />
                            </InfoArea>
                            
                           
                            
                        </Form>
                        <Button onClick={HandleNewDish} >
                            <h1>Confirmar edição</h1>
                        </Button>
                   </Section>
               </Content>
             <Footer/>
        </EditWrapper>

    )
}