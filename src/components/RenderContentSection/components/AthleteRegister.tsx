export const AthleteRegister = () => (
  <>
    <div className="divNameAndButton">
      <div>
        <img src="" alt="Foto de perfil do atleta" />
        <h2>Comentários sobre o atleta</h2>
      </div>
      <button>X</button>
    </div>
    <form action="">
      <fieldset>
        <label>Nome Completo</label>
        <input type="text" />
      </fieldset>
      <fieldset>
        <label>Idade</label>
        <input type="number" />
      </fieldset>
      <fieldset>
        <label>Link para a imagem</label>
        <input type="text" />
      </fieldset>
      <fieldset>
        <label>Biografia</label>
        <input type="text" />
      </fieldset>
    </form>
    <div className="divButtons">
      <button>Cadastrar</button>
      <button>Cancelar</button>
    </div>
  </>
);
