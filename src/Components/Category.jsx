function Category({ imgSrc, category }) {
  return (
    <div className="flex flex-col pb-[24px] border-2 border-white  gap-[40px] transition-colors duration-200 bg-white rounded-lg hover:shadow-md hover:cursor-pointer  cursor-pointer hover:border-orange00 group md:gap-[32px] lg:p-[4px] ">
      <img
        className=" h-[140px] rounded-sm md:h-[240px] lg:h-[280px] xl:h-[400px]"
        src={imgSrc}
      ></img>
      <div className="text-center text-[16px]  font-font01 text-green00 group-hover:text-orange00 transition-colors duration-200 cursor-pointer md:text-[26px] lg:text-[29px]">
        {category}
      </div>
    </div>
  );
}

export default Category;
