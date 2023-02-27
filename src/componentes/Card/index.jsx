import './Card.css'

const Card = (props) => {
    return(
        <div className='colaborador'>
            <div className='cabecalho'>
                <img src={props.imagem} alt="" />
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
    );
}

export default Card