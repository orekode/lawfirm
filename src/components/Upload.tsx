import { useRef, useState } from "react"



export const Image = () => {

    const [ image, setImage ] = useState('');

    const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="h-full w-full overflow-hidden relative">
        <img src={image} className="object-cover h-full w-full" />
        <div className="absolute top-0 left-0 h-full w-full"></div>
        <input ref={inputRef} type="file" name="image" accept="image/*" className="opacity-0 overflow-hidden h-0 w-0 absolute"/>
    </div>
  )
}
