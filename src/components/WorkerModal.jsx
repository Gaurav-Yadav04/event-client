export default function WorkerModal({worker, close}){

if(!worker) return null

return(

<div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

<div className="bg-white rounded-xl p-6 w-[90%] max-w-md relative animate-scale">

<button
onClick={close}
className="absolute top-3 right-4 text-xl"
>
✖
</button>

<img
src={worker.image}
className="w-24 h-24 rounded-full mx-auto mb-4"
/>

<h2 className="text-xl font-bold text-center">
{worker.name}
</h2>

<p className="text-center text-gray-500">
{worker.job}
</p>

<div className="mt-4 space-y-2 text-sm">

<p>📄 Ration No: {worker.ration}</p>
<p>📞 Phone: {worker.phone}</p>
<p>📍 Location: {worker.location}</p>
<p>💼 Experience: {worker.experience}</p>
<p>⭐ Rating: {"⭐".repeat(worker.rating)}</p>

</div>

<p className="mt-4 text-gray-600 text-sm text-center">
{worker.about}
</p>

</div>

</div>

)
}