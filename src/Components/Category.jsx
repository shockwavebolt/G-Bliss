function Category({ imgSrc, category }) {
  return (
    <div className="flex flex-col transition-transform duration-300 bg-white rounded-lg hover:scale-110 hover:shadow-md hover:cursor-pointer group ">
      <img
        className=" h-[180px] rounded-lg md:h-[300px] sm:h-[220px] "
        src={imgSrc}
      ></img>
      <div className="text-center text-[26px] md:text-[47px] font-font02 text-green04 py-[4px] group-hover:text-magenta">
        {category}
      </div>
    </div>
  );
}

export default Category;
