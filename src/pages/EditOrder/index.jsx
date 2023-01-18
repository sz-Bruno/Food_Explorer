import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Section } from "../../components/Section"
import {EditWrapper,Content,Button,Upload,ImageArea,Ingredients_Price,TagArea,Description} from "./style"
import { InputSection } from "../../components/InputSection"
import { TagItem } from "../../components/TagItem"
import { Input } from "../../components/Input"
import Left from "../../assets/images/back_button.svg"
import {FiUpload} from 'react-icons/fi'
export function EditOrder(){
    return(
        <EditWrapper>
           <Header/>
               <Content>
                   <Button>
                      <img src={Left} alt="voltar" />
                      <h1>voltar</h1>
                   </Button>
                   <Section title='Editar prato'>
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
                       <Input title='Nome' placeholder='Ex.:Salada Caesar'/>
                    </ImageArea>
                    
                    <Ingredients_Price>
                    <TagArea>
                       <p>Ingredientes</p>
                         <InputSection>
                         <TagItem isNew placeholder='adicionar'/>
                         <TagItem/>
                         <TagItem/>
                         </InputSection>
                    </TagArea>
                        <div>
                         <Input title='preço'/>
                        </div>
                    </Ingredients_Price>
                      
                        <TagArea>
                            <p>Descrição</p>
                            <Description/>

                            
                        </TagArea>
                   </Section>
               </Content>
           <Footer/>
        </EditWrapper>

    )
}