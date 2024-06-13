import'./App.css';
function Leonardo(props)
{
    return(
        <div className="caja1">
            <div className="caja2">
            <h1>Nombre: {props.nom}  </h1>
            <p> Origen: {props.org} ,descripcion: {props.des}</p>
           </div>
           <div className="texto">
                  <h1>Descripcion: {props.desc}  </h1>
                   <p> Origen: {props.origen} ,descripcion: {props.desc}</p>
              </div>
             <div className="fotos">
               <img className="fotos"  src={props.imagen} />
           </div>
        </div>
        );
}
export default Leonardo;