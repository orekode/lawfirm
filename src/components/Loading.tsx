


const Loading = ({ load = false}) => {
    if(load)
        return (
            <div className="fixed z-50 bg-black bg-opacity-50 top-0 left-0 h-screen w-screen flex items-center justify-center">
                <img src="/images/loading.gif" className="h-[80px] w-[80px]" />
            </div>
        )
}

export default Loading