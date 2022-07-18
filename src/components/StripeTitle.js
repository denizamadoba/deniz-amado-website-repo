const StripeTitle = ({title}) => {
    return(
        <div className="text-3xl flex flex-row justify-center space-x-4 items-center text-gray-800">
                <hr className="px-12 border-gray-800"></hr> 
                <span className="tracking-widest">{title}</span> 
                <hr className="px-12 border-gray-800"></hr>
        </div>
    )
}
export default StripeTitle