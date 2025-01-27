"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { UploadError } from "../types";
import UploadLayout from "../layouts/UploadLayout";
import { BiLoaderCircle, BiSolidCloudUpload } from "react-icons/bi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { PiKnifeLight } from "react-icons/pi";

export default function Upload() {
  const router = useRouter();

  let [fileDisplay, setFileDisplay] = useState<string>("");
  let [caption, setCaption] = useState<string>("");
  let [file, setFile] = useState<File | null>(null);
  let [error, setError] = useState<UploadError | null>(null);
  let [isUploading, seUploading] = useState<boolean>(false);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const file = files[0];
      const fileUrl = URL.createObjectURL(file);
      setFileDisplay(fileUrl);
      setFile(file);
    }
  };

  const clearVideo = () => {
    setFileDisplay("");
    setFile(null);
  };

  return (
    <>
      <UploadLayout>
        <div className="w-full mt-[80px] bg-white shadow-lg rounded-md py-6 md:px-10 px-4">
          <div>
            <h1 className="text-[23px] font-semibold">Upload video</h1>
            <h2 className="text-gary-400 mt-1">Post a video to your account</h2>
          </div>
          <div className="mt-8 md:flex gap-6">
            {!fileDisplay ? (
              <label
                htmlFor="fileInput"
                className="md:mx-0 mx-auto mt-4 mb-6 flex flex-col items-center justify-center w-full max-w-[260px] h-[470px] text-center p-3 border-2 border-dashed border-gray-300 rounded-lg hover:bg-gray-100 cursor-pointer"
              >
                <BiSolidCloudUpload size="40" color="#B3B3B1" />
                <p className="mt-4 text-[17px]">Select video to upload</p>
                <p className="mt-1.5 text-gray-500 text-[13px]">
                  Or drag and drop a file
                </p>
                <p className="mt-12 text-gray-500 text-sm">MP4</p>
                <p className="mt-2 text-gray-500 text-[13px]">
                  Up to 30 minutes
                </p>
                <p className="mt-2 text-gray-500 text-[13px]">Less than 2 GB</p>
                <label
                  htmlFor="fileInput"
                  className="px-2 py-1.5 mt-8 text-white text-[15px] w-[80%] bg-[#F02C56] rounded-sm cursor-pointer"
                >
                  Select file
                </label>
                <input
                  type="file"
                  id="fileInput"
                  onChange={onChange}
                  hidden
                  accept=".mp4"
                />
              </label>
            ) : (
              <div className="md:mx-0 mx-auto mt-4 md:mb-12 mb-16 flex items-center justify-center w-full max-w-[260px] h-[540px] p-3 rounded-2xl cursor-pointer relative">
                {!isUploading ? (
                  <div className="absolute flex items-center justify-center z-20 bg-black h-full w-full rounded-[50px] bg-opacity-50">
                    <div className="mx-auto flex items-center justify-center gap-1">
                      <BiLoaderCircle
                        className="animate-spin"
                        color="#F12B56"
                        size={30}
                      />
                      <div className="text-white font-bold">Uploading...</div>
                    </div>
                  </div>
                ) : null}
                <img
                  className="absolute z-20 pointer-events-none"
                  src="/images/mobile-case.png"
                  alt=""
                />
                <img
                  className="absolute riht-4 bottom-6 z-20"
                  width="90"
                  src="/images/tiktok-logo-white.png"
                  alt=""
                />
                <video
                  autoPlay
                  loop
                  muted
                  className="absolute rounded-xl object-cover z-19 p-[13px] w-full h-full"
                  src={fileDisplay}
                />
                <div className="absolute -bottom-12 flex items-center justify-between z-50 rounded-xl border w-full p-2 border-gray-300">
                  <div className="flex items-center truncate">
                    <AiOutlineCheckCircle size="16" className="min-w-[16px]" />
                    <p className="text-[11px] pl -1 truncate text-ellipsis">
                      {file ? file.name : ""}
                    </p>
                  </div>
                  <button
                    onClick={() => clearVideo()}
                    className="text-[11px] ml-2 font-semibold"
                  >
                    Change
                  </button>
                </div>
              </div>
            )}
            <div className="mt-4 mb-6">
              <div className="flex bg-[#F8F8F8] py-4 px-6">
                <div>
                  <PiKnifeLight className="mr-4" size="20" />
                </div>
                <div className="text-sembold text-[15px] mb-1.5">
                  Divide videos and edit
                </div>
                <div className="text-sembold text-[13px] text-gray-400">
                  You Can quickly divide videos into multiple parts, remove
                  redundant and turn landscape videos into portrait videos into
                  portrait videos
                </div>
              </div>
            </div>
          </div>
        </div>
      </UploadLayout>
    </>
  );
}
