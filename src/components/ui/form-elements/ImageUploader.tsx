import clsx from "clsx";
import Image from "next/image";


const ImageUploader = ({handleOnImageChange, imageSrc}: any) => {
    return (
      <div className={clsx("w-[588px] h-[444px] bg-[#E8E8E8] relative")}>
        <input id="file" 
            accept=".jpg, .jpeg, .png, .webp" 
            name="file" 
            type="file" 
            onChange={handleOnImageChange}
            style={{ width: '100%', height: '100%', opacity: '0'}}
            
             />
        {imageSrc && (
          <Image fill className="absolute left-0 top-0" alt='Product Image'  src={imageSrc}   />
        )}
      </div>
    )
  }

  export default ImageUploader