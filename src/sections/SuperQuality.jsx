import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section id="quality" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container max-sm:mt-12">
      <div className="flex flex-1 flex-col">
        <h3 className="max-w-lg capitalize text-4xl font-bold font-palanquin">we provide you 
        <span className="text-coral-red"> super quality</span> shoes</h3>
        <p className="mt-4 max-w-lg lg:max-w-lg info-text">Ensuring premium comfort and style, our meticulously crafted footwear
            is designed to elevate your experience, providing you with unmatched
            quality, innovation, and a touch of elegance.
          </p>
        <p className="lg:max-w-lg info-text mt-6">
        Our dedication to detail and excellence ensures your satisfaction
        </p>
          
        <div className="mt-11">
        <Button 
          label="View details"
          iconURL={null}
        />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img
          src={shoe8}
          alt="shoe-8"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  )
}

export default SuperQuality