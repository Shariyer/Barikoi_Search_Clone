/** @format */

import React, { useEffect, useState } from "react";
import { HiChevronRight } from "react-icons/hi2";
import { AiOutlineSearch } from "react-icons/ai";
import { AddressAutofill } from "@mapbox/search-js-react";
import MapBoxFunction from "../MapBox/MapBoxFunction";
// import AutocompleteInput from "../AutocompleteInput/AutocompleteInput";

const Drawer = () => {
  const [sBoxText, setsBoxText] = useState("");
  const [res, setResponse] = useState(null);
  const [selectedValue, setSelectedValue] = useState("");
  const [selectedOption, setSelectedOption] = useState([]);

  function handleSelectChange(event) {
    setSelectedOption(event.target.value);
    document.getElementById("seletedPlaceBox").style.display = "none";
  }

  // barikoi auto complete
  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const sText = form.searchText.value;
    document.getElementById("seletedPlaceBox").style.display = "block";
    setsBoxText(sText);
  };
  useEffect(() => {
    // form.reset();
    // console.log(sBoxText);
    fetch(
      `https://barikoi.xyz/v1/api/search/autocomplete/NDYyOTpPSUhaQ0U1SUlJ/place?q=${sBoxText}`
    )
      .then((response) => response.json())
      .then((response) => {
        setResponse(response.places);
      })
      .catch((error) => console.error("Error:", error));
  }, [sBoxText]);

  // for auto complete

  console.log(res);
  console.log(selectedValue);
  return (
    <div>
      {/* drawer code   */}
      <div className="drawer  bg-white">
        <input
          id="my-drawer"
          type="checkbox"
          className="drawer-toggle border-0"
        />
        <div className="drawer-content  flex justify-center items-center">
          {/* map */}
          <MapBoxFunction />
          <label
            htmlFor="my-drawer"
            className="text-black text-4xl absolute top-10 left-5 z-40">
            <HiChevronRight />
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="  menu p-4 w-80 bg-white  text-base-content">
            {/* <!-- Sidebar content here -->   */}

            <h2 className="font-bold text-3xl text-black mb-5">
              Bari<span className="text-green-400">koi</span>
            </h2>
            <div className=" bg-white border-spacing-0 py-2 text-2xl rounded-md shadow-2xl">
              <form
                onSubmit={handleForm}
                className="flex justify-center items-center">
                <AddressAutofill accessToken="pk.eyJ1Ijoic21zaGFyaXllciIsImEiOiJjbGZtZjRueWEwYW16M3dtbTRuenBuMng3In0.Djh9Xo74MHda0QMlqoEX8w">
                  <div>
                    <input
                      autoComplete="shipping address-line1"
                      // value={value}
                      // onChange={(e) => setValue(e.target.value)}
                      type="text"
                      name="searchText"
                      placeholder="Search Location"
                      // onClick={handleSearchBox}
                      className=" bg-white py-2 text-center text-black text-xl "></input>

                    {res && (
                      <select
                        value={selectedOption}
                        id="seletedPlaceBox"
                        onChange={handleSelectChange}>
                        {res.map((r, i) => (
                          <option
                            value={r.address}
                            className="relative overflow-hidden"
                            key={i}>
                            {r.address}
                          </option>
                        ))}
                      </select>
                    )}

                    <button
                      // onClick={handleEmptySearchBox}
                      type="submit"
                      className="px-3 py-2 mr-2 text-white rounded-md bg-gradient-to-r from-blue-400 to-green-500">
                      <AiOutlineSearch />
                    </button>
                  </div>
                </AddressAutofill>

                {/* <input
                  name="postcode"
                  placeholder="Postcode"
                  type="text"
                  autoComplete="postal-code"
                /> */}
              </form>

              {/* <form
                onSubmit={handleForm}
                className="flex justify-center items-center">
                <input
                type="text"
                name="searchText"
                  placeholder="Search Location"
                  // onClick={handleSearchBox}
                  className=" bg-white py-2 text-center text-black text-xl "></input>
                  <div>
                  <button
                  // onClick={handleEmptySearchBox}
                  type="submit"
                  className="px-3 py-2 mr-2 text-white rounded-md bg-gradient-to-r from-blue-400 to-green-500">
                  <AiOutlineSearch />
                  </button>
                  </div>
                </form> */}
            </div>
            {/* <AutocompleteInput /> */}
            <p>Seleted Option: {selectedOption}</p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
