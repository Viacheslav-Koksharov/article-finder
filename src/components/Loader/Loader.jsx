import { BallTriangle } from "react-loader-spinner";
import '../../sass/components/_loader.scss';

const Loader = ({ ariaLabel, height, width, radius, color }) => {
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