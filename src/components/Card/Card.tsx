import React, {useEffect, useState} from "react";
import {useRecoilValue, useRecoilState} from "recoil";
import {infoDetailState, searchState} from "../../globalRecoilState/Atoms/Atoms";
import {useQuery} from "@apollo/client";
import {GET_COUNTRY_INFO} from "../../queries/GetCountryInfo/GetCountryInfo";
import error from "./../../images/error.png"

const Card: React.FC = () => {
    const searchTerm = useRecoilValue<string>(searchState);
    const [showModal, setShowModal] = useState<boolean>(false);
    const [infoDetail, setInfoDetail] = useRecoilState(infoDetailState);
    const {data} = useQuery(GET_COUNTRY_INFO, {
        variables: {
            name: searchTerm,
            alpha2Code: searchTerm.toUpperCase(),
        },
    });

    useEffect(() => {
        let isMounted = true; // this flag denote mount status

        const getData = async () => {
            if (data) {
                if (
                    data && data.searchByName && data.searchByName[0]
                ) {
                    return await data && data.searchByName && data.searchByName[0]
                } else if (
                    data && data.searchByAlpha2Code && data.searchByAlpha2Code[0]
                ) {
                    return await data && data.searchByAlpha2Code && data.searchByAlpha2Code[0]
                } else {
                    return {};
                }
            } else {
                return {};
            }
        };
        getData().then((data: any) => {
            if (isMounted) setInfoDetail(data);
        }).catch();

        return () => {
            isMounted = false;
        }; // use effect cleanup to set flag false, if unmounted
    }, [data, setInfoDetail]);

    return (
        <>
            {
                infoDetail && infoDetail.name ? <div className="p-8 max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full" src={`${infoDetail && infoDetail.flag && infoDetail.flag.svgFile}`}
                         alt="country_flag"/>
                    <div className="px-6 py-4">
                        <div className="font-bold ">
                            <strong>Nombre: </strong> {infoDetail && infoDetail.name}
                        </div>
                        <div className="font-bold text-xl mb-2"/>

                        <p className="text-gray-700 text-base">
                            <strong>Capital: </strong> {infoDetail && infoDetail.capital}
                        </p>
                        <p className="text-gray-700 text-base">
                            <strong>Código: </strong> {infoDetail && infoDetail.numericCode}
                        </p>
                        <p className="text-gray-700 text-base">
                            <strong>Moneda: </strong> {infoDetail && infoDetail.currencies && infoDetail.currencies[0].name}
                        </p>
                        <button
                            className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-auto"
                            type="button"
                            style={{transition: "all .15s ease"}}
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
                                        <div
                                            className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                            <div
                                                className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                                                <h3 className="text-3xl font-semibold">
                                                    Detalles de {infoDetail && infoDetail.name}
                                                </h3>
                                                <button
                                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                    onClick={() => setShowModal(false)}
                                                >
                      <span
                          className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                                                </button>
                                            </div>
                                            <div className="relative p-6 flex-auto">
                                                <p className="text-gray-700 text-base">
                                                    <strong>Nombre: </strong> {infoDetail && infoDetail.name} {infoDetail && infoDetail.flag && infoDetail.flag.emoji}
                                                </p>
                                                <p className="text-gray-700 text-base">
                                                    <strong>Código: </strong> {infoDetail && infoDetail.numericCode}
                                                </p>
                                                <p className="text-gray-700 text-base">
                                                    <strong>Capital: </strong> {infoDetail && infoDetail.capital}
                                                </p>
                                                <p className="text-gray-700 text-base">
                                                    <strong>Moneda {`(${infoDetail && infoDetail.currencies && infoDetail.currencies[0].symbol})`} : </strong>
                                                    {infoDetail && infoDetail.currencies && infoDetail.currencies[0].name}
                                                </p>
                                                <p className="text-gray-700 text-base">
                                                    <strong>Área: </strong> {infoDetail && infoDetail.area} millones km²
                                                </p>
                                                <p className="text-gray-700 text-base">
                                                    <strong>Densidad
                                                        Poblacional: </strong> {infoDetail && infoDetail.populationDensity} por
                                                    km²
                                                </p>
                                                <p className="text-gray-700 text-base">
                                                    <strong>Nombre
                                                        Nativo: </strong> {infoDetail && infoDetail.nativeName}
                                                </p>
                                                <p className="text-gray-700 text-base">
                                                    <strong>Población: </strong> {infoDetail && infoDetail.population} millones
                                                </p>
                                            </div>
                                            {/*footer*/}
                                            <div
                                                className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                                                <button
                                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                                    type="button"
                                                    style={{transition: "all .15s ease"}}
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
                </div> : searchTerm !== "" &&
                    <img className="w-3/6" src={`${error}`} alt="country_flag"/>
            }

        </>
    );
};

export default Card;
