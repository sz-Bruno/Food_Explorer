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
export function EditOrder(){

    const [tag,setTag]=useState([])
    const [newtag,setNewTag]= useState('')
    const HandleTag=()=>{
        setTag(prev=>[...prev,newtag])
        setNewTag('')
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
                                          <input type="file" name="" id="upload" />
                                             Selecione imagem
                                       </label>
                                   </Upload>
                                </div>
                                <Input title='Nome' placeholder='Ex.:Salada Caesar' />
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
                                <Input title='preço'/>
                                </div>
                          </Ingredients_Price>
                      
                           <InfoArea>
                                <p>Descrição</p>
                                <Description />
                            </InfoArea>
                        </Form>
                        <Button >
                            <h1>Adicionar pedido</h1>
                        </Button>
                   </Section>
               </Content>
             <Footer/>
        </EditWrapper>

    )
}