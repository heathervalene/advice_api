import RefreshIcon from '../assets/icon-dice.svg'

const RefreshButton = ({ onClick }) => {
    return (
        <div className="container button-detail">
      <button className="btn" onClick={onClick}>
        <img src={RefreshIcon} alt="Refresh Icon" />
      </button>
      </div>
    );
  };

export default RefreshButton;