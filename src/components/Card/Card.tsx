import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { searchState } from "../../globalRecoilState/Atoms/Atoms";
import { useQuery } from "@apollo/client";
import { GET_COUNTRY_INFO } from "./../../queries/GetCountryInfo/GetCountryInfo";

const Card: React.FC = () => {
  const searchTerm = useRecoilValue<string>(searchState);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [infoDetail, setInfoDetail] = useState();
  const { data } = useQuery(GET_COUNTRY_INFO, {
    variables: {
      name: searchTerm,
      alpha2Code: "AG",
    },
  });

  useEffect(() => {
    let isMounted = true; // note this flag denote mount status

    const getData = async () => {
      if (data) {
        if (
          data && data.searchByName&&data.searchByName[0]
        ) {
          return await  data && data.searchByName&&data.searchByName[0]
        } else if (
          data && data.searchByAlpha2Code&&data.searchByAlpha2Code[0]
        ) {
          return await data && data.searchByAlpha2Code&&data.searchByAlpha2Code[0]
        }
        else{
          return {};
        }
      }
      else {
        return {};
      }
    };
    getData().then((data: any) => {
      if (isMounted) setInfoDetail(data);
    });

    return () => {
      isMounted = false;
    }; // use effect cleanup to set flag false, if unmounted
  }, [data]);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      {/* {infoDetail.map((info)=> <div>{info.name}</div>)} */}
      <img className="w-full" src={""} alt="country_flag" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2"></div>
        <p className="text-gray-700 text-base">
  {/* <strong>Código: {infoDetail && infoDetail.name} </strong>  */}
          
          {/* {console.log( data && data.searchByAlpha2Code,infoDetail,"info")} */}
        </p>
        <p className="text-gray-700 text-base">
          <strong>Capital: </strong> 
        </p>
        <p className="text-gray-700 text-base">
          <strong>Moneda: </strong> 
        </p>
        <button
          className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-auto"
          type="button"
          style={{ transition: "all .15s ease" }}
          onClick={() => setShowModal(true)}
        >
          Ver mas
        </button>
        {showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              onClick={() => setShowModal(false)}
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      Detalles del pais
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  <div className="relative p-6 flex-auto">
                    <p className="text-gray-700 text-base">
                      <strong>Nombre: </strong> 
                    </p>
                    <p className="text-gray-700 text-base">
                      <strong>Código: </strong> 
                    </p>
                    <p className="text-gray-700 text-base">
                      <strong>Capital: </strong> 
                    </p>
                    <p className="text-gray-700 text-base">
                      <strong>Moneda : </strong>{" "}
                      
                    </p>
                    <p className="text-gray-700 text-base">
                      <strong>Área: </strong> 
                    </p>
                    <p className="text-gray-700 text-base">
                      <strong>Densidad Poblacional: </strong> 
                    </p>
                    <p className="text-gray-700 text-base">
                      <strong>Nombre Nativo: </strong> 
                    </p>
                    <p className="text-gray-700 text-base">
                      <strong>Población: </strong> 
                    </p>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                      type="button"
                      style={{ transition: "all .15s ease" }}
                      onClick={() => setShowModal(false)}
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Card;
