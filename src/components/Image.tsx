

const Image = ({ image, animate='', cover=false, children } : { image: string, animate?: string, cover?: boolean, children: any}) => {
  return (
    <div className={`${cover ? 'h-full w-full' : ''} relative`}>
      <div className={`${cover ? 'h-full w-full' : ''} relative z-10`}>
        {children}
      </div>
      <div className="absolute-cover ">
        <img src={image}  className={`img-cover ${animate}`}/>
      </div>
    </div>
  );
}

export default Image;