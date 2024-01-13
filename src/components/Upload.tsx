import { Upload, UploadCloud } from "lucide-react";
import { ChangeEvent, useRef, useState } from "react"



export const Image = ({ callback, error="" } : { callback: any, error?: string}) => {

    const [ image, setImage ] = useState('');

    const inputRef = useRef<HTMLInputElement>(null);

    const handleUpload = (event: ChangeEvent<HTMLInputElement>) => {

        let image = '';

        if(!event.target.files) return false;

        image = URL.createObjectURL(event.target.files[0]);
        callback(event.target.files[0]);
        setImage(image);
    }

  return (
    <div className="h-full w-full overflow-hidden relative">
        {image !== '' &&
            <img src={image} className="object-cover h-full w-full" />
        }
        <div onClick={() => inputRef.current?.click()} className={`absolute top-0 left-0 h-full w-full ${ image === '' ? "" : "bg-black bg-opacity-50 text-white"} z-10 text-center flex flex-col items-center justify-center font-black p-2`}>
            <div className="">
                <UploadCloud size={50}/>
            </div>
            <div className="">Click To Upload An Image</div>
            <div className="text-xs text-red-400 pops">{error}</div>
        </div>
        <input onChange={handleUpload} ref={inputRef} type="file" name="image" accept="image/*" className="opacity-0 overflow-hidden h-0 w-0 absolute"/>
    </div>
  )
}
