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
    <ul>{/* depositionList.map() */}</ul>
  </>
);
