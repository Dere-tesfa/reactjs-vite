const ComponentOne = ({ count, onClickHandler }) => {
  const click = () => onClickHandler;
  return (
    <div>
      <p>{count}</p>
      <button className="bg-indigo-700" onClick={click}>
        Increase
      </button>
    </div>
  );
};
export default ComponentOne;
