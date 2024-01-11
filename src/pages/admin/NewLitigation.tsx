



const NewLitigation = () => {
  return (
    <div>
      
      <div className="relative w-full h-[300px] bg-white rounded-md shadow">
        <div className="absolute bg-gray-50 -bottom-[100px] h-[200px] w-[200px] rounded-md left-[50px] shadow"></div>
      </div>

      <div className=" mt-[120px] ">
        <div className="form-control flex flex-col gap-1">
          <label htmlFor="name">Litigation Title</label>
          <input name="name" type="text"  className="shadow px-3 py-1.5 rounded-md text-xl pops"/>
        </div>
      </div>
    </div>
  )
}

export default NewLitigation