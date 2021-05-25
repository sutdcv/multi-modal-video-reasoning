import React from 'react'
import PersonProfile from "./PersonProfile"

const SectionSpeakers = () => {
    return (
        <div>
            <h1 className="mb-5">Speakers (TBC)</h1>
            <div className="row">
                <PersonProfile name="Alex Kot" imgSrc="imgs/profiles/alex_kot.jpg" link="https://personal.ntu.edu.sg/eackot/index.html" title="" org="Rapid-Rich Object SEarch Laboratory (ROSE), Nanyang Technological University (NTU)" dim={135}/>
                {/* <PersonProfile name="Lingyu Duan" imgSrc="imgs/profiles/lingyu_duan.jpg" link="https://eecs.pku.edu.cn/info/1459/9475.htm" title="" org="National Engineering Laboratory of Video Technology (NELVT), Peking University (PKU)" dim={135}/> */}
                <PersonProfile name="Jiaying Liu" imgSrc="imgs/profiles/jiaying_liu.png" link="http://39.96.165.147/people/liujiaying.html" title="" org="Wangxuan Institute of Computer Technology, Peking University (PKU)" dim={135}/>
                <PersonProfile name="Piotr Koniusz" imgSrc="imgs/profiles/pk.jpg" link="http://claret.wikidot.com/" title="" org="Data61, CSIRO" dim={135}/>
            </div>
        </div>
    )
}



export default SectionSpeakers
