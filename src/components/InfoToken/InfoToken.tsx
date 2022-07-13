import React from "react"
import { Component } from "../../types/Util"
import Cube from "../../svg/icons/cube.png"

import "./InfoToken.css"

export interface InfoProps {}

const InfoToken: Component<InfoProps> = (props) => {

	return (
        <div className="info-token mt-10 ml-6">
            <div className="token-title flex gap-4">
                <img src= {Cube} alt="" />
                <h1 className="text-lg">Information Token</h1>
            </div>

            <div className="token-info">
                <div className="col col-1">
                    <p> Total Supply </p>
                    <h1>4.000.000</h1>
                </div>

                <div className="col col-1">
                    <p>30% of Supply</p>
                    <h1>1.200.000</h1>
                </div>

                <div className="col col-1">
                    <p>Ticker</p>
                    <h1>PSUS</h1>
                </div>
                <div className="col col-1">
                    <p>Start Price</p>
                    <h1>-</h1>
                </div>
            </div>
        </div>
	)
}

export default InfoToken