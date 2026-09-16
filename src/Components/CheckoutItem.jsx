function CheckoutItem({ item }) {
  const currQt = item.quantity;
  return (
    <li className="flex w-full items-center gap-[8px] py-[16px] sm:gap-[16px]">
      <div className="font-font01 text-[16px] sm:text-[29px]">{currQt}x</div>
      <div className="flex w-full flex-col gap-[8px] sm:gap-[16px]">
        <div className="border-resin00 flex rounded-lg border-4 bg-white p-[16px] sm:p-[24px]">
          <img src={item.img} className="h-[100px] self-center sm:h-[150px]" />
          <div className="flex flex-col">
            <div className="text-green09 flex flex-col py-[16px] sm:py-[24px]">
              <div className="font-font01 text-[16px]">{item.name}</div>
              <div className="flex flex-col">
                <div
                  className={`flex ${
                    item.type2 != '' && 'divide-x-2'
                  } font-font03`}
                >
                  <div className="pr-[4px] text-[12px]">{item.type}</div>
                  {item.type2 != '' && (
                    <div className="pl-[4px] text-[12px]">{item.type2}</div>
                  )}
                </div>
                <div className="font-font03 text-[12px]">{item.weight}</div>
              </div>

              <div className="font-font01 text-[16px]">${item.price}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="font-font01 text-[16px] whitespace-nowrap sm:text-[29px]">
        = ${currQt * item.price}
      </div>
    </li>
  );
}

export default CheckoutItem;

// <li className="flex p-[24px] gap-[24px] bg-white rounded-lg">
//   <div className="flex items-center justify-between w-full">
//     <div className="flex">
//       <img src="public/products/pinkRozay.png" className="w-[150px]"></img>
//       <div className="flex flex-col w-full gap-[4px] px-[5px] py-[12px] text-green09">
//         <div className="font-font01 text-[22px] md:text-[24px] md:lg-[29px]">
//           Pink Rozay
//         </div>
//         <div className="flex divide-x-2 font-font03">
//           <div className="pr-[4px]">Indica</div>
//           <div className="pl-[4px]">Hybrid</div>
//         </div>
//         <div className="font-font03">3.5g</div>
//         <div className="font-font03">Quantity: 1</div>
//       </div>
//     </div>
//     <div className="font-font01 text-[29px] place-self-start py-[12px]">
//       $50
//     </div>
//   </div>
// </li>
