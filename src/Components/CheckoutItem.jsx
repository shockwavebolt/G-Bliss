import { useCart } from "./CartContext";

function CheckoutItem({ item }) {
  const { getQuantity } = useCart();
  const currQt = getQuantity(item.id);
  return (
    <li className="flex p-[24px]  gap-[8px] items-center sm:gap-[16px]">
      <div className="font-font01 text-resin00 text-[26px] sm:text-[29px]">
        {currQt}x
      </div>
      <div className="flex flex-col gap-[8px] items-end sm:gap-[16px]">
        <div className="flex p-[16px] bg-white rounded-lg sm:p-[24px]">
          <img src={item.img} className="h-[120px] sm:h-[150px] self-center" />
          <div className=" flex flex-col  pr-[24px]">
            <div className="flex flex-col py-[16px] text-green09 sm:py-[24px]">
              <div className="font-font01 text-[20px]">{item.name}</div>
              <div
                className={`flex ${
                  item.type2 != "" && "divide-x-2"
                } font-font03`}
              >
                <div className="pr-[4px] text-[16px] sm:text-[18px]">
                  {item.type}
                </div>
                {item.type2 != "" && (
                  <div className="pl-[4px] text-[16px] sm:text-[18px]">
                    {item.type2}
                  </div>
                )}
              </div>
              <div className="font-font01 text-[16px] sm:text-[18px]">
                ${item.price}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="font-font01 text-resin00 text-[26px] sm:text-[29px]">
        = $50
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
