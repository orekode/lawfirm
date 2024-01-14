

const Empty = ({ title="Ups... No results Found.", text="Please try another search", load=false}) => {
    if(load)
        return (
            <div className=" p-6 ">
                <div className="h-[300px] w-[300px] mx-auto">
                    <img src="/images/not_found.png" className="object-cover h-full w-full" />
                </div>
                <div className="font-bold text-center">
                    <h3 className="text-xl">{title}</h3>
                    <p className="font-light">{text}</p>
                </div>
            </div>
        )
}

export default Empty