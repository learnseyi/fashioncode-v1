import React,{useRef} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './Tab.css';
import {  
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBLink
 } from "mdbreact";
 

const Tab = () =>{
    const tabRef = useRef({className:'active1'});
    const tab2Ref = useRef();
    const curRef = useRef({className:'click'})
    const cur2Ref = useRef();
      const handleTab = (e)=>{
          const activeBtn = tabRef.current
          const activeBtn2 = tab2Ref.current;
          const curBtn = curRef.current;
          const cur2Btn = cur2Ref.current
          
        
        const cur = e.target;
            if(cur.tagName === 'BUTTON' && e.target.classList.contains('btn-1')){
                curBtn.classList.add('click');
                cur2Btn.classList.remove('click')
                  activeBtn.classList.add('active1');
                  activeBtn2.classList.remove('active1');
            }else if(e.target.tagName === 'BUTTON' && e.target.classList.contains('btn-2')){
                curBtn.classList.remove('click');
               cur2Btn.classList.add('click');
                activeBtn.classList.remove('active1')
                activeBtn2.classList.add('active1')
            }

        
      }
    return(
    <MDBContainer>
        <MDBRow className='justify-content-center m-2'>
    <MDBCol style={{padding:0}} md='6' className='p-0 border-0'>
        <button  ref={curRef} className='btn-1  w-100 text-center border01  border-0 click' onClick={handleTab}>News & Reviews</button>
        </MDBCol >
        <MDBCol style={{padding:0}} md='6' className='p-0'>
        <button   ref={cur2Ref} className='btn-2   w-100 text-center border01  border-0' onClick={handleTab}>Investment Updates</button>
    </MDBCol>
    </MDBRow>
    <Router >
    <div  ref={tabRef} id='tabItem'className='tabContent active1 m-2'>
    
    <h5 >More News</h5>
    
    <MDBLink to='!#'>Hello World</MDBLink>
    <MDBLink to='!#'>Hello World</MDBLink>
    <MDBLink to='!#'>Hello World</MDBLink>

</div>
<div ref={tab2Ref}  className='tabContent m-2'>
    <h5 >Client Relations</h5>
    
    <MDBLink to='!#'>We are Here</MDBLink>
    <MDBLink to='!#'>We are Here</MDBLink>
    <MDBLink to='!#'>We Are Here</MDBLink>
   
</div>
</Router>
    </MDBContainer>
    

    )
}
export default Tab;