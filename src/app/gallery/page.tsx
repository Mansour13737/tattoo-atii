import Image from "next/image"
export default function Gallery() {
  return (
    <div className="w-full flex justify-center items-center min-h-screen bg-[url('/image.png')] bg-no-repeat bg-center bg-cover">
      <Image  src={'/gallery.png'} width={400} height={500} alt="pic" className="w-[100vw] h-[92vh]"/>
    </div>
  )
}
