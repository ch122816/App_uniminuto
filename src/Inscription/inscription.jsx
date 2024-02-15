import './inscription.css'
export function Inscription(){
return(
    <form className="ul">
<h1 className="h1">Formulario de pre-inscripcion a practica 1</h1>

<section className="formulario">
  <fieldset>
    <legend className="h2">Información del usuario</legend>
    <ul>
      <p className=''>
          <label className='label' for="name">
            <span>Nombre:</span>
            <strong><abbr title="required"></abbr></strong>
          </label>
        <input type="text" id="name" name="username" />

        <label className='label' for="program">
            <span>Programa:</span>
            <strong><abbr title="required"></abbr></strong>
          </label>
          <input type="text" id="programa" name="userprograma" />
      </p>

      <p>
        <label className='label' for="Tipo_edentificacion">Tipo de identificación</label>
        <select name="Tipo_edentificacion" id="Tipo_edentificacion" required>
            <option value="0">CC</option>
            <option value="1">CE</option>
            <option value="2">TI</option>
        </select>
        <input type="numbers" id="num_identificacion" name="num_identificacion" required/>
        <label className='label' for="mail">
            <span>ID:</span>
            <strong><abbr title="required"></abbr></strong>
          </label>
          <input type="numbers" id="id" name="userID" />
      </p>

      <p>
        <label className='label' for="id">
            <span>Correo electrónico:</span>
            <strong><abbr title="required"></abbr></strong>
          </label>
          <input type="id" id="id" name="usermail" />
          
        <label className='label ' for="number">
            <span>Numero:</span>
            <strong><abbr title="required"></abbr></strong>
          </label>
          <input type="numbers" id="num" name="numero" />
      </p>

    </ul>
  </fieldset>
</section>

<section className='formulario'>
  <h2 className="h2">Formulario</h2>
  <fieldset >
  <label className='preguntas'>¿Cuántas prácticas en responsabilidad social?</label>
  <select className='formulario' name="practicas_rs" id="practicas_rs" required>
      <option value="0">Ninguna</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3 o más</option>
  </select>
<br></br>
  <label className='preguntas'>¿Cumple con los NRC necesarios?</label>
  <select className='formulario' name="cumple_nrc" id="cumple_nrc" required>
      <option value="si">Sí</option>
      <option value="no">No</option>
  </select>
  <br></br>
  <label className='preguntas'>¿Cuál es su estado civil?</label>
  <select className='formulario'  name="estado_civil" id="estado_civil" required>
      <option value="soltero">Soltero/a</option>
      <option value="casado">Casado/a</option>
      <option value="divorciado">Divorciado/a</option>
      <option value="viudo">Viudo/a</option>
  </select>
  <br></br>
  <label className='preguntas'>¿Tiene hijos?</label>
  <select className='formulario' name="tiene_hijos" id="tiene_hijos" required>
      <option value="no">No</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4_o_mas">4 o más</option>
  </select>
  <br></br>
  <label className='preguntas' for="observaciones">Observaciones:</label>
  <br />
  <textarea id="observaciones" name="observaciones" className='textarea' rows="6"></textarea>

  <button className='mybutton_inscription' type="submit">Enviar</button>
</fieldset>
</section>
</form>
)

}