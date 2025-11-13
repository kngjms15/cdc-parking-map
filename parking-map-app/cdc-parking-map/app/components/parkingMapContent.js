"use client";
import ParkingLot from './parkingLot';


export default function ParkingMapContents() {
    const sectionALotsId = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55]
    const handicap1 = 56
    const handicap2 = 83
    const section2B1LotsId = [57,58,59,60,61,62,63,64,65] // 56 skipped due to handicap spot
    const section2B2LotsId = [66,67,68,69,70,71,72,73]
    const section2B3LotsId = [74,75,76,77,78,79,80,81,82]
    const section2B4LotsId = [84,85,86,87,88,89,90,91,92,93]
    const section2C1LotsId = [94,95,96,97,98,99,100,101,102,103,104,105]
    const handicap3 = 106
    const section2C2LotsId = [107,108,109,110,111,112,113,114]
    const section2C3LotsId = [115,116,117,118]
    const section2BD1LotsId = [119,120,121,122,123,124,125,126,127,128,129,130,131,132,133]
    const section2BD2LotsId = [134,135,136,137,138,139,140,141,142,143,144,145,146,147,148]
    const section2BD3LotsId = [149,150,151,152,153,154,155,156,157,158,159,160,161]
    const section2CG1LotsId = [162,163,164,165,166]
    const section2CF1LotsId = [167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200]
    const section3E1LotsId = [201,202,203,204,205,206,207,208,209,210]
    const section3E2LotsId = [211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250]

    return(
        <div>
            <div className="section-1">
                <div className="section-a-sidewalk"></div>
                    {sectionALotsId.map((id) => (
                        <div key={id} className='section-a-stall'>
                            <ParkingLot initialId={id} lotSize={"section-a-stall"} />
                        </div>
                    ))}
            </div>
            <div className="section-2">
                <div className="section-2a">
                    <div className="section-2a-1"></div>
                    <div className="section-2a-2"></div>
                </div>
                <div className="section-2b">
                    <div className="section-2b-northDriveway">
                        North Drive Way
                    </div>
                    <div className="section-2b-bd-container">
                        <div className="section-2b-bcd">
                            <div className="section-2b-bcd-bstalls">

                                <div className="" style={{}}>
                                    <ParkingLot 
                                        initialId={handicap1} 
                                        lotSize={""} 
                                        customStyle={{ 
                                            width: '76px',
                                            height: '100px',
                                            border: '1px solid black',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '11px',
                                            textAlign: 'center',
                                            wordWrap: 'break-word',
                                            overflowWrap: 'break-word'
                                    }} />
                                </div>

                                {section2B1LotsId.map((id) => (
                                    <div key={id}>
                                        <ParkingLot initialId={id} lotSize={"section-2b-bcd-stall"} />
                                    </div>
                                ))}

                                <div className=" bg-[#D9D9D9] border-none" style={{width:"93px", height:"102px"}}></div>

                                {section2B2LotsId.map((id) => (
                                    <div key={id}>
                                        <ParkingLot initialId={id} lotSize={"section-2b-bcd-stall"} />
                                    </div>
                                ))}

                                <div className=" bg-[#D9D9D9] border-none" style={{width:"35px", height:"102px"}}></div>
                                
                                {section2B3LotsId.map((id) => (
                                    <div key={id}>
                                        <ParkingLot initialId={id} lotSize={"section-2b-bcd-stall"} />
                                    </div>
                                ))}

                               <div className="" style={{}}>
                                    <ParkingLot 
                                        initialId={handicap2} 
                                        lotSize={""} 
                                        customStyle={{ 
                                            width: '76px',
                                            height: '100px',
                                            border: '1px solid black',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '11px',
                                            textAlign: 'center',
                                            wordWrap: 'break-word',
                                            overflowWrap: 'break-word'
                                    }} />
                                </div>
                                
                                <div className=" bg-[#D9D9D9] border-none" style={{width:"93px", height:"102px"}}></div>

                                {section2B4LotsId.map((id) => (
                                    <div key={id}>
                                        <ParkingLot initialId={id} lotSize={"section-2b-bcd-stall"} />
                                    </div>
                                ))}
                            </div>
                            <div className="section-2b-bcd-northSideWalk"></div> 
                            <div className="section-2b-bcd-building">Building</div>
                        </div>
                        <div className="section-2c">
                            <div className="section-2c-eastSideWalk"></div>
                            <div className="section-2c-cStalls">

                                {section2C1LotsId.map((id) => (
                                    <div key={id}>
                                        <ParkingLot initialId={id} lotSize={"section-2c-stall"} />
                                    </div>
                                ))}
                                <div className=" bg-[#d9d9d9]" style={{height: "55px", width: "100px"}}></div>

                                <div>
                                    <ParkingLot initialId={handicap3} lotSize={"section-2c-stall"} customStyle={{height: "88px" }} />
                                </div>

                                {section2C2LotsId.map((id) => (
                                    <div key={id}>
                                        <ParkingLot initialId={id} lotSize={"section-2c-stall"} />
                                    </div>
                                ))}

                                <div className="section-2c-stall bg-[#D9D9D9]" style={{height: "70px", width: "100px"}}>stall</div>
                                
                                {section2C3LotsId.map((id) => (
                                    <div key={id}>
                                        <ParkingLot initialId={id} lotSize={"section-2c-stall"} />
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                    <div className="section-2b-d-container">
                        <div className="section-2b-southSideWalk">South Sidewalk</div>
                        <div className="section-2b-dStalls">

                            {section2BD1LotsId.map((id) => (
                                <div key={id}>
                                    <ParkingLot initialId={id} lotSize={"dStall"} />
                                </div>
                            ))}

                            <div className="dStall bg-[#D9D9D9]"></div>
                            
                            {section2BD2LotsId.map((id) => (
                                <div key={id}>
                                    <ParkingLot initialId={id} lotSize={"dStall"} />
                                </div>
                            ))}

                            <div className="dStall bg-[#D9D9D9]" style={{ width: "95px"}}></div>

                            {section2BD3LotsId.map((id) => (
                                <div key={id}>
                                    <ParkingLot initialId={id} lotSize={"dStall"} />
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
                <div className="section-2c-fg">
                    <div className="section-2c-northDriveWay"></div>
                    <div className="section-2c-gStalls">
                        {section2CG1LotsId.map((id) => (
                            <div key={id}>
                                <ParkingLot initialId={id} lotSize={"gStall"} />
                            </div>
                        ))}
                    </div>
                    <div className="section-2c-fStalls-container">
                        <div className="section-2c-fStalls">

                            {section2CF1LotsId.map((id) => (
                                <div key={id}>
                                    <ParkingLot initialId={id} lotSize={"fStall"} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-3-container">

                {section3E1LotsId.map((id) => (
                    <div key={id}>
                        <ParkingLot initialId={id} lotSize={"eStall"} />
                    </div>
                ))}
                <div className="eStall bg-[#D9D9D9]"></div>

                {section3E2LotsId.map((id) => (
                    <div key={id}>
                        <ParkingLot initialId={id} lotSize={"eStall"} />
                    </div>
                ))}
                <div className="eStall bg-white"></div>
            </div>
        </div>
    )
}