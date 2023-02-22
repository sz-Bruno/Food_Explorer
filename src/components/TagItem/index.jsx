import {TagWrapper} from "./style"
import {FiPlus,FiX} from 'react-icons/fi'

export function TagItem({isNew, value,onClick,...rest}){
    return(
        <TagWrapper isNew={isNew}>
          <input type="text"
           value={value} 
           readOnly={!isNew} 
           {...rest} />
          <button 
          type="button"
          onClick={onClick}>
           {isNew? <FiPlus/>: <FiX/>}
          </button>
        </TagWrapper>
    )
}