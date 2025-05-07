import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section id="quality" className="flex justify-wrap items-center max-lg:flex-col-reverse gap-10 w-full max-container max-sm:mt-12">
      <div className="flex flex-1 justify-center items-center">
        <img
          src={offer}
          alt="shoe-8"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h3 className="max-w-lg capitalize text-4xl font-bold font-palanquin"> 
        <span className="text-coral-red">Special</span> Offer</h3>
        <p className="mt-4 max-w-lg lg:max-w-lg info-text">Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
          </p>
        <p className="lg:max-w-lg info-text mt-6">
        Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="flex justify-wrap gap-4 mt-11">
        <Button
          label="Shop Now"
          iconURL={arrowRight}
        />
        <Button
          label="Learn more"
          backgroundColor="bg-white"
          borderColor="border-slate-gray"
          textColor="text-slate-gray"
        />
      </div>
      </div>
      
    </section>
  )
}

export default SpecialOffer