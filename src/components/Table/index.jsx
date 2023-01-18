import {TableWrapper} from "./style"


export function Table({children}){
    return(
        <TableWrapper>
             <thead>
                      <tr>
                          <th>Status</th>
                          <th>Código</th>
                          <th>Detalhamento</th>
                          <th>Pedido</th>
                      </tr>
                </thead>
                <tbody>{children}</tbody>

        </TableWrapper>
    )
}