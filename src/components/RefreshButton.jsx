import RefreshIcon from '../assets/icon-dice.svg'

const RefreshButton = ({ onClick }) => {
    return (
      <button onClick={onClick}>
        <img src={RefreshIcon} alt="Refresh Icon" />
      </button>
    );
  };

export default RefreshButton;