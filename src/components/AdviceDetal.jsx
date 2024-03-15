import patternDivide from '../assets/pattern-divider-desktop.svg'




const AdviceDetail = ({advice, slipId}) => {
    return (
        <div className="container advice-detail">
        
            <div className="slip">ADVICE # {slipId}</div>
            <h4>"{advice}"</h4>
            <img className="divider" src={patternDivide} alt="Pattern Divide" />
        </div>
    )
}

export default AdviceDetail;