
import '.Input.css';

export function Input ({nameLabel,nameId,isInputDisabled, IsValue}){
  

    return (
        <div className="input-group">
            <input required type="text" className="input" id={nameLabel} name={nameId} disabled={isInputDisabled} value={IsValue}/>
            <label htmlFor={nameLabel} className="label" >{nameLabel}</label>
        </div>
    )
}