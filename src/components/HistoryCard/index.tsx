import { useContext } from "react";
import { BiWindowOpen } from "react-icons/bi";
import { UserContext } from "../../providers/User";
import { StyledHistoryCard } from "./style"

interface iHistoriCardProps {
    img?: string,
    name: string,
    value: number,
    id: string,
}

export const HistoryCard = ({img, name, value, id}: iHistoriCardProps) => {
    
    const { gotoAthletePage } = useContext(UserContext);
      
    return (
        <StyledHistoryCard id={id} onClick={gotoAthletePage}>
            <div>
                <img src={img} alt="" />
                <span className="span-name">{name}</span>
            </div>
            <BiWindowOpen id={id} className="togo-icon icon" onClick={gotoAthletePage} />            
            <span> R$ {value}</span>
        </StyledHistoryCard>
    )
}