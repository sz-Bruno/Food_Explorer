import { SectionWrapper } from "./style"

export function Section({title,children,total,...rest}){
    return(
        <SectionWrapper {...rest}>
            <h1>{title}</h1>
            {children}
           {total && <h3>Total: {total}</h3>}
        </SectionWrapper>
    )
}