"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type InitData = { [key: string]: string };
const storageKeys = ["text", "textarea", "csrfToken"];
const keyLabels: InitData = {
  text: "テキスト",
  textarea: "テキストエリア",
  csrfToken: "CSRFトークン",
};
const initData: InitData = {
  text: "",
  textarea: "",
  csrfToken: "",
};

export default function CsrfFormConfirm() {
  const router = useRouter();
  const [data, setData] = useState(initData);
  useEffect(() => {
    const formData: InitData = {};
    for (var i = 0; i < storageKeys.length; i++) {
      const key = storageKeys[i];
      const value = window.sessionStorage.getItem(key) || "";
      formData[key] = value;
    }
    if (Object.values(formData).some((value) => !value)) {
      window.alert("未入力項目があります。フォーム画面へ遷移します。");
      router.push("/form");
    }
    setData(formData);
  }, []);
  const submit = async () => {
    try {
      const response = await fetch("/api/", {
        method: "POST",
        body: JSON.stringify(data),
      });
      console.debug(await response.json());
      if (response.status === 200) {
        window.alert("complete!");
        router.push("/");
      } else {
        window.alert("failed :(");
      }
    } catch (e) {
      console.error(e);
      window.alert("unexpected error :(");
    }
  };

  return (
    <div className={`flex flex-col items-center`}>
      <div className="header">
        <h2 className="text-center font-bold">Form Confirm</h2>
      </div>
      <div className="body mt-2 mb-2">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <tbody>
            {storageKeys.map((key, index) => {
              const isEven = index % 2 === 0;
              return (
                <tr
                  key={index}
                  className={
                    isEven
                      ? `border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700`
                      : `bg-white border-b dark:bg-gray-900 dark:border-gray-700`
                  }
                >
                  <td className="px-6 py-4">{keyLabels[key]}</td>
                  <td className="px-6 py-4">{data[key]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="footer">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full"
          type="submit"
          onClick={submit}
        >
          regist
        </button>
      </div>
    </div>
  );
}
