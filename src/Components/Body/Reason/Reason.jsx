import React from 'react';
import './Reason.css'
import ResonComp from './ResonComp';

const Reason = () => {

    const Heading1 = "Interactive live online classes at your convenient time slots";
    const Heading2 = "Learning from passionate, talented and trusted teachers";
    const Heading3 = "Cross country sharing of interesting and unique hobbies from across the world";
    const Heading4 = "Age no bar for enroling into your cherished hobby or activity classes";
    const Heading5 = "Transparent and structured fee payment options";
    const Heading6 = "Contributing to the revival and nurturing of traditional art forms";
 
    const Imag1 ="https://blogs.warals.com/wp-content/uploads/2020/10/live-online-classes-scaled.jpg"
    const Imag2 ="https://th.bing.com/th/id/OIP.xdBlEBBwbvqJ8otH3veEiAHaE5?w=245&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7"
    const Imag3 ="https://th.bing.com/th/id/OIP.6R0-80tU_p15m-A-8cwVNQHaF3?w=231&h=184&c=7&r=0&o=5&dpr=1.4&pid=1.7";
    const Imag4 ="https://th.bing.com/th/id/OIP.gsG3EJo0ryxk1M1gbt5t8wAAAA?w=191&h=132&c=7&r=0&o=5&dpr=1.4&pid=1.7";
    const Imag5 ="https://th.bing.com/th/id/OIP.7tiZCtNfu8TyuwkBIb8tywHaHa?w=155&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7";
    const Imag6 = "https://th.bing.com/th/id/OIP.NyRaeMqwABSFwL2lc56eyQHaHa?w=140&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7";

  return (
    <div className='ReasonContainer'>
      <div className='ReasonHeading'>
        <h2>Six reasons to choose our class</h2>
      </div>
      <div className='ResonPartTop'>
          <ResonComp heading={Heading1}  Image={Imag1} />
          <ResonComp heading={Heading2} Image={Imag2} />
          <ResonComp heading={Heading3} Image={Imag3} />
      </div>
      <div className='ResonPartTop'>
          <ResonComp heading={Heading4} Image={Imag4}/>
          <ResonComp heading={Heading5} Image={Imag5}/>
          <ResonComp heading={Heading6} Image={Imag6}/>
      </div>
    </div>
  );
}

export default Reason;
