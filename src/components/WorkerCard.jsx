export default function WorkerCard({worker, onClick}){

return(

<div
onClick={()=>onClick(worker)}
className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-5 text-center cursor-pointer"
>

<img
src={worker.image}
className="w-20 h-20 rounded-full mx-auto mb-3"
/>

<h3 className="font-semibold text-lg">
{worker.name}
</h3>

<p className="text-gray-500 text-sm">
{worker.job}
</p>

<p className="text-indigo-600 text-sm mt-1">
Ration No: {worker.ration}
</p>

</div>

)

}