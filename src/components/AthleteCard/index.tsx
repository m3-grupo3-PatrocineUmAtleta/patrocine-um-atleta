import { StyledAthleteCard } from "./style"


interface iCardProps {
    athlete_id: string,
    img: string | undefined;
    name: string,
    age: number,
    city: string,
}

export const AthleteCard = ({athlete_id, img, name, age, city}: iCardProps) => {
      
    return (

        <StyledAthleteCard id={athlete_id}>
            <div className="div-img" >
                <img src={img} alt="" />
            </div>
            <div className="div-inf" >
                <h3 className="title-3">{name}, {age} anos.</h3>
                <div className="div-local">
                    <span className="headline">{city}</span>
                </div>
            </div>
        </StyledAthleteCard>
    )
}