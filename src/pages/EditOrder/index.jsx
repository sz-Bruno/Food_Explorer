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
    const [avatarfile,setAvatarFile]=useState('')
    const [field,setField]=useState('')
    const qtd=0
   
    const Url="http://localhost:3000/files/"

    const  HandleTag= async()=>{
        setTag(prev=>[...prev,newtag])
        setNewTag('')
    }
       
            const HandleNewDish= async ()=>{
            try {
                if(!name|| !price||!description|| !avatarfile){
                    alert('Preencha todos os campos!')
                    return
                }
                const dish=
                {
                    name,
                    price,
                    description,
                    qtd
                }
             await api.post(`/${field}`,dish).then(response=>HandleSendPicture(response.data))

              async function HandleSendPicture(i){
                const formData= new FormData()
                formData.append("avatar",avatarfile)
        
                  await api.patch(`/${field}/${i}`,formData)
        
                }
                alert(`Prato ${name} adicionado ao cardápio`)
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
                            <div className="option_field">
                                <p>Selecione o Cardápio</p>
                            <select className="select_field" onChange={(e)=>setField(e.target.value)} name="options_dish" id="options_dish">
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