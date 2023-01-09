import { iDeposition } from "../../../providers/User/interfaces";

interface iDepositionsProp {
  depositionList: iDeposition[];
}

export const Depositions = ({ depositionList }: iDepositionsProp) => (
  <>
    <div className="divNameAndButton">
      <h2>Comentários sobre o atleta</h2>
      <button>Comentar</button> {/* onClick={toggleCreateDepositionModal} */}
    </div>
    <ul>
      {
        depositionList.map(deposition => (
          <div>
            <h3 className="title-3">{deposition.author.name}</h3>
            <p>{deposition.content}</p>
          </div>
        ))
      }
    </ul>
  </>
);
