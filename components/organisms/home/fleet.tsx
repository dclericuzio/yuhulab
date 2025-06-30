export default function Fleet() {
    const fleetData = [
        '270ft Tug and Barge 5.000 DWT',
	    '300ft Tug and Barge 7.500 DWT',
	    '300ft Jumbo Tug and Barge 8.500 DWT ',
	    '330ft Tug and Barge 10.000 DWT ',
        '360ft Tug and Barge 13.000 DWT',
	    '420ft Tug and Barge 18.000 DWT ',
	    'Self Propelled Barge 10.000 DWT ',
	    'Self Propelled Barge 12.300 DWT ',
	    'Self Propelled Barge 13.000 DWT ',
	    'Handymax Vessel 41.000 DWT ',
	    'Handymax Vessel 35.000 DWT ',
	    'Supramax Vessel 50.000 DWT ',
	    'Oil Barge 500KL ',
	    'Oil Barge 1000KL'
    ]
    return (
        <div className="skl-container py-[0.35rem] md:py-[0.7rem] px-[0.3rem] md:px-[0.7rem] animation-effect">
            <div className='flex md:flex-row flex-col md:items-center md:justify-evenly'>
                <span className='mb-[0.1rem] md:mb-[0.2rem] text-[0.3rem] md:text-[0.5rem] font-semibold animation-effect whitespace-nowrap'>Our Fleet In Operations</span>
                <div className="flex flex-col">
                    {fleetData.map((item, index) => {
                        return (
                            <ul key={index} className="list-disc list-inside">
                                <li className="text-[0.15rem] md:text-[0.2rem]">{item}</li>
                            </ul>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
