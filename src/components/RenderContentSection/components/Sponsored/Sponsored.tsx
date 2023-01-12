import { useContext } from "react";
import { UserContext } from "../../../../providers/User";
import { iResponseDonates } from "../../../../services/getDonates";
import { AthleteCard } from "../../../AthleteCard";
import { StyledSponsored } from "./style";


interface iSponsoredProps {
  donatesList: iResponseDonates[] | undefined;
}

export const Sponsored = ({ donatesList }: iSponsoredProps) => {
  const { athletes, user } = useContext(UserContext);

  return (
    <StyledSponsored>
      {donatesList
        ?.filter((donates) => Number(donates.userId) === user?.id)
        .map((donate) => (
          <AthleteCard
            key={donate.id}
            athlete_id={donate.athleteId}
            name={
              athletes &&
              athletes.find((athlete) => athlete.id === donate.athleteId)
                ?.nickname
            }
            value={Number(donate.amount)}
            img={
              athletes &&
              athletes.find((athlete) => athlete.id === donate.athleteId)
                ?.imgUrl
            }
            isUserDash={true}
            age={
              athletes &&
              athletes.find((athlete) => athlete.id === donate.athleteId)?.age
            }
          />
        ))
        .reverse()}
    </StyledSponsored>
  );
};
