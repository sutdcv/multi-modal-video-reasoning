import React from 'react'
import PersonProfileSimple from "./PersonProfileSimple"


const SectionContributors = () => {
    return (
        <div>
            <h1 className="mb-5">Contributors</h1>
            <div className="row">
                <PersonProfileSimple name="Yutian Lin" link="" title="" org="SUTD" />
                <PersonProfileSimple name="Renhang Liu" link="" title="" org="SUTD" />
                <PersonProfileSimple name="Tran Nguyen Bao Long" link="" title="" org="SUTD" />
                <PersonProfileSimple name="Yingjie Qiao" link="https://github.com/YingjieQiao" title="" org="SUTD" />
                <PersonProfileSimple name="Rui En Ho" link="https://github.com/rehohoho" title="" org="SUTD" />
                <PersonProfileSimple name="Bryan Tan" link="" title="" org="SUTD" />
                <PersonProfileSimple name="Jia Gong" link="" title="" org="SUTD" />
                <PersonProfileSimple name="Xun Long Ng" link="" title="" org="SUTD" />
                <PersonProfileSimple name="Koh Kai Ting" link="" title="" org="SUTD" />
                <PersonProfileSimple name="Christabel Dorothy" link="" title="" org="SUTD" />
                <PersonProfileSimple name="Lingao Liu" link="" title="" org="SUTD" />
            </div>
        </div>
    )
}

export default SectionContributors
