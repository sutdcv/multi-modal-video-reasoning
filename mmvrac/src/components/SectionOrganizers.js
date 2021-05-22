import React from 'react'
import PersonProfile from "./PersonProfile"

const SectionOrganizers = () => {
    return (
        <div>
            <h1 className="mb-5">Organizers</h1>
            <div className="row">
                <PersonProfile name="Jun Liu" imgSrc="imgs/profiles/jun_liu.jpg" link="https://istd.sutd.edu.sg/people/faculty/liu-jun" title="" org="Singapore University of Technology and Design (SUTD)" dim={135}/>
                <PersonProfile name="Li Xu" imgSrc="imgs/profiles/li_xu.jpeg" link="https://github.com/SUTDCV" title="" org="Singapore University of Technology and Design (SUTD)" dim={135}/>
                <PersonProfile name="Tianjiao Li" imgSrc="imgs/profiles/tianjiao_li.png" link="https://github.com/SUTDCV" title="" org="Singapore University of Technology and Design (SUTD)" dim={135}/>
                <PersonProfile name="He Huang" imgSrc="imgs/profiles/he_huang.jpg" link="https://github.com/MarkHershey" title="" org="Singapore University of Technology and Design (SUTD)" dim={135}/>
                <PersonProfile name="Qiuhong Ke" imgSrc="imgs/profiles/qiuhong_ke.jpg" link="https://findanexpert.unimelb.edu.au/profile/861653-qiuhong-ke" title="" org="University of Melbourne" dim={135}/>
                <PersonProfile name="Hossein Rahmani" imgSrc="imgs/profiles/hossein.jpg" link="https://www.lancaster.ac.uk/scc/about-us/people/hossein-rahmani" title="" org="Lancaster University" dim={135}/>
                <PersonProfile name="Gang Wang" imgSrc="imgs/profiles/gang_wang.jpeg" link="https://sites.google.com/site/gangwang6/" title="" org="Damo Academy, Alibaba" dim={135}/>
                <PersonProfile name="Wei Zhang" imgSrc="imgs/profiles/wei_zhang.png" link="http://www.vsislab.com/contact/" title="" org="Shandong University" dim={135}/>
            </div>
        </div>
    )
}



export default SectionOrganizers
