import { RiCloseLine } from "react-icons/ri";

const ExperienceModal = ({setIsOpen, title, text}) => {
    return (
        <>
            <div className="darkBG" onClick={() => setIsOpen(false)}>
                <div className="centered">
                    <div className="modal">
                        <div className="modalHeader">
                            <h2 className="heading">{title}</h2>
                        </div>
                        <button className="closeBtn" onClick={() => setIsOpen(false)}>
                            <RiCloseLine style={{ marginBottom: "-3px" }} />
                        </button>
                        <div className="modalContent md:px-8">
                            {text}
                        </div>
                    </div>
                </div>
            </div>
        </>
       
    )
}
export default ExperienceModal