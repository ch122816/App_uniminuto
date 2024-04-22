import React from 'react';
import './inscription.css';

export function Inscription() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para manejar el envío del formulario
    // Por ejemplo, puedes obtener los valores de los campos del formulario usando event.target
    // y luego enviar esos valores a tu servidor o realizar alguna acción basada en ellos
  };

  return (
    <form className="ul" onSubmit={handleSubmit}>
      <h1 className="h1">Formulario de pre-inscripción a práctica 1</h1>

      <section className="formulario informacion-usuario">
        <div className="columna">
          <label className='label' htmlFor="name">
            <span>Nombre:</span>
            <strong><abbr title="Nombre completo del estudiante"></abbr></strong>
          </label>
          <input type="text" id="name" name="username" />

          <label className='label' htmlFor="Tipo_edentificacion">
            <span>Identificación:</span>
            <strong><abbr title="Tipo de identificación"></abbr></strong>
          </label>
          <div className="identificacion">
            <select className='Ti' name="Tipo_edentificacion" id="Tipo_edentificacion" required>
              <option value="0">CC</option>
              <option value="1">CE</option>
              <option value="2">TI</option>
            </select>
            <input type="number" id="num_identificacion" name="num_identificacion" required/>
          </div>

          <label className='label' htmlFor="mail">
            <span>Correo:</span>
            <strong><abbr title="Correo electrónico"></abbr></strong>
          </label>
          <input type="email" id="mail" name="usermail" />
        </div>

        <div className="columna">
          <label className='label' htmlFor="programa">
            <span>Programa:</span>
            <strong><abbr title="Programa académico"></abbr></strong>
          </label>
          <input type="text" id="programa" name="userprograma" />

          <label className='label' htmlFor="id">
            <span>ID:</span>
            <strong><abbr title="Identificación única"></abbr></strong>
          </label>
          <input type="number" id="id" name="userID" />

          <label className='label' htmlFor="number">
            <span>Número:</span>
            <strong><abbr title="Número de teléfono"></abbr></strong>
          </label>
          <input type="number" id="num" name="numero" />
        </div>
      </section>

      <section className='formulario'>
        <h2 className="h2">Formulario</h2>
        <fieldset>
          <label className='preguntas'>¿Cuántas prácticas en responsabilidad social?</label>
          <select className='formulario' name="practicas_rs" id="practicas_rs" required>
            <option value="0">Ninguna</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3 o más</option>
          </select>
          <br />
          <label className='preguntas'>¿Cumple con los NRC necesarios?</label>
          <select className='formulario' name="cumple_nrc" id="cumple_nrc" required>
            <option value="si">Sí</option>
            <option value="no">No</option>
          </select>
          <br />
          <label className='preguntas'>¿Cuál es su estado civil?</label>
          <select className='formulario' name="estado_civil" id="estado_civil" required>
            <option value="soltero">Soltero/a</option>
            <option value="casado">Casado/a</option>
            <option value="divorciado">Divorciado/a</option>
            <option value="viudo">Viudo/a</option>
          </select>
          <br />
          <label className='preguntas'>¿Tiene hijos?</label>
          <select className='formulario' name="tiene_hijos" id="tiene_hijos" required>
            <option value="no">No</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4_o_mas">4 o más</option>
          </select>
          <br />
          <label className='preguntas' htmlFor="observaciones">Observaciones:</label>
          <br />
          <textarea id="observaciones" name="observaciones" className='textarea' rows="6"></textarea>

          <button className='mybutton_inscription' type="submit">Enviar</button>
        </fieldset>
      </section>
    </form>
  );
}

export default Inscription;
