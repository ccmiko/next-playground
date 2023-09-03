import CsrfFormConfirm from "@/app/has-csrf-token-form/confirm/form";
import { headers } from "next/headers";

export default function FormConfirm() {
  // NOTE: コンポーネント内でhook使いたいけどserver componentでしか参照できない部品を使いたい場合は親をサーバーコンポーネントにする
  const csrfToken = headers().get("x-csrf-token") || "none";
  return <CsrfFormConfirm csrfToken={csrfToken} />;
}
