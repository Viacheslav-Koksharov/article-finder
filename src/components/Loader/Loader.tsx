import { BallTriangle } from "react-loader-spinner";
import '../../sass/main.scss';
import { ILoader } from "../../interfaces/Loader.interfaces";

const Loader = ({ ariaLabel, height, width, radius, color }: ILoader) => {
  return (
    <>
      <div className="loader__container">
        <div className="spinner__container">
          <BallTriangle
            ariaLabel={ariaLabel}
            height={height}
            width={width}
            radius={radius}
            color={color}
          />
        </div>
      </div>
    </>
  );
};

export default Loader;