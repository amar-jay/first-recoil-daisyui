import { useRef } from "react";
import { SetterOrUpdater, useRecoilState } from "recoil";
// import styles from "../styles/Home.module.css";
import { countState } from "../pages/atom";
const changeCount: React.FC<{}> = () => {
  const [count, setCount] = useRecoilState(countState);
  return (
    <>
      <div className="alert shadow-lg w-1/3 my-4">
        <span className="text-red-500 text-bold text-xl">NOTE: </span>
        Type Numbers Only
      </div>
      <input
        className="input input-primary w-40"
        // value={count == 0 ? "" : count}
        value={count}
        onChange={(e) => {
          let n = Number(e.target.value || 0);
          if (!isNaN(n)) setCount(n);
        }}
      />
    </>
  );
};

export default changeCount;
