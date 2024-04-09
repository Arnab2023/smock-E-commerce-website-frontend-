import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendAPI } from "../../API";

const Address = ({ setProgress }) => {
  const [addressData, setaddressData] = useState([]);
  const [display, setDisplay] = useState({
    edit: false,
    address: false,
  });

  const fetchAddress = async () => {
    try {
      const { data } = await axios.get(`${backendAPI}/api/address/all`, {
        params: {
          subId: "661236440774da34ed2307cc",
        },
      });

      setaddressData(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchAddress();
  }, []);
  useEffect(() => {
    setProgress(100);
  }, []);
  return (
    <div className="flex m-auto  mt-4">
      <div className="flex flex-col ">
        <p className="text-[#282c3f] text-[18px] font-[600] ">
          Select Delivery Address:
        </p>
        <p className="text-[12px] font-[600] text-[#535766] mt-3">
          DEFAULT ADDRESS
        </p>
        {addressData?.map((address) => (
          <>
            <div className="h-[202.85px] w-[639.467px] shadow-md rounded-[4px] pl-[50px] pt-[20px]  relative mt-5 border-[1px] border-[#d4d5d9]">
              <div className="absolute top-[20px] left-[20px]">
                <input
                  type="radio"
                  className="form-radio h-4 w-4 border-red-600 focus:ring-red-500"
                />
              </div>
              <p className="text-[14px] font-semibold text-[#282c3f]">
                {address.name}
              </p>

              <p className="mt-3 text-[13px] text-[#424553]">
                {address.addressLine}
                <p className=" text-[13px] text-[#424553]">{`${address.state} ${address.city} -${address.pincode} `}</p>
              </p>
              <p className="mt-2 text-[13px] text-[#424553]">
                Mobile:{" "}
                <span className="font-bold text-[13px] text-[#424553]">
                  9315953204
                </span>
              </p>
              <p className="text-[14px] mt-2 text-[#424553]">
                • Cash on delivery available
              </p>
              <div className="flex gap-4 mt-2 ">
                <p className="border-[1px] border-black  text-[#282c3f] rounded-[4px] text-[12px] py-1 px-2 font-[700] flex items-center justify-center">
                  REMOVE
                </p>
                <p className="border-[1px] border-black  text-[#282c3f] rounded-[4px] text-[12px] py-1  px-2 font-[700]  flex items-center justify-center ">
                  EDIT
                </p>
              </div>
            </div>
          </>
        ))}
        <div className=" flex w-[639.467px] shadow-md rounded-[4px] h-[72px] border-[1px] border-dashed border-[#d4d5d9] mt-3 items-center ">
          <p className="text-[#5a49e3] font-bold ml-3">+ Add new address</p>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Address;