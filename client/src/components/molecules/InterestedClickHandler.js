
const InterestedClickHandler = (showContent, setShowContent, setContent, value) => {
    window.scrollTo(0, 250);
    setShowContent(!showContent);   
    setContent(value);
};

export default InterestedClickHandler;
