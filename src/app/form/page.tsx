"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

const initformData = {
  text: "",
  textarea: "",
};

export default function Form() {
  useEffect(() => {
    window.sessionStorage.clear();
  }, []);

  const [formData, setFormData] = useState(initformData);
  const [message, setMessage] = useState("");
  const router = useRouter();
  const formItemCommonStyles = "border border-gray-700 w-full";
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let inValid = false;
    setMessage("");
    for (const [key, value] of Object.entries(formData)) {
      if (value) {
        window.sessionStorage.setItem(key, value);
      } else {
        window.sessionStorage.clear();
        inValid = true;
        setMessage("全て入力してください");
      }
    }
    if (inValid) {
      return;
    }
    router.push("/form/confirm");
  }

  return (
    <div className={`flex flex-col items-center`}>
      <form
        onSubmit={onSubmit}
        className="white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="header">
          <h2 className="text-center font-bold">Form</h2>
        </div>
        <div className="body mt-2 mb-2">
          <input
            type="text"
            name="text"
            value={formData.text}
            onChange={(event) =>
              setFormData({ ...formData, text: event.target.value })
            }
            className={`${formItemCommonStyles} mb-2`}
          />
          <textarea
            name="textarea"
            value={formData.textarea}
            cols={5}
            rows={5}
            onChange={(event) =>
              setFormData({ ...formData, textarea: event.target.value })
            }
            className={`${formItemCommonStyles} mb-0`}
          />
        </div>
        <div className="footer">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full"
            type="submit"
          >
            to confirm
          </button>
          <span className="text-rose-500">{message}</span>
        </div>
      </form>
    </div>
  );
}
