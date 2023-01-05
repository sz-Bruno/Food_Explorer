import { SectionWrapper } from "./style"

export function Section({title,children,...rest}){
    return(
        <SectionWrapper {...rest}>
            <h1>{title}</h1>
            {children}

        </SectionWrapper>
    )
}