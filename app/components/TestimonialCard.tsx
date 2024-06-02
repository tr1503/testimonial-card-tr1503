import Image from 'next/image';

const TestimonialCard = ({ data } : { data: { name: string, username: string, image: string, context: string } }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="flex flex-row">
                    <img className="w-16 h-16 mt-2 mr-5 rounded-full shadow-lg" src={data.image} alt={data.username} />
                    <div className="flex flex-col mt-3">
                        <p className="font-bold text-l">{data.name}</p>    
                        <p className="text-sm text-gray-500">@{data.username}</p>
                    </div>
                </div>
                <p className="text-gray-700 text-base mt-2">
                   {data.context}
                </p>
            </div>
        </div>
    )
}

export default TestimonialCard;