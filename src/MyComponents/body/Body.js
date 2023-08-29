import React, {useState} from 'react'
import './Body.css'
import CardUtil from '../utils/cardUtil/CardUtil'
import { Row,Container,Col } from 'react-bootstrap'
import RowCard from '../utils/rowCardUtil/RowCard';
export default function Body() {
    const [isYearly, setIsYearly] = useState(false);
    const handleToggleYearly = () => {
        setIsYearly(!isYearly);
    }
  return (
    <div className='head-body-container'>
    <div className='body-container'>
            <h4 className='heading'>Plans & Pricing</h4>
               <div className='month-container'>
                    <div className="monthly-text" >Monthly</div>
                    <div data-w-id="db2f91f5-b542-3405-bb0f-ac82b949e3a3" className="toggle">
                    <div className="toggle-ball" >
                    <label class="switch">
                        <input type="checkbox" onInput={handleToggleYearly}/>
                        <span class="slider round"></span>
                    </label>
                    </div>
                    </div>
                    <div className='yearly-container'>
                        <img alt ="" src="http://web.archive.org/web/20221117021714im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e9d7255d3886a6103fb12a9_FREE-text.svg" />
                        <div className="yearly-text z-index-2">Yearly</div>
                    </div>
                </div>
     
    </div>
    <div className='body-grid-container'>
    {
    (!isYearly)?
    (<Container className='container'>
    <Row>
        <Col>
          <CardUtil title="Starter Monthly" price="49" description="Ideal for freelancers and contractors just starting out." button="Start Free"/>
        </Col>
        <Col>
          <CardUtil title="Professional Monthly" price="240" description="Ideal for freelancers and contractors just starting out." button="Start Now"/>
        </Col>
    </Row>
    </Container>):
    (
    <Container className='container'>
    <Row>
        <Col>
          <CardUtil title="Starter Yearly" price="69" description="Ideal for freelancers and contractors just starting out." button="Start Free"/>
        </Col>
        <Col>
          <CardUtil title="Professional Yearly" price="280" description="Ideal for freelancers and contractors just starting out." button="Start Now"/>
        </Col>
    </Row>
    </Container>
    )
    }
    </div>
      <h4 className='heading' style={{marginLeft:400,marginTop:50}}>Super charge your work with add-ons</h4>
    <div className="body-card-row-container">
       <RowCard title="Collaborators" desc="Invite other users to specific projects for limited access and functionality." price="Free"/>
       <RowCard  title="Partners" desc="Invite other users for full account access and company management." price="$9/month"/>
    </div>
    </div>
  )
}
