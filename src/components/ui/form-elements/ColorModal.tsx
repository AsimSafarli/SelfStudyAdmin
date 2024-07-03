import { useEffect, useState } from "react";
import clsx from "clsx";
import { Button } from "./Button";

interface IColor {
    id:number,
    color: string,
    selected: boolean}



 const ColorModal = ({ selectedColors, onSave, close }: any) => {

    const [availableColors, setAvailableColors] = useState<IColor[]>([
        { id: 1, color: '#20C997', selected: false },
        { id: 2, color: '#AF83F8', selected: false },
        { id: 3, color: '#AF83F8', selected: false },
        { id: 4, color: '#FFDD63', selected: false },
        { id: 5, color: '#FFDD63', selected: false },
        { id: 6, color: '#55E2DA', selected: false },
        { id: 7, color: '#E25563', selected: false },
        { id: 8, color: '#121212', selected: false },
        { id: 9, color: '#4F8A83', selected: false },
        { id: 10, color: '#83F8B9', selected: false },
        { id: 11, color: '#293CDF', selected: false },
        { id: 12, color: '#121212', selected: false },
        { id: 13, color: '#4F8A83', selected: false },
        { id: 14, color: '#83F8B9', selected: false },
        { id: 15, color: '#293CDF', selected: false }
      ]);



      useEffect(() => {
        if (selectedColors && selectedColors.length > 0) {
          const updatedColors = availableColors.map(color => ({
            ...color,
            selected: selectedColors.includes(color.color)
          }));
          setAvailableColors(updatedColors);
        }
      }, [selectedColors]);


      const handleColorClick = (colorData: IColor) => {
       // console.log('what data ==== ', JSON.stringify(colorData));
        const updatedColors = availableColors.map(color => {
            if (color.id === colorData.id) {
              color.selected =!colorData.selected;
            } 
              return color;
            
          });

        setAvailableColors(updatedColors);
      };


    const handleSave = () => {
        const selectedColors = availableColors.filter(color => color.selected).map(color => color.color);
      onSave([...new Set(selectedColors)]);;
    };

  
  
    return (
      <div onClick={() => {
        close();
      }} className="w-full z-10 h-full fixed top-0 left-0 flex justify-center items-center  bg-black/[.3]">
        <div onClick={e => {
          e.stopPropagation();
        }}  className="w-[588px] h-[433px] bg-white rounded-xl p-6 flex flex-col gap-[20px]">
          <div className="font-medium text-xl text-center">Rəng əlavə et</div>
         
          <div className="w-full border rounded border-[#E5E5E5] px-5 py-3 flex flex-col gap-[12px]">

            <div className="text-[#605F5F] text-xs">Rənglər</div>
             <ul onClick={(e) => e.stopPropagation()} className="flex flex-wrap gap-[12.6px] w-[500px]">
            {availableColors.map((colorData) => (
              <li key={colorData.id}
               className={clsx('rounded-full w-[34px] h-[34px] bg-white flex justify-center items-center', colorData.selected && 'border border-[#807E7E]')}              
              onClick={() => handleColorClick(colorData)}>
              <div className={clsx('rounded-full', !colorData.selected && 'w-[34px] h-[34px]', colorData.selected && 'w-[26px] h-[26px]')}
              style={{ backgroundColor: colorData.color }} 
              ></div> 
              </li>
            ))}
          </ul>
          <Button type="button" className="w-full" primary onClick={handleSave}>Seçimi təsdiq et</Button>
          </div>
          

          <div className="w-full h-[133px] border rounded border-[#E5E5E5] px-5 py-3">
                    <div className="text-xs font-bold text-center">Yeni rəng əlavə et</div>
                    <div className="text-sm font-medium text-[#AAAAAA] mb-[12px]">Rəng kodu</div>

                    <div className="flex flex-row gap-[28px] items-center">
                      <div className="h-[52px] border rounded border-[#E5E5E5] flex items-center px-[12px]">
                        <input className="text-center border-transparent focus:border-transparent focus:ring-0 text-white w-[296px] h-[35px] border border-[#E5E5E5] rounded-md px-3 bg-[#03C93B]" type="text"/>
                        </div>
                        <Button type="button" primary className="w-[160px] h-[52px]">Rəngi əlavə et</Button>
                    </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ColorModal;