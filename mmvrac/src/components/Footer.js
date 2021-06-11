import React from 'react'

const Footer = () => {
    return (
        <footer className="mt-5 footer">


            <div style={{height:70}}></div>
            <hr className="mt-auto mx-5"></hr>

            <div className="container d-flex flex-column justify-content-center">
                <div className="container d-flex flex-row justify-content-center">
                    <p className="font-monospace text-muted">Contact us: {"{"} li_xu, tianjiao_li {"}"} [AT] mymail.sutd.edu.sg</p>
                </div>
                <div className="container d-flex flex-row justify-content-center user-select-none">
                    <p className="text-capitalize fw-light text-muted">SUTD CV Lab © 2021. All rights reserved.</p>
                </div>
            </div>



        </footer>
    )
}

export default Footer
