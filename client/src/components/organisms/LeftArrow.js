import { useContext } from "react";
import { myProviderContext } from "../../context/MyProvider";
import LeftArrowFrame from "../atoms/LeftArrow/LeftArrowFrame";
import LeftArrowStyle from "../atoms/LeftArrow/LeftArrowStyle";
import LeftArrowHandler from "../molecules/LeftArrowHandler";

const LeftArrow = () => {
    const {setShowContent} = useContext(myProviderContext);

    return (
        <LeftArrowFrame onClick={() => LeftArrowHandler(setShowContent)} >
            <LeftArrowStyle id="arrow" ></LeftArrowStyle>
        </LeftArrowFrame>
    )
};

export default LeftArrow;
