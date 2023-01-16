import '../../sass/main.scss';
import { IContainer } from "../../interfaces/Container.interface";

const Container = ({ children}:IContainer) => {
  return (
    <div className="container"> {children}</div>   
  )
}

export default Container;