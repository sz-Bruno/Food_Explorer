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
export function EditOrder(){
   const {updateDish}= useContext(AuthContext)
    const [tag,setTag]=useState([])
    const [newtag,setNewTag]= useState('')
    const [name,setName]=useState('')
    const [price,setPrice]=useState('')
    const [description,setDescription]=useState('')
    const [avatar,setAvatar]=useState('')
    const qtd=0
    const [avatarfile,setAvatarFile]=useState('')
    const [id,setId]=useState('')
    const Url="http://localhost:3000/files/"

    const  HandleTag= async()=>{
        setTag(prev=>[...prev,newtag])
        setNewTag('')
    }
    const HandleNewDish= async ()=>{
        
         await api.post('/principals',{
           
            name,
            price,
            description,
            qtd}
            
            
        ).then(response=>setId(response.data))

        const formData= new FormData()
        formData.append("avatar",avatar)

         await api.patch(`/principals/${id+1}`,formData)

        
        
    }
    const HandlePicture=(e)=>{
        const file= e.target.files[0]
        
      setAvatarFile(file)
      
      const imagePreview= URL.createObjectURL(file)
      setAvatar(imagePreview)
      
    

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
                                  <p>Imagem do prato</p>
                         
                                   <Upload>
                                       <label htmlFor="upload">
                                             <FiUpload/>
                                          <input type="file" name="" id="upload" onChange={HandlePicture}/>
                                             Selecione imagem
                                       </label>
                                   </Upload>
                                </div>
                                <Input title='Nome' placeholder='Ex.:Salada Caesar' onChange={(e)=>setName(e.target.value)}/>
                            </ImageArea>
                    
                           <Ingredients_Price>
                                <InfoArea>
                                    <p>Ingredientes</p>
                                    <InputSection>
                                        
                                        <TagItem 
                                        isNew 
                                        placeholder='adicionar'
                                        onChange={e=>setNewTag(e.target.value)}
                                        value={newtag}
                                        onClick={HandleTag}
                                        />
                                        
                                        {
                                           tag.map((item,id)=>(
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
                        </Form>
                        <Button onClick={HandleNewDish} >
                            <h1>Adicionar pedido</h1>
                        </Button>
                   </Section>
               </Content>
             <Footer/>
        </EditWrapper>

    )
}