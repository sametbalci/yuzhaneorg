const Items = ({name, phone, status, cost}) => {
    return (
        <div className={"flex flex-row gap-36 w-[1280px] h-28 bg-white drop-shadow-md rounded-xl"}>
            <div className={"flex flex-row gap-7 items-center ml-7"}>
                <div className={"w-16 h-16 bg-gray-400 rounded"}></div>
                <div className={"flex flex-col"}>
                    <p className={"font-jakarta text-[#57544F] text-xs"}>AD SOYAD</p>
                    <p className={"font-jakarta text-black text-xl"}>{name}</p>
                </div>
            </div>
            <div className={"flex flex-row gap-14 items-center"}>
                <div className={"flex flex-col"}>
                    <p className={"font-jakarta text-[#57544F] text-xs"}>TELEFON</p>
                    <p className={"font-jakarta text-black text-xl"}>{phone}</p>
                </div>
                <div className={"flex flex-col"}>
                    <p className={"font-jakarta text-[#57544F] text-xs"}>TADİLAT DURUMU</p>
                    <p className={"font-jakarta text-black text-xl"}>{status}</p>
                </div>
                <div className={"flex flex-col"}>
                    <p className={"font-jakarta text-[#57544F] text-xs"}>MALİYET</p>
                    <p className={"font-jakarta text-black text-xl"}>{cost}</p>
                </div>
            </div>
            <div className={"flex flex-row items-center gap-5"}>
                <div className={"items-center justify-center w-28 h-10 border border-solid border-[#BBB8B3] text-[#3C4439] rounded cursor-pointer transition hover:bg-[#BBB8B3] hover:text-white"}>
                    <p className={"items-center justify-center text-center translate-y-[8px] font-jakarta font-medium text-sm"}>Detayı Gör</p>
                </div>
                <div className={"items-center justify-center w-28 h-10 border border-solid bg-[#E6EEE3] text-[#3C4439] rounded cursor-pointer transition hover:bg-[#D4DCD1]"}>
                    <p className={"items-center justify-center text-center translate-y-[8px] font-jakarta font-medium text-sm"}>Destek Ver</p>
                </div>
            </div>
        </div>
    )
};

export default Items;
