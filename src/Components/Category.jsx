function Category({ imgSrc, category }) {
  return (
    <div className="xs:gap-[40px] hover:border-orange00 group flex cursor-pointer flex-col gap-[24px] rounded-lg border-2 border-white bg-white p-[8px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] transition-colors duration-200 hover:cursor-pointer md:gap-[32px] lg:p-[4px]">
      <img
        className="h-[100px] rounded-sm md:h-[240px] lg:h-[280px] xl:h-[400px]"
        src={imgSrc}
      ></img>
      <div className="font-font01 text-green00 group-hover:text-orange00 cursor-pointer text-center text-[16px] transition-colors duration-200 md:text-[26px] lg:text-[29px]">
        {category}
      </div>
    </div>
  );
}

export default Category;
