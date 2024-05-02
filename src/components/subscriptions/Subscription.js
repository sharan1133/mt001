import Tick from "../icons/Tick";
import Wrong from "../icons/Wrong";


const Subscription = () => {
  return (
    <>
      <div className="flex justify-center bg-[#f9f9f9] h-70v">
        <div className="w-full max-w-screen-xl m-10">
          <div className="join join-vertical w-full">
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                Free
              </div>
              <div className="collapse-content">
                <p className="font-normal"> <Tick style={{display:"inline", color:"green"}} /> Browse Profile</p>
                <p className="font-normal"> <Tick style={{display:"inline", color:"green"}} /> Shortlist and send request</p>
                <p className="font-normal"> <Tick style={{display:"inline", color:"green"}} /> Message and chat with unlimited users</p>
                <p className="font-normal"> <Wrong style={{display:"inline", color:"red"}} /> Get up to 3x matches daily</p>
                <p className="font-normal"> <Wrong style={{display:"inline", color:"red"}} /> Unlock access to advance search</p>
                <p className="font-normal"> <Wrong style={{display:"inline", color:"red"}} /> View contact detaile</p>
                <p className="font-normal"> <Wrong style={{display:"inline", color:"red"}} /> Get 3 free spotlights</p>
                
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                Pro Lite
              </div>
              <div className="collapse-content">
              <p className="font-normal"> <Tick style={{display:"inline", color:"green"}} /> Browse Profile</p>
                <p className="font-normal"> <Tick style={{display:"inline", color:"green"}} /> Shortlist and send request</p>
                <p className="font-normal"> <Tick style={{display:"inline", color:"green"}} /> Message and chat with unlimited users</p>
                <p className="font-normal"> <Tick style={{display:"inline", color:"green"}} /> Get up to 3x matches daily</p>
                <p className="font-normal"> <Tick style={{display:"inline", color:"green"}} /> Unlock access to advance search</p>
                <p className="font-normal"> <Tick style={{display:"inline", color:"green"}} /> View contact details</p>
                <p className="font-normal"> <Wrong style={{display:"inline", color:"red"}} /> Get 3 free spotlights</p>
                <p className="font-normal"> <Wrong style={{display:"inline", color:"red"}} /> Unlock 20 contact views</p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                Pro 
              </div>
              <div className="collapse-content">
              <p className="font-normal"> <Tick style={{display:"inline", color:"green"}} /> Browse Profile</p>
                <p className="font-normal"> <Tick style={{display:"inline", color:"green"}} /> Shortlist and send request</p>
                <p className="font-normal"> <Tick style={{display:"inline", color:"green"}} /> Message and chat with unlimited users</p>
                <p className="font-normal"> <Tick style={{display:"inline", color:"green"}} /> Get up to 3x matches daily</p>
                <p className="font-normal"> <Tick style={{display:"inline", color:"green"}} /> Unlock access to advance search</p>
                <p className="font-normal"> <Tick style={{display:"inline", color:"green"}} /> View contact details</p>
                <p className="font-normal"> <Tick style={{display:"inline", color:"green"}} /> Get 3 free spotlights</p>
                <p className="font-normal"> <Tick style={{display:"inline", color:"green"}} /> Unlock 20 contact views</p>              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscription;
