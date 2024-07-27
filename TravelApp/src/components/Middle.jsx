import { useState } from 'react';

const Middle = ({ data }) => {
    
    const [destinations, setDestinations] = useState(data);
    const [expanded, setExpanded] = useState(null); // Track which item is expanded

    
    const toggleExpand = (id) => {
        setExpanded(expanded === id ? null : id); // Toggle expand/collapse
    };

  
    const handleDelete = (id) => {
        setDestinations(destinations.filter(item => item.dID !== id));
    };

    return (
        <div className="bg-gradient-to-r from-[#fc00ff] to-[#00dbde] w-full h-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
                {destinations.map((elem) => (
                    <div className="card card-compact shadow-xl m-5 mt-[70px] bg-white" key={elem.dID}>
                        <figure className="flex justify-center">
                            <img
                                src={elem.dImage}
                                alt={elem.dName}
                                className="w-full"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-black">{elem.dName}</h2>
                            <p>
                                {expanded === elem.dID ? elem.dDescription : `${elem.dDescription.substring(0, 100)}...`}
                                <button
                                    onClick={() => toggleExpand(elem.dID)}
                                    className="text-blue-500 hover:underline ml-2"
                                >
                                    {expanded === elem.dID ? 'Read Less' : 'Read More'}
                                </button>
                            </p>
                            <div className="card-actions flex justify-between mt-4">
                                <button className="btn btn-outline">View Packages</button>
                                <button
                                    onClick={() => handleDelete(elem.dID)}
                                    className="btn btn-outline btn-error"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Middle;
