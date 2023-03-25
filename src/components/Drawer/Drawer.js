/** @format */

import React, { useEffect, useState } from "react";
import { HiChevronRight } from "react-icons/hi2";
import { AiOutlineSearch } from "react-icons/ai";
import { AddressAutofill } from "@mapbox/search-js-react";
import MapBoxFunction from "../MapBox/MapBoxFunction";
// import AutocompleteInput from "../AutocompleteInput/AutocompleteInput";

const Drawer = () => {
  const [sBoxText, setsBoxText] = useState("");
  const [res, setResponse] = useState("");
  const [placeholderValue, setPlaceholderValue] = useState("Search Location");
  const [selectedOption, setSelectedOption] = useState("");
  const [lat, setLat] = useState(23.76024811036424);
  const [lg, setLg] = useState(90.36105114959472);
  const [placeType, setPlaceType] = useState("");

  // function handleSelectChange(event) {
  //   setSelectedOption(event.target.value);
  //   setPlaceholderValue(selectedOption);
  //   // window.document.getElementById("seletedPlaceBox").style.display = "none";
  // }

  // barikoi auto complete
  const handleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const sText = form.searchText.value;
    setLat(23.76024811036424);
    setLg(90.36105114959472);
    setPlaceType("");
    window.document.getElementById("vanish").style.display = "block";
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
  const handleOnClick = (place) => {
    console.log(place);
    // console.log(place.latitude + "From place");
    // console.log(place.latitude + "From place");

    setSelectedOption(place.address);
    setLat(place?.latitude);
    setLg(place?.longitude);
    setPlaceType(place.pType);
    document.getElementById("vanish").style.display = "none";
  };

  // console.log(res);
  // console.log(selectedValue);
  //implementining dark theme

  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    // console.log(isChecked);
  };
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
          <MapBoxFunction lat={lat} lg={lg} placeType={placeType} />
          <label
            htmlFor="my-drawer"
            className="text-black text-4xl absolute top-10 left-5 z-40">
            <HiChevronRight />
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul
            className={
              isChecked
                ? "menu p-4 w-80 bg-white  text-base-content"
                : "menu p-4 w-80 bg-black  text-white"
            }>
            {/* <!-- Sidebar content here -->   */}

            <div className="flex justify-between">
              <h2
                className={
                  isChecked
                    ? "font-bold text-3xl text-black mb-5"
                    : "font-bold text-3xl text-white mb-5"
                }>
                Bari<span className="text-green-400">koi</span>
              </h2>
              <input
                type="checkbox"
                className="toggle toggle-warning"
                checked={!isChecked}
                onChange={handleToggle}
              />
            </div>
            <div
              className={
                isChecked
                  ? "bg-black border-spacing-0 py-2 text-2xl rounded-md shadow-2xl"
                  : "bg-white border-spacing-0 py-2 text-2xl rounded-md"
              }>
              <form
                onSubmit={handleForm}
                className={
                  isChecked
                    ? "flex justify-center items-center"
                    : "flex justify-center items-cente"
                }>
                <AddressAutofill accessToken="pk.eyJ1Ijoic21zaGFyaXllciIsImEiOiJjbGZtZjRueWEwYW16M3dtbTRuenBuMng3In0.Djh9Xo74MHda0QMlqoEX8w">
                  <div className="flex justify-between ">
                    <input
                      autoComplete="shipping address-line1"
                      // value={value}
                      // onChange={(e) => setValue(e.target.value)}
                      type="text"
                      name="searchText"
                      placeholder={placeholderValue}
                      // onClick={handleSearchBox}
                      className={
                        isChecked
                          ? "bg-black py-2 text-xs text-center  text-white "
                          : "bg-white py-2 text-xs text-center text-black "
                      }></input>

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
              <div
                id="vanish"
                className={isChecked ? "text-black" : "text-white"}>
                {res &&
                  res.map((r, i) => (
                    <li
                      name="optionName"
                      value={r.address}
                      onClick={() => handleOnClick(r)}
                      className={
                        isChecked
                          ? "text-white text-xl w-full"
                          : "text-black text-xl w-full"
                      }
                      // className="w-full "
                      key={i}>
                      {r.address}
                    </li>
                  ))}
              </div>

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
            <p className={isChecked ? "mt-20 text-black" : "mt-20 text-white"}>
              Seleted Option: {selectedOption}
            </p>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
