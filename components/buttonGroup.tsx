import { useRecoilState } from "recoil";
import { selectedState } from "../pages/atom";
const ButtonGroup: React.FC = () => {
  const [selected, setSelected] = useRecoilState(selectedState);
  return (
    <div className="btn-group self-center pt-6">
      <button
        className={`btn ${selected === "Show All" ? "btn-active" : ""}`}
        onClick={(_) => setSelected("Show All")}
      >
        Show All
      </button>
      <button
        className={`btn ${selected === "Show Completed" ? "btn-active" : ""}`}
        onClick={(_) => setSelected("Show Completed")}
      >
        Completed
      </button>
      <button
        className={`btn ${selected === "Show Uncompleted" ? "btn-active" : ""}`}
        onClick={(_) => setSelected("Show Uncompleted")}
      >
        Uncompleted
      </button>
    </div>
  );
};

export default ButtonGroup;
