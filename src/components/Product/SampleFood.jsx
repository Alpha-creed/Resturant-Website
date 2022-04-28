import { Sample } from "./FoodStuffs/Sample"

export default function SampleFood({Samp}) {
  return (
    <div>
        <div className="foodSamp">
            {Samp.map((item)=>{
                return <Sample key={item.id} {...item}/>
            })}
        </div>
    
    </div>
  )
}
