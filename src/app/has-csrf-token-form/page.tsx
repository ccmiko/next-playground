import CsrfForm from "@/app/has-csrf-token-form/form";
import { headers } from "next/headers";

export default function Form() {
  const csrfToken = headers().get("x-csrf-token") || "none";
  return <CsrfForm csrfToken={csrfToken} />;
}
