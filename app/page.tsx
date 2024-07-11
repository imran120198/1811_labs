import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Heart from "./assets/Heart.svg";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="ml-[42%] pt-[10px] w-[185px] h-[130px]">
        <p className="text-[48px] text-white items-center justify-center text-center ">
          Pickup line Generator
        </p>
      </div>
      <div className="z-10 flex flex-col items-center justify-center text-center">
        <button className="p-2 text-white flex items-center justify-center bg-[#FF2157] rounded-full absolute top-[56%] ">
          <Image
            src={Heart}
            alt="Heart"
            className="text-white fill-white mr-2"
          />
          <Link href="login" className="text-[30px]">
            Generate one for me
          </Link>
          <Image
            src={Heart}
            alt="Heart"
            className="text-white fill-white ml-2"
          />
        </button>
      </div>
    </main>
  );
}
