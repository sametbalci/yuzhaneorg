
import GreenBox from "@/components/GreenBox";
import * as Icons from "@/components/icons";
import * as Images from "@/components/icons/imageIndex";
import sosyal_yardim from '@/icons/Logo_Sosyal_Yardım.png'
import Image from "next/image";
import Items from "@/components/Items";

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col items-center justify-center">
      <div className="mt-[74px]">
        <Icons.Logo />
      </div>
      <div className="flex flex-col mt-12 w-full h-full items-center justify-center">
        <div className="flex flex-row gap-[600px] justify-center">
          <Icons.Cloud1 />
          <Icons.Cloud2 />
        </div>
        <div className="flex flex-row w-full h-full items-center justify-center">
          <Icons.Homes />
        </div>
        <div className="w-full h-2 bg-orange -translate-y-2"></div>
      </div>
      <div className="flex flex-row gap-10 items-center justify-center mt-4">
        <GreenBox icon={<Icons.List />} number={101} title={"Tadilat Bekleyen Ev"} />
        <GreenBox icon={<Icons.Home />} number={0} title={"Teslim Edilen Ev"} />
        <GreenBox icon={<Icons.Money />} number={"19.500₺"} title={"Toplam Maliyet"} />
      </div>
      <div className="flex flex-row gap-10 items-center justify-center mt-28 w-full gap-20">
        <div>
          <p className="w-60 font-amatic font-bold text-5xl text-black leading-[63px] mb-12">100 ümüzün Akı 101 Hane</p>
        </div>
        <div className="w-[744px] font-jakarta font-normal text-base text-black">
          <p>Menemen; yüz ölçümü 665 km2, nüfusu 200 bin den fazla, 65 mahallesiyle; tarımı, zanaatı,
            hayvancılığı gibi çeşitli geçim kaynaklarına sahip İzmir'in güzel ilçesi.  Sosyal devlet olma
            anlayışını kaim kılma adına kendi kendine yetmeye çalışan bir ilçe Menemen. İhtiyaç sahibi ailelere
            sosyal eşitliği sağlama adına bir nebze de olsa katkı sağlamak amacıyla yola çıkmış bulunmaktayız.
            21. yüzyılın ilk çeyreğinde halen sağlıklı bir yaşam alanı elde edemeyen dar gelirli 101 Aile, 101 Hane için
            boya badanadan çatı tadilatına, mutfak tadilatından yepyeni bir konuta... Kimin ne ihtiyacı varsa...
            Siz de elinizi taşın altına koymak, yüzlerde bir tebessüm oluşturmak için bize katılmaya var mısınız?</p>
        </div>
      </div>
        <div className={"flex flex-row items-center justify-center mt-32"}>
            <div className={"h-60 w-60 border-[6px] border-white drop-shadow-lg -rotate-[15deg]"}>
                <Image src={Images.First} alt={''} className={"w-full h-full"} />
            </div>
            <div className={"h-60 w-60 border-[6px] border-white drop-shadow-lg rotate-[9.84deg]"}>
                <Image src={Images.Second} alt={''} className={"w-full h-full"} />
            </div>
            <div className={"h-60 w-60 border-[6px] border-white drop-shadow-lg -rotate-[15deg]"}>
                <Image src={Images.Third} alt={''} className={"w-full h-full"} />
            </div>
            <div className={"h-60 w-60 border-[6px] border-white drop-shadow-lg rotate-[1deg]"}>
                <Image src={Images.Fourth} alt={''} className={"w-full h-full"} />
            </div>
        </div>
        <div className={"flex flex-row items-center justify-center gap-16 mt-40"}>
            <div className={"flex flex-col gap-1 cursor-pointer"}>
                <p className={"font-amatic text-amatic-red text-[40px] font-bold"}>TADİLAT BEKLEYEN EVLER</p>
                <Icons.Line />
            </div>
            <div className={"flex flex-col gap-1 cursor-no-drop"}>
                <p className={"font-amatic text-[#57544FB2] text-[40px] font-bold"}>TESLİM EDİLEN EVLER</p>
                {/*<Icons.Line />*/}
            </div>
        </div>
        <div className={"flex flex-col items-center justify-center mb-36 mt-5 gap-5"}>
            <Items name={"S**** Ç****"} phone={"0 541 *** ** 03"} status={"Evin İlaçlanması"} cost={"2.000₺"} />
            <Items name={"G**** T****"} phone={"0 534 *** ** 35"} status={"Balkon Tadilati"} cost={"3.000₺"} />
            <Items name={"B**** Ç****"} phone={"0 543 *** ** 53"} status={"Boya Tadilatı"} cost={"7.000₺"} />
            <Items name={"A**** Ş****"} phone={"0 531 *** ** 01"} status={"Zemin Tadilatı"} cost={"7.500₺"} />
        </div>
      <footer className="fixed bottom-0 left-0 flex flex-row items-center justify-center gap-20 w-full h-24 bg-[#fbf8f1] shadow-[0_7px_60px_-15px_rgba(0,0,0,0.3)]">
        <Image src={sosyal_yardim.src} width={324} height={60} />
        <Icons.Menemen />
      </footer>
    </main>
  );
}
