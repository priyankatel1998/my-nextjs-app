

type CardProps = {
 title : string;
 description :string;

};

export default function InfoCard ({ title , description }:CardProps){
    return(
        <div className="bg-white p-5 rounded-xl shadow-md border">
            <h2  className="text-xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-600">{description}</p>
        </div>
    )

}