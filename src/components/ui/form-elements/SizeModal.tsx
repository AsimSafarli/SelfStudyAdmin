import { useEffect, useState } from "react";
import clsx from "clsx";
import { Button } from "./Button";

interface ISize {
    id:number,
    size: string,
    selected: boolean
}



 const SizeModal = ({ selectedSizes, onSave, close }: any) => {

       const [availableSizes, setAvailableSizes] = useState<ISize[]>([
        { id: 1, size: '32x64', selected: false },
        { id: 2, size: '44x88', selected: false },
      ]);

      const [newSize, setNewSize] = useState<string>('');

      useEffect(() => {
        if (selectedSizes && selectedSizes.length > 0) {
          const updatedSizes = availableSizes.map(size => ({
            ...size,
            selected: selectedSizes.includes(size.size)
          }));
          setAvailableSizes(updatedSizes);
        }
      }, [selectedSizes]);


      const handleSizeClick = (sizeData: ISize) => {
       
        const updatedSizes = availableSizes.map(size => {
            if (size.id === sizeData.id) {
              size.selected =!sizeData.selected;
            } 
              return size;
            
          });

        setAvailableSizes(updatedSizes);
      };


    const handleSave = () => {
        const selectedSizes = availableSizes.filter(size => size.selected).map(size => size.size);
      onSave([...new Set(selectedSizes)]);;
    };


    const handleAddSize = () => {
      
      if (newSize.trim() !== '') {
        setAvailableSizes([...availableSizes, {id: new Date().getTime(), size: newSize, selected: false}]);
        setNewSize('');
      }
    };

   
  
    return (
      <div onClick={() => {
        close();
      }} className="w-full z-10 h-full fixed top-0 left-0 flex justify-center items-center  bg-black/[.3]">
        <div onClick={e => {        
          e.stopPropagation();
        }}  className="w-[588px] min-h-[433px] bg-white rounded-xl p-6 flex flex-col gap-[20px]">
          <div className="font-medium text-xl text-center">Ölçü əlavə et</div>
         
          <div className="w-full border rounded border-[#E5E5E5] px-5 py-3 flex flex-col gap-[12px]">

            <div className="text-[#605F5F] text-xs">Sizelər</div>
             <ul onClick={(e) => e.stopPropagation()} className="flex flex-wrap gap-[12.6px] w-[500px]">
            {availableSizes.map((sizeData: ISize) => (
              <li key={sizeData.id}
               className={clsx('rounded-md h-[34px] px-[15px] py-[4px] border', 
               !sizeData.selected && 'border-[#CBCBCB]' ,
               sizeData.selected && 'border-[#4f64da]')}            
              onClick={() => handleSizeClick(sizeData)}>
               {sizeData.size}
              </li>
            ))}
          </ul>
          <Button type="button" className="w-full" primary onClick={handleSave}>Ölçünü seç</Button>
          </div>
          

          <div className="w-full min-h-[171px] border rounded border-[#E5E5E5] px-5 py-3">
                    <div className="text-xs font-bold text-center">Yeni size əlavə et</div>
                    <div className="text-sm font-medium text-[#AAAAAA]">Size</div>

                   
                      <div >
                      <input 
                        className="text-center my-[12px] focus:ring-0 text-black rounded-md h-[34px] w-[66px] px-[15px] py-[4px] border border-[#CBCBCB]" 
                        type="text"
                        value={newSize}
                        onChange={e => setNewSize(e.target.value)}
                        />
                      </div>
                        
                        <Button type="button" onClick={handleAddSize} primary className="w-full h-[52px]">Ölçünü əlavə et</Button>
                   
          </div>
        </div>
      </div>
    );
  };
  
  export default SizeModal;