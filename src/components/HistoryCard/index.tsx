import { StyledHistoryCard } from "./style"

interface iHistoriCardProps {
    img?: string,
    name: string,
    value: number,
}


export const HistoryCard = ({img, name, value}: iHistoriCardProps) => {
    return (
        <StyledHistoryCard>
            <div>
                <img src={img} alt="" />
                <span>{name}</span>
            </div>            
            <span> R$ {value}</span>
        </StyledHistoryCard>
    )
}